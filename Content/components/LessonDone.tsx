import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Image from '../assets/Image';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import Tts from 'react-native-tts';
import {useEffect, useState} from 'react';
import {RootState} from '../redux-store/store';
import {MyIcon} from '../components/MyIcons/app';

interface IntroProps {
  onPress: () => void;
}

export function LessonDone({onPress}: IntroProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const [isClicked, setIsClicked] = useState(false);
  const {height, width} = useWindowDimensions();

  // TODO . need to check
  // Initialize TTS and speak 'hello' on component mount
  useEffect(() => {
    Tts.getInitStatus().then(
      () => {
        Tts.speak('The Lesson is done!');
      },
      err => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      },
    );
  }, []);

  function tellStar() {
    if (isClicked) return;
    setIsClicked(true);
    Tts.stop();
    Tts.speak('You are a Star');
  }

  useEffect(() => {
    const tell = setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    return () => clearTimeout(tell);
  }, [isClicked]);

  return (
    <View style={[styles.container, {height: height}]}>
      <Pressable style={styles.img} onPress={tellStar}>
        <View style={styles.img}>
          <Image src="glowing-star" resizeMode="contain" />
        </View>
      </Pressable>
      <View
        style={{
          height: 60,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={styles.text}>
            <Text
              style={[
                styles.title,
                {textAlign: 'right'},
                isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
              ]}>
              The Lesson is done!
            </Text>
          </View>
          {/* <View style={{flex: 0.25}}>
            <Image src="waving-hand" resizeMode="center" />
          </View> */}
          {/* <View style={{flex: 0.5}}></View> */}
        </View>
      </View>

      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          {backgroundColor: isDarkTheme ? Colors.gray70 : Colors.gray30},
        ]}>
        <Text
          style={[
            {color: isDarkTheme ? Colors.gray5 : Colors.gray95},
            styles.buttonText,
          ]}>
          Ok
        </Text>
        <MyIcon
          name="rocket-launch"
          size={40}
          color={isDarkTheme ? Colors.green60 : Colors.green5}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    maxHeight: 200,
  },
  img: {
    flex: 1,
    height: 100,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
  i: {
    fontSize: 50,
    fontWeight: '900',
    color: Colors.red80,
  },
  colorDarkTheme: {color: Colors.gray5},
  colorLightTheme: {color: Colors.gray95},
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '13%',
    marginVertical: 5,
    paddingHorizontal: '7%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    paddingHorizontal: 15,
  },
});
