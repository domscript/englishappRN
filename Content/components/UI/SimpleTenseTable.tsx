import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';

import Svg, {Circle, Line, Path, G, Ellipse} from 'react-native-svg';
import {BoyFace} from '../MyIcons/SVG/BoyFace';
import {ManFace} from '../MyIcons/SVG/ManFace';
import {OldFace} from '../MyIcons/SVG/OldFace';
import {VerbForms} from '../MyIcons/SVG/VerbForms';
import {VerbPicker} from './VerbPicker';
import {Sverbs} from '../../data/words';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  style?: {flex: number};
}

function Button({children, onClick, active = false, style}: ButtonProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        {
          backgroundColor: active
            ? isDarkTheme
              ? Colors.green70
              : Colors.green30
            : isDarkTheme
            ? Colors.gray60
            : Colors.gray10,
          borderRadius: 8,
          overflow: 'hidden',
          padding: 4,
          margin: 1,
        },
        style,
      ]}>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          fontSize: 11,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

interface DivProps {
  children: string;
  active?: boolean;
  style?: {flex: number};
}

function Div({children, active = false, style}: DivProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        {
          flex: 2,
          borderRadius: 8,
          overflow: 'hidden',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: active
            ? isDarkTheme
              ? Colors.green60
              : Colors.green20
            : isDarkTheme
            ? Colors.gray60
            : Colors.gray10,
        },
        style,
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {(['past', 'present', 'future'].includes(children) && (
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              {children + ' '}
            </Text>
            <Svg width="35" height="35">
              {children === 'past' ? (
                <BoyFace />
              ) : children === 'present' ? (
                <ManFace />
              ) : children === 'future' ? (
                <OldFace />
              ) : null}
            </Svg>
          </>
        )) || (
          <Svg width="20" height="20">
            <VerbForms tense={Number(children)} />
          </Svg>
        )}
      </View>
    </View>
  );
}

interface ExampleTextProps {
  children?: React.ReactNode;
}

function ExampleText({children}: ExampleTextProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <Text
      style={{fontSize: 12, color: isDarkTheme ? Colors.gray5 : Colors.gray95}}>
      {children}
    </Text>
  );
}

function DataText({children}: ExampleTextProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <Text style={{color: isDarkTheme ? Colors.gray5 : Colors.gray95}}>
      {children}
    </Text>
  );
}

type ShowType =
  | ''
  | '11'
  | '12'
  | '13'
  | '21'
  | '22'
  | '23'
  | '31'
  | '32'
  | '33';

