import {View, Pressable, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useState} from 'react';

import Colors from '../../constants/Colors';

import Progress2 from '../MyIcons/Progress2';

import {Verb} from '../MyIcons/Verbs/index';
import {verbsList} from '../../data/words';
import {RootState} from '../../redux-store/store';
import Tts from 'react-native-tts';

import Image from '../../assets/Image';

interface WordItemProps {
  title: string;
  score: 1 | 2 | 3 | 4;
  text: string;
  id: string;
}

function WordItem({title, score, text, id}: WordItemProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const [isPressed, setIsPressed] = useState(false);

  function pressHandler() {
    if (isPressed) return;
    Tts.stop();
    Tts.speak(title === 'read ' ? 'red' : title === 'id' ? 'I D' : title);
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: isDarkTheme ? Colors.gray85 : Colors.gray10}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
        disabled={isPressed}>
        <View style={styles.innerContainer}>
          <View style={styles.icon}>
            <Progress2 stage={score} />
          </View>
          <View style={styles.lessonTitleL}>
            <Text
              style={[
                styles.title,
                isDarkTheme ? styles.darkTheme : styles.lightTheme,
              ]}>
              {title}
            </Text>
          </View>
          {verbsList?.includes(text) ? (
            <>
              <View style={styles.empty}></View>
              <View style={[styles.lessonTitleV]}>
                <Verb positive={1} verb={text} />
              </View>
            </>
          ) : (
            <>
              <View style={styles.empty}></View>
              <View style={[styles.lessonTitleI]}>
                <Image src={text} resizeMode="center" />
              </View>
            </>
          )}
        </View>
      </Pressable>
    </View>
  );
}

export default WordItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  darkTheme: {
    color: Colors.gray30,
  },
  lightTheme: {
    color: Colors.gray95,
  },
  lessonTitleL: {
    flex: 4.5,
    alignItems: 'flex-start',
    // backgroundColor: "blue",
  },
  image: {width: '100%'},
  lessonTitleV: {
    flex: 1,
    alignItems: 'flex-start',
  },
  lessonTitleI: {
    flex: 1.5,
    height: 45,
  },
  buttonPressed: {opacity: 0.8},
  empty: {
    flex: 2.5,
  },
  lessonTitleR: {
    flex: 4.5,
    alignItems: 'flex-end',
    // backgroundColor: "red",
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    // backgroundColor: "green",
  },
  icon: {
    flex: 1,
    // height: "150%",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 7,
    // textAlign: "center",
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 30,
  },
});
