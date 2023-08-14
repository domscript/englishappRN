import {View, Text, StyleSheet, Pressable} from 'react-native';
import Image from '../assets/Image';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import Tts from 'react-native-tts';
import {useEffect, useState} from 'react';

export function Intro() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const [isClicked, setIsClicked] = useState(false);

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
    <View style={styles.container}>
      <View style={styles.img}>
        <Image src="i" resizeMode="contain" />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
          ]}>
          Hello, 👋
        </Text>
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
          <Image src="my" resizeMode="contain" />
        </View>
      </Pressable>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.colorDarkTheme : styles.colorLightTheme,
            {
              marginBottom: 10,
            },
          ]}>
          Play here for me!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    height: 500,
    // alignContent: 'center',
  },
  img: {
    flex: 1,
    // backgroundColor: 'gray',
    height: 100,
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
});
