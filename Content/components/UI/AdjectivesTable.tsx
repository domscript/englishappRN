import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Tts from 'react-native-tts';
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

export function AdjectivesTable() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [contraction, setContraction] = useState(false);

  const showExample = (num: number) => {
    const data = [
      'i',
      'my',
      'you',
      'your',
      'he',
      'his',
      'she',
      'her ',
      'it',
      'its',
      'we',
      'our',
      'they',
      'their',
      'my book',
      'your phone',
      'his student',
      'her bag',
      'its pen',
      'our apple',
      'their car',
    ];
    Tts.stop();
    Tts.speak(data[num]);
  };

  const contractionF = () => {
    // setContraction(prev => !prev);
    // setShow('');
    // setEx(0);
  };

  const data = [
    <TextImage name="i" />,
    <TextImage name="my" />,
    <TextImage name="you" />,
    <TextImage name="your" />,
    <TextImage name="he" />,
    <TextImage name="his" />,
    <TextImage name="she" />,
    <TextImage name="her " />,
    <TextImage name="it" />,
    <TextImage name="its" />,
    <TextImage name="we" />,
    <TextImage name="our" />,
    <TextImage name="they" />,
    <TextImage name="their" />,
    <TextImage name="book" text={false} />,
    <TextImage name="phone" text={false} />,
    <TextImage name="student" text={false} />,
    <TextImage name="bag" text={false} />,
    <TextImage name="pen" text={false} />,
    <TextImage name="apple" text={false} />,
    <TextImage name="car" text={false} />,
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
        Possessive Adjectives
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
              style={{flex: 0.049}}>
              {/* {contraction ? '<>' : '><'} */}
            </Button>
            <Div active={false} style={{flex: 0.48}}>
              {'who?'}
            </Div>
            <Div active={false} style={{flex: 0.69}}>
              {'whose?'}
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
            <Div active={false} style={{flex: 0.049}}>
              {'1️⃣⚈'}
            </Div>
            <Button
              onClick={() => showExample(0)}
              active={false}
              style={{flex: 0.49}}>
              {data[0]}
            </Button>
            <Button
              onClick={() => showExample(1)}
              active={false}
              style={{flex: 0.49}}>
              {data[1]}
            </Button>
            <Button
              onClick={() => showExample(14)}
              active={false}
              style={{flex: 0.2}}>
              {data[14]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'2️⃣⚈⚉'}
            </Div>
            <Button
              onClick={() => showExample(2)}
              active={false}
              style={{flex: 0.49}}>
              {data[2]}
            </Button>
            <Button
              onClick={() => showExample(3)}
              active={false}
              style={{flex: 0.49}}>
              {data[3]}
            </Button>
            <Button
              onClick={() => showExample(15)}
              active={false}
              style={{flex: 0.2}}>
              {data[15]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'3️⃣⚈'}
            </Div>
            <Button
              onClick={() => showExample(4)}
              active={false}
              style={{flex: 0.49}}>
              {data[4]}
            </Button>

            <Button
              onClick={() => showExample(5)}
              active={false}
              style={{flex: 0.49}}>
              {data[5]}
            </Button>
            <Button
              onClick={() => showExample(16)}
              active={false}
              style={{flex: 0.2}}>
              {data[16]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'3️⃣⚈'}
            </Div>
            <Button
              onClick={() => showExample(6)}
              active={false}
              style={{flex: 0.49}}>
              {data[6]}
            </Button>

            <Button
              onClick={() => showExample(7)}
              active={false}
              style={{flex: 0.49}}>
              {data[7]}
            </Button>
            <Button
              onClick={() => showExample(17)}
              active={false}
              style={{flex: 0.2}}>
              {data[17]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'3️⃣⚈'}
            </Div>
            <Button
              onClick={() => showExample(8)}
              active={false}
              style={{flex: 0.49}}>
              {data[8]}
            </Button>

            <Button
              onClick={() => showExample(9)}
              active={false}
              style={{flex: 0.49}}>
              {data[9]}
            </Button>
            <Button
              onClick={() => showExample(18)}
              active={false}
              style={{flex: 0.2}}>
              {data[18]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'1️⃣⚉'}
            </Div>
            <Button
              onClick={() => showExample(10)}
              active={false}
              style={{flex: 0.49}}>
              {data[10]}
            </Button>
            <Button
              onClick={() => showExample(11)}
              active={false}
              style={{flex: 0.49}}>
              {data[11]}
            </Button>
            <Button
              onClick={() => showExample(19)}
              active={false}
              style={{flex: 0.2}}>
              {data[19]}
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
            <Div active={false} style={{flex: 0.049}}>
              {'3️⃣⚉'}
            </Div>
            <Button
              onClick={() => showExample(12)}
              active={false}
              style={{flex: 0.49}}>
              {data[12]}
            </Button>
            <Button
              onClick={() => showExample(13)}
              active={false}
              style={{flex: 0.49}}>
              {data[13]}
            </Button>
            <Button
              onClick={() => showExample(20)}
              active={false}
              style={{flex: 0.2}}>
              {data[20]}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

function TextImage({
  name,
  text = true,
  img = true,
}: {
  name: string;
  text?: boolean;
  img?: boolean;
}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {text && (
        <View
          style={{
            flex: 1,
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
      )}
      {img && (
        <View
          style={{
            flex: 1,
            width: 30,
            height: 30,
          }}>
          <Image src={name} resizeMode="center" />
        </View>
      )}
    </View>
  );
}
