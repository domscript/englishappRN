import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';
import Image from '../../assets/Image';

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
          margin: 1,
          justifyContent: 'center',
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

export function QuestionWords() {
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
    // setContraction(prev => !prev);
    // setShow('');
    // setEx(0);
  };

  const data = [
    <TextImage name="why" />,
    <TextDesc name="to ask about reasons" />,
    <TextImage name="what" />,
    <TextDesc name="to ask about things or actions" />,
    <TextImage name="who" />,
    <TextDesc name="to ask about people" />,
    <TextImage name="where" />,
    <TextDesc name="to ask about places" />,
    <TextImage name="when" />,
    <TextDesc name="to ask about time or dates" />,
    <TextImage name="how" />,
    <TextDesc name="to ask about the way something is done" />,
  ];

  const examples = [
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I danced
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I dance
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
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will dance
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
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I did not dance
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
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I do not dance
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
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will not dance
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
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do I dance
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will I dance
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
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Interrogative Words
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
              style={{flex: 0.02}}>
              {/* {contraction ? '<>' : '><'} */}
            </Button>
            <Div active={show[1] === '1'} style={{flex: 0.49}}>
              {'word'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.49}}>
              {'about'}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('11')}
              active={show === '11'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '11' ? examples[0] : '-') : data[0]}
            </Button>
            <Button
              onClick={() => showExample('12')}
              active={show === '12'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '12' ? examples[1] : '-') : data[1]}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('21')}
              active={show === '21'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '21' ? examples[2] : '-') : data[2]}
            </Button>
            <Button
              onClick={() => showExample('22')}
              active={show === '22'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '22' ? examples[3] : '-') : data[3]}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '31' ? examples[4] : '-') : data[4]}
            </Button>

            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '32' ? examples[5] : '-') : data[5]}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '31' ? examples[6] : '-') : data[6]}
            </Button>

            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '32' ? examples[7] : '-') : data[7]}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '31' ? examples[8] : '-') : data[8]}
            </Button>

            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '32' ? examples[9] : '-') : data[9]}
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
              {''}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '31' ? examples[10] : '-') : data[10]}
            </Button>
            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.49}}>
              {ex === 1 ? (show === '32' ? examples[11] : '-') : data[11]}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

function TextImage({name}: {name: string}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            fontSize: 20,
          }}>
          {name.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          width: 30,
          height: 30,
        }}>
        <Image src={name} resizeMode="center" />
      </View>
    </View>
  );
}

function TextDesc({name}: {name: string}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  return (
    <View
      style={{
        // alignItems: 'center',
        padding: 2,
      }}>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          fontSize: 20,
        }}>
        {name}
      </Text>
    </View>
  );
}
