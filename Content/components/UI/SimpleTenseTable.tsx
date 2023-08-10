import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';

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
            : Colors.green10,
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
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 16,
        }}>
        {children}
      </Text>
    </View>
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
        <Text>I</Text>
        <Text>You</Text>
        <Text>We</Text>
        <Text>They </Text>
        <Text>He</Text>
        <Text>She</Text>
        <Text>It</Text>
      </View>
      <View style={{flex: 0.5}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>d</Text>
          </View>
        </View>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.5}}>
        <Text>I</Text>
        <Text>You</Text>
        <Text>We</Text>
        <Text>They </Text>
        <Text></Text>
        <Text>He</Text>
        <Text>She</Text>
        <Text>It</Text>
      </View>
      <View style={{flex: 0.5}}>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>dance</Text>
        <Text></Text>
        <Text></Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>s</Text>
          </View>
        </View>
      </View>
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They</Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>&apos;ll</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>will</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>didn&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>did not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text></Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>don&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>doesn&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text></Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>do not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>

            <Text style={{color: 'red', fontSize: 16}}>does not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>won&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text>I</Text>
            <Text>You</Text>
            <Text>We</Text>
            <Text>They </Text>
            <Text>He</Text>
            <Text>She</Text>
            <Text>It</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'red', fontSize: 16}}>will not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      )}
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{color: 'red', fontSize: 16}}>Did</Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text>I</Text>
        <Text>You</Text>
        <Text>We</Text>
        <Text>They </Text>
        <Text>He</Text>
        <Text>She</Text>
        <Text>It</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text></Text>
        <Text></Text>
        <Text style={{color: 'red', fontSize: 16}}>Do</Text>
        <Text></Text>
        <Text></Text>
        <Text style={{color: 'red', fontSize: 16}}>Does</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text>I</Text>
        <Text>You</Text>
        <Text>We</Text>
        <Text>They </Text>
        <Text></Text>
        <Text>He</Text>
        <Text>She</Text>
        <Text>It</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{color: 'red', fontSize: 16}}>Will</Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text>I</Text>
        <Text>You</Text>
        <Text>We</Text>
        <Text>They </Text>
        <Text>He</Text>
        <Text>She</Text>
        <Text>It</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>,
  ];

  const examples = [
    <View>
      <Text>I danced</Text>
      <Text>You danced</Text>
      <Text>He danced</Text>
      <Text>She danced</Text>
      <Text>It danced</Text>
      <Text>We danced</Text>
      <Text>They danced</Text>
    </View>,
    <View>
      <Text>I dance</Text>
      <Text>You dance</Text>
      <Text>He dances</Text>
      <Text>She dances</Text>
      <Text>It dances</Text>
      <Text>We dance</Text>
      <Text>They dance</Text>
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text>I&apos;ll dance</Text>
          <Text>You&apos;ll dance</Text>
          <Text>He&apos;ll dance</Text>
          <Text>She&apos;ll dance</Text>
          <Text>It&apos;ll dance</Text>
          <Text>We&apos;ll dance</Text>
          <Text>They&apos;ll dance</Text>
        </View>
      ) : (
        <View>
          <Text>I will dance</Text>
          <Text>You will dance</Text>
          <Text>He will dance</Text>
          <Text>She will dance</Text>
          <Text>It will dance</Text>
          <Text>We will dance</Text>
          <Text>They will dance</Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text>I didn&apos;t dance</Text>
          <Text>You didn&apos;t dance</Text>
          <Text>He didn&apos;t dance</Text>
          <Text>She didn&apos;t dance</Text>
          <Text>It didn&apos;t dance</Text>
          <Text>We didn&apos;t dance</Text>
          <Text>They didn&apos;t dance</Text>
        </View>
      ) : (
        <View>
          <Text>I did not dance</Text>
          <Text>You did not dance</Text>
          <Text>He did not dance</Text>
          <Text>She did not dance</Text>
          <Text>It did not dance</Text>
          <Text>We did not dance</Text>
          <Text>They did not dance</Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text>I don&apos;t dance</Text>
          <Text>You don&apos;t dance</Text>
          <Text>He doesn&apos;t dance</Text>
          <Text>She doesn&apos;t dance</Text>
          <Text>It doesn&apos;t dance</Text>
          <Text>We don&apos;t dance</Text>
          <Text>They don&apos;t dance</Text>
        </View>
      ) : (
        <View>
          <Text>I do not dance</Text>
          <Text>You do not dance</Text>
          <Text>He does not dance</Text>
          <Text>She does not dance</Text>
          <Text>It does not dance</Text>
          <Text>We do not dance</Text>
          <Text>They do not dance</Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text>I won&apos;t dance</Text>
          <Text>You won&apos;t dance</Text>
          <Text>He won&apos;t dance</Text>
          <Text>She won&apos;t dance</Text>
          <Text>It won&apos;t dance</Text>
          <Text>We won&apos;t dance</Text>
          <Text>They won&apos;t dance</Text>
        </View>
      ) : (
        <View>
          <Text>I will not dance</Text>
          <Text>You will not dance</Text>
          <Text>He will not dance</Text>
          <Text>She will not dance</Text>
          <Text>It will not dance</Text>
          <Text>We will not dance</Text>
          <Text>They will not dance</Text>
        </View>
      )}
    </View>,
    <View>
      <Text>Did I dance</Text>
      <Text>Did You dance</Text>
      <Text>Did He dance</Text>
      <Text>Did She dance</Text>
      <Text>Did It dance</Text>
      <Text>Did We dance</Text>
      <Text>Did They dance</Text>
    </View>,
    <View>
      <Text>Do I dance</Text>
      <Text>Do You dance</Text>
      <Text>Does He dance</Text>
      <Text>Does She dance</Text>
      <Text>Does It dance</Text>
      <Text>Do We dance</Text>
      <Text>Do They dance</Text>
    </View>,
    <View>
      <Text>Will I dance</Text>
      <Text>Will You dance</Text>
      <Text>Will He dance</Text>
      <Text>Will She dance</Text>
      <Text>Will It dance</Text>
      <Text>Will We dance</Text>
      <Text>Will They dance</Text>
    </View>,
  ];

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: isDarkTheme ? Colors.gray70 : Colors.gray20,
        borderRadius: 8,
        padding: 4,
      }}>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        dance
      </Text>
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
              {'past 🦖'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.317}}>
              {'present 🙋'}
            </Div>
            <Div active={show[1] === '3'} style={{flex: 0.317}}>
              {'future 🤖'}
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
              {'✅'}
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
              {'❌'}
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
              {'❓'}
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
