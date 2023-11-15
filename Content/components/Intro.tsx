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

export function Intro({onPress}: IntroProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const [isClicked, setIsClicked] = useState(false);
  const {height, width} = useWindowDimensions();

  // TODO . need to check
  // Initialize TTS and speak 'hello' on component mount
  useEffect(() => {
    Tts.getInitStatus().then(
      () => {
        Tts.speak('hello');
      },
      err => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      },
    );
  }, []);

  function tellI() {
    if (isClicked) return;
    setIsClicked(true);
    Tts.stop();
    Tts.speak('I, me, my');
  }
  useEffect(() => {
    const tell = setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    return () => clearTimeout(tell);
  }, [isClicked]);

  return (
    <View
      style={[
        styles.container,
        {height: height, width: width < height * 0.6 ? width : height * 0.6},
      ]}>
      <View style={styles.img}>
        <Image src="slightly_smiling-face" resizeMode="contain" />
      </View>
      <View
        style={{
          flex: 0.25,
          height: 60,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 70,
          }}>
          <View style={styles.img}>
            <Text
              style={[
                styles.title,
                {textAlign: 'right'},
                isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
              ]}>
              Hello,{' '}
            </Text>
          </View>
          <View style={{flex: 0.25}}>
            <Image src="waving-hand" resizeMode="center" />
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
      </View>

      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}>
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
            ]}>
            My name is{' '}
          </Text>
          <Text style={styles.i}>I</Text>
        </View>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
          ]}>
          Don't you believe me?
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
          ]}>
          Check my id:
        </Text>
      </View>
      <Pressable style={styles.img} onPress={tellI}>
        <View style={styles.img}>
          <Image src="myid" resizeMode="contain" />
        </View>
      </Pressable>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
          ]}>
          I have a dog: Max,{'\n'}
          He has an ID too:
        </Text>
      </View>
      <View style={[styles.img]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={styles.img0}>
            <Image src="dog_face_active" resizeMode="contain" />
          </View>
          <View style={styles.img0}>
            <Image src="max_id" resizeMode="contain" />
          </View>
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
          Start
        </Text>
        <MyIcon
          name="rocket-launch"
          size={40}
          color={isDarkTheme ? Colors.green60 : Colors.green5}
        />
      </Pressable>
      <View style={{flex: 0.5}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    maxHeight: 800,
  },
  img: {
    flex: 1,
    height: 120,
  },
  img0: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
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
    marginHorizontal: '20%',
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    paddingHorizontal: 10,
  },
});
