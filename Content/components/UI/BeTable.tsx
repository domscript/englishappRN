import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';
import Image from '../../assets/Image';

// TODO .
// Examples

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
      {children}
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
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 16,
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          {children}
        </Text>
      </View>
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

export function BeTable() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [show, setShow] = useState<ShowType>('');
  const [contraction, setContraction] = useState(false);
  const [ex, setEx] = useState(0);

  const showExample = (num: ShowType) => {
    // setShow(num);
    // setEx(prev => {
    //   if (prev < 1) return prev + 1;
    //   return 0;
    // });
  };

  const contractionF = () => {
    setContraction(prev => !prev);
    setShow('');
    setEx(0);
  };

  const pb = {
    '1': [
      {p: ['I', 'He', 'She', 'It'], be: 'was', q: false},
      {p: ['You', 'We', 'They'], be: 'were', q: false},
    ],
    '2': [
      {p: ['I'], be: 'am', q: false},
      {p: ['He', 'She', 'It'], be: 'is', q: false},
      {p: ['You', 'We', 'They'], be: 'are', q: false},
    ],
    '22': [
      {p: ['I'], be: "'m", q: false},
      {p: ['He', 'She', 'It'], be: "'s", q: false},
      {p: ['You', 'We', 'They'], be: "'re", q: false},
    ],
    '3': [
      {
        p: ['I', 'He', 'She', 'It', 'You', 'We', 'They'],
        be: 'will be',
        q: false,
      },
    ],
    '33': [
      {
        p: ['I', 'He', 'She', 'It', 'You', 'We', 'They'],
        be: "'ll be",
        q: false,
      },
    ],
    '4': [
      {p: ['I', 'He', 'She', 'It'], be: 'was not', q: false},
      {p: ['You', 'We', 'They'], be: 'were not', q: false},
    ],
    '44': [
      {p: ['I', 'He', 'She', 'It'], be: "wasn't", q: false},
      {p: ['You', 'We', 'They'], be: "weren't", q: false},
    ],
    '5': [
      {p: ['I'], be: 'am not', q: false},
      {p: ['He', 'She', 'It'], be: 'is not', q: false},
      {p: ['You', 'We', 'They'], be: 'are not', q: false},
    ],
    '55': [
      {p: ['I'], be: "'m not", q: false},
      {p: ['He', 'She', 'It'], be: "'s not", q: false},
      {p: ['You', 'We', 'They'], be: "'re not", q: false},
    ],
    '6': [
      {
        p: ['I', 'He', 'She', 'It', 'You', 'We', 'They'],
        be: 'will not be',
        q: false,
      },
    ],
    '66': [
      {
        p: ['I', 'He', 'She', 'It', 'You', 'We', 'They'],
        be: "won't be",
        q: false,
      },
    ],
    '7': [
      {p: ['I', 'He', 'She', 'It'], be: 'Was', q: true},
      {p: ['You', 'We', 'They'], be: 'Were', q: true},
    ],
    '8': [
      {p: ['I'], be: 'Am', q: true},
      {p: ['He', 'She', 'It'], be: 'Is', q: true},
      {p: ['You', 'We', 'They'], be: 'Are', q: true},
    ],
    '9': [
      {
        p: ['I', 'He', 'She', 'It', 'You', 'We', 'They'],
        be: 'Will',
        be0: 'be',
        q: true,
      },
    ],
  };

  const One = ({
    data,
  }: {
    data: {p: string[]; be: string; be0?: string; q: boolean}[];
  }) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      {data.map((el, i) => (
        <>
          <View
            key={el.p + el.be + i}
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#0000000F',
              borderRadius: 8,
            }}>
            {el.q && (
              <View
                style={{
                  flex: 0.4,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 16, textAlign: 'right'}}>
                  {el.be}
                </Text>
              </View>
            )}
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
              }}>
              {el.p.map((e, i) => (
                <Text
                  key={i}
                  style={{
                    textAlign: 'center',
                    color: isDarkTheme ? Colors.gray5 : Colors.gray95,
                  }}>
                  {e}
                </Text>
              ))}
            </View>
            {!el.q && (
              <View
                style={{
                  flex: 0.75,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 16}}>{el.be}</Text>
              </View>
            )}
            {el.be0 && (
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 16}}>{el.be0}</Text>
              </View>
            )}
          </View>
          {i < data.length - 1 && <View style={{height: 6}}></View>}
        </>
      ))}
    </View>
  );

  const data = [
    <One data={pb['1']} />,
    <>{contraction ? <One data={pb['22']} /> : <One data={pb['2']} />}</>,
    <>{contraction ? <One data={pb['33']} /> : <One data={pb['3']} />}</>,
    <>{contraction ? <One data={pb['44']} /> : <One data={pb['4']} />}</>,
    <>{contraction ? <One data={pb['55']} /> : <One data={pb['5']} />}</>,
    <>{contraction ? <One data={pb['66']} /> : <One data={pb['6']} />}</>,
    <One data={pb['7']} />,
    <One data={pb['8']} />,
    <One data={pb['9']} />,
  ];

  const examples = [
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        You danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        He danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        She danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        It danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        We danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        They danced
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        He dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        She dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        It dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        They dance
      </Text>
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They&apos;ll dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They will dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They didn&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They did not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They don&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They do not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They won&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They will not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did They dance
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do They dance
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will They dance
      </Text>
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
      <View style={{flexDirection: 'row', width: '100%', height: 70}}>
        <Image src="be" resizeMode="center" />
      </View>

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
              <Text
                style={{
                  color: isDarkTheme ? Colors.gray5 : Colors.gray95,
                  fontSize: 11,
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                {contraction ? '<>' : '><'}
              </Text>
            </Button>
            <Div active={show[1] === '1'} style={{flex: 0.317}}>
              {'past 👶'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.317}}>
              {'present 🧑'}
            </Div>
            <Div active={show[1] === '3'} style={{flex: 0.317}}>
              {'future 🧓'}
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