export function SimpleTenseTable() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [show, setShow] = useState<ShowType>('');
  const [contraction, setContraction] = useState(false);
  const [ex, setEx] = useState(0);
  const [selectedValue, setSelectedValue] = useState('dance');

  const verbs = {...Sverbs};

  const value0 = verbs[selectedValue].value0;
  const value1 = verbs[selectedValue].value1;
  const value2 = verbs[selectedValue].value2;
  const value_end_v1 = verbs[selectedValue]?.value_end_v1;
  const value_end_v2 = verbs[selectedValue]?.value_end_v2;
  const value_root = verbs[selectedValue]?.value_root;

  const showExample = (num: ShowType) => {
    setShow(num);
    setEx(prev => {
      if (prev < 1) return prev + 1;
      return 0;
    });
  };

  const contractionF = () => {
    setContraction(prev => !prev);
    setShow('');
    setEx(0);
  };

  const data = [
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.5}}>
        <DataText>I</DataText>
        <DataText>You</DataText>
        <DataText>We</DataText>
        <DataText>They </DataText>
        <DataText>He</DataText>
        <DataText>She</DataText>
        <DataText>It</DataText>
      </View>
      <View style={{flex: 0.5}}>
        <DataText></DataText>
        <DataText></DataText>
        <DataText></DataText>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>
              {value_end_v2
                ? value_root
                  ? value_root
                  : value0
                : value2.includes(value0)
                ? value0
                : ''}
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>
              {value_end_v2
                ? value_end_v2
                : value2.includes(value0)
                ? 'd'
                : value2}
            </Text>
          </View>
        </View>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.5}}>
        <DataText>I</DataText>
        <DataText>You</DataText>
        <DataText>We</DataText>
        <DataText>They </DataText>
        <DataText></DataText>
        <DataText>He</DataText>
        <DataText>She</DataText>
        <DataText>It</DataText>
      </View>
      <View style={{flex: 0.5}}>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{fontSize: 16}}>{value0}</Text>
        <DataText></DataText>
        <DataText></DataText>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>
              {value_root ? value_root : value0}
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>
              {value_end_v1 ? value_end_v1 : 's'}
            </Text>
          </View>
        </View>
      </View>
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>&apos;ll</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>will</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>didn&apos;t</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>did not</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText></DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>don&apos;t</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>doesn&apos;t</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText></DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>do not</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>

            <Text style={{color: 'red', fontSize: 16}}>does not</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>won&apos;t</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <DataText>I</DataText>
            <DataText>You</DataText>
            <DataText>We</DataText>
            <DataText>They </DataText>
            <DataText>He</DataText>
            <DataText>She</DataText>
            <DataText>It</DataText>
          </View>
          <View style={{flex: 0.5}}>
            <DataText></DataText>
            <DataText></DataText>
            <Text style={{color: 'red', fontSize: 16}}>will not</Text>
            <Text style={{fontSize: 16}}>{value0}</Text>
            <DataText></DataText>
            <DataText></DataText>
          </View>
        </View>
      )}
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <DataText></DataText>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{color: 'red', fontSize: 16}}>Did</Text>
        <DataText></DataText>
        <DataText></DataText>
      </View>
      <View style={{flex: 0.4}}>
        <DataText>I</DataText>
        <DataText>You</DataText>
        <DataText>We</DataText>
        <DataText>They </DataText>
        <DataText>He</DataText>
        <DataText>She</DataText>
        <DataText>It</DataText>
      </View>
      <View style={{flex: 0.4}}>
        <DataText></DataText>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{fontSize: 16}}>{value0}?</Text>
        <DataText></DataText>
        <DataText></DataText>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{color: 'red', fontSize: 16}}>Do</Text>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{color: 'red', fontSize: 16}}>Does</Text>
      </View>
      <View style={{flex: 0.4}}>
        <DataText>I</DataText>
        <DataText>You</DataText>
        <DataText>We</DataText>
        <DataText>They </DataText>
        <DataText></DataText>
        <DataText>He</DataText>
        <DataText>She</DataText>
        <DataText>It</DataText>
      </View>
      <View style={{flex: 0.4}}>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{fontSize: 16}}>{value0}?</Text>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{fontSize: 16}}>{value0}?</Text>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <DataText></DataText>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{color: 'red', fontSize: 16}}>Will</Text>
        <DataText></DataText>
        <DataText></DataText>
      </View>
      <View style={{flex: 0.4}}>
        <DataText>I</DataText>
        <DataText>You</DataText>
        <DataText>We</DataText>
        <DataText>They </DataText>
        <DataText>He</DataText>
        <DataText>She</DataText>
        <DataText>It</DataText>
      </View>
      <View style={{flex: 0.4}}>
        <DataText></DataText>
        <DataText></DataText>
        <DataText></DataText>
        <Text style={{fontSize: 16}}>{value0}?</Text>
        <DataText></DataText>
        <DataText></DataText>
      </View>
    </View>,
  ];

  const examples = [
    <View>
      <ExampleText>I {value2}</ExampleText>
      <ExampleText>You {value2}</ExampleText>
      <ExampleText>He {value2}</ExampleText>
      <ExampleText>She {value2}</ExampleText>
      <ExampleText>It {value2}</ExampleText>
      <ExampleText>We {value2}</ExampleText>
      <ExampleText>They {value2}</ExampleText>
    </View>,
    <View>
      <ExampleText>I {value0}</ExampleText>
      <ExampleText>You {value0}</ExampleText>
      <ExampleText>He {value1}</ExampleText>
      <ExampleText>She {value1}</ExampleText>
      <ExampleText>It {value1}</ExampleText>
      <ExampleText>We {value0}</ExampleText>
      <ExampleText>They {value0}</ExampleText>
    </View>,
    <View>
      {contraction ? (
        <View>
          <ExampleText>I&apos;ll {value0}</ExampleText>
          <ExampleText>You&apos;ll {value0}</ExampleText>
          <ExampleText>He&apos;ll {value0}</ExampleText>
          <ExampleText>She&apos;ll {value0}</ExampleText>
          <ExampleText>It&apos;ll {value0}</ExampleText>
          <ExampleText>We&apos;ll {value0}</ExampleText>
          <ExampleText>They&apos;ll {value0}</ExampleText>
        </View>
      ) : (
        <View>
          <ExampleText>I will {value0}</ExampleText>
          <ExampleText>You will {value0}</ExampleText>
          <ExampleText>He will {value0}</ExampleText>
          <ExampleText>She will {value0}</ExampleText>
          <ExampleText>It will {value0}</ExampleText>
          <ExampleText>We will {value0}</ExampleText>
          <ExampleText>They will {value0}</ExampleText>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <ExampleText>I didn&apos;t {value0}</ExampleText>
          <ExampleText>You didn&apos;t {value0}</ExampleText>
          <ExampleText>He didn&apos;t {value0}</ExampleText>
          <ExampleText>She didn&apos;t {value0}</ExampleText>
          <ExampleText>It didn&apos;t {value0}</ExampleText>
          <ExampleText>We didn&apos;t {value0}</ExampleText>
          <ExampleText>They didn&apos;t {value0}</ExampleText>
        </View>
      ) : (
        <View>
          <ExampleText>I did not {value0}</ExampleText>
          <ExampleText>You did not {value0}</ExampleText>
          <ExampleText>He did not {value0}</ExampleText>
          <ExampleText>She did not {value0}</ExampleText>
          <ExampleText>It did not {value0}</ExampleText>
          <ExampleText>We did not {value0}</ExampleText>
          <ExampleText>They did not {value0}</ExampleText>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <ExampleText>I don&apos;t {value0}</ExampleText>
          <ExampleText>You don&apos;t {value0}</ExampleText>
          <ExampleText>He doesn&apos;t {value0}</ExampleText>
          <ExampleText>She doesn&apos;t {value0}</ExampleText>
          <ExampleText>It doesn&apos;t {value0}</ExampleText>
          <ExampleText>We don&apos;t {value0}</ExampleText>
          <ExampleText>They don&apos;t {value0}</ExampleText>
        </View>
      ) : (
        <View>
          <ExampleText>I do not {value0}</ExampleText>
          <ExampleText>You do not {value0}</ExampleText>
          <ExampleText>He does not {value0}</ExampleText>
          <ExampleText>She does not {value0}</ExampleText>
          <ExampleText>It does not {value0}</ExampleText>
          <ExampleText>We do not {value0}</ExampleText>
          <ExampleText>They do not {value0}</ExampleText>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <ExampleText>I won&apos;t {value0}</ExampleText>
          <ExampleText>You won&apos;t {value0}</ExampleText>
          <ExampleText>He won&apos;t {value0}</ExampleText>
          <ExampleText>She won&apos;t {value0}</ExampleText>
          <ExampleText>It won&apos;t {value0}</ExampleText>
          <ExampleText>We won&apos;t {value0}</ExampleText>
          <ExampleText>They won&apos;t {value0}</ExampleText>
        </View>
      ) : (
        <View>
          <ExampleText>I will not {value0}</ExampleText>
          <ExampleText>You will not {value0}</ExampleText>
          <ExampleText>He will not {value0}</ExampleText>
          <ExampleText>She will not {value0}</ExampleText>
          <ExampleText>It will not {value0}</ExampleText>
          <ExampleText>We will not {value0}</ExampleText>
          <ExampleText>They will not {value0}</ExampleText>
        </View>
      )}
    </View>,
    <View>
      <ExampleText>Did I {value0}</ExampleText>
      <ExampleText>Did You {value0}</ExampleText>
      <ExampleText>Did He {value0}</ExampleText>
      <ExampleText>Did She {value0}</ExampleText>
      <ExampleText>Did It {value0}</ExampleText>
      <ExampleText>Did We {value0}</ExampleText>
      <ExampleText>Did They {value0}</ExampleText>
    </View>,
    <View>
      <ExampleText>Do I {value0}</ExampleText>
      <ExampleText>Do You {value0}</ExampleText>
      <ExampleText>Does He {value0}</ExampleText>
      <ExampleText>Does She {value0}</ExampleText>
      <ExampleText>Does It {value0}</ExampleText>
      <ExampleText>Do We {value0}</ExampleText>
      <ExampleText>Do They {value0}</ExampleText>
    </View>,
    <View>
      <ExampleText>Will I {value0}</ExampleText>
      <ExampleText>Will You {value0}</ExampleText>
      <ExampleText>Will He {value0}</ExampleText>
      <ExampleText>Will She {value0}</ExampleText>
      <ExampleText>Will It {value0}</ExampleText>
      <ExampleText>Will We {value0}</ExampleText>
      <ExampleText>Will They {value0}</ExampleText>
    </View>,
  ];

  // pay, read, said

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: isDarkTheme ? Colors.gray70 : Colors.gray20,
        borderRadius: 8,
        padding: 4,
        marginTop: 10,
      }}>
      <VerbPicker
        data={[...Object.keys(verbs)].sort()}
        // data={['dance']}
        chooceHandler={setSelectedValue}
        selectedValue={selectedValue}
      />

      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Button
              onClick={contractionF}
              active={contraction}
              style={{flex: 0.04}}>
              {contraction ? '<>' : '><'}
            </Button>
            <Div active={show[1] === '1'} style={{flex: 0.317}}>
              {'past'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.317}}>
              {'present'}
            </Div>
            <Div active={show[1] === '3'} style={{flex: 0.317}}>
              {'future'}
            </Div>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '1'} style={{flex: 0.049}}>
              {'0'}
            </Div>
            <Button
              onClick={() => showExample('11')}
              active={show === '11'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '11' ? examples[0] : '-') : data[0]}
            </Button>
            <Button
              onClick={() => showExample('12')}
              active={show === '12'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '12' ? examples[1] : '-') : data[1]}
            </Button>
            <Button
              onClick={() => showExample('13')}
              active={show === '13'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '13' ? examples[2] : '-') : data[2]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '2'} style={{flex: 0.049}}>
              {'3'}
            </Div>
            <Button
              onClick={() => showExample('21')}
              active={show === '21'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '21' ? examples[3] : '-') : data[3]}
            </Button>
            <Button
              onClick={() => showExample('22')}
              active={show === '22'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '22' ? examples[4] : '-') : data[4]}
            </Button>
            <Button
              onClick={() => showExample('23')}
              active={show === '23'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '23' ? examples[5] : '-') : data[5]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',

              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '3'} style={{flex: 0.049}}>
              {'6'}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '31' ? examples[6] : '-') : data[6]}
            </Button>

            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '32' ? examples[7] : '-') : data[7]}
            </Button>

            <Button
              onClick={() => showExample('33')}
              active={show === '33'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '33' ? examples[8] : '-') : data[8]}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
