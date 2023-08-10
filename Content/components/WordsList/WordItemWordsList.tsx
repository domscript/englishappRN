import {View, Pressable, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

import Colors from '../../constants/Colors';

import Progress2 from '../MyIcons/Progress2';

import {Verb} from '../MyIcons/Verbs/index';
import {
  verbsList,
  Nouns,
  Professions,
  Food,
  Family,
  subjectPronounsIcons,
  objectPronounsIcons,
  possessiveAdjectivesIcons,
} from '../../data/words';
import {RootState} from '../../redux-store/store';
import Tts from 'react-native-tts';

import Image from '../../assets/Image';

interface WordItemProps {
  title: string;
  score: 1 | 2 | 3 | 4;
  text: string;
  id: string;
}

type Stages = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

function WordItem({title, score, text, id}: WordItemProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const [isPressed, setIsPressed] = useState(false);
  const [stage, setStage] = useState<Stages>(1);

  function pressHandler() {
    if (isPressed) return;
    Tts.stop();
    Tts.speak(title);
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStage(prevStage => {
        if (stage < 8) return (prevStage + 1) as Stages;
        return 1 as Stages;
      });
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [stage]);

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
                <Verb positive={1} stage={stage} verb={text} />
              </View>
            </>
          ) : Object.keys(
              subjectPronounsIcons[id as keyof typeof subjectPronounsIcons] ||
                {},
            )?.includes(text) ||
            Object.keys(
              objectPronounsIcons[id as keyof typeof objectPronounsIcons] || {},
            )?.includes(text) ||
            Object.keys(
              possessiveAdjectivesIcons[
                id as keyof typeof possessiveAdjectivesIcons
              ] || {},
            )?.includes(text) ||
            Object.keys(
              Professions[id as keyof typeof Professions] || {},
            )?.includes(text) ||
            Object.keys(Food[id as keyof typeof Food] || {})?.includes(text) ||
            Object.keys(Nouns[id as keyof typeof Nouns])?.includes(text) ||
            Object.keys(Family[id as keyof typeof Family] || {})?.includes(
              text,
            ) ? (
            <>
              <View style={styles.empty}></View>
              <View style={[styles.lessonTitleI]}>
                <Image src={text} resizeMode="center" />
              </View>
            </>
          ) : (
            <View style={styles.lessonTitleR}>
              <Text
                style={[
                  styles.text,
                  isDarkTheme ? styles.darkTheme : styles.lightTheme,
                ]}>
                {text}
              </Text>
            </View>
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
