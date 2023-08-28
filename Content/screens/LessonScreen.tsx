import {useMemo, useState} from 'react';
import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Colors from '../constants/Colors';

import {countProgress, roundScore} from '../utils/smallFunctions';
import Tts from 'react-native-tts';

import {lessons, test} from '../data/words';
import {
  SimpleTenseScheme,
  SecondLesson,
  ThirdLesson,
  FourthLesson,
} from '../utils/calc';
import {RootState} from '../redux-store/store';

import {Screens} from '../../Navigation';

interface LessonButtonProps {
  title: string;
  progress: string | number;
  onPress: () => void;
  text: string;
  done?: boolean;
  study: boolean;
}

function LessonItem({id, title}) {
  const {isDarkTheme, isSound} = useSelector((state: RootState) => ({
    isDarkTheme: state.theme.isDarkTheme,
    isSound: state.sounds.isSound,
  }));
  const navigation = useNavigation();

  const datass = useMemo(() => {
    const qData = [];
    for (let i = 0; i < 100; ++i) {
      if (id === 'A') qData.push(SimpleTenseScheme(lessons['A']));
      else if (id === 'B') qData.push(SecondLesson(lessons['B']));
      else if (id === 'C') qData.push(ThirdLesson(lessons['C']));
      else if (id === 'D') qData.push(FourthLesson(lessons['D']));
      else qData.push(SimpleTenseScheme(lessons[id as keyof typeof lessons]));
    }
    return qData;
  }, [id]);
  let {user1} = useSelector((state: RootState) => state.lessons);

  const newData = user1.toUpperCase().split(id)[1].slice(0, 100);

  const [numberOfOnes] = countProgress(newData);

  const progressStudy = Math.floor(numberOfOnes / 2) / 10;
  const {progress} = useSelector((state: RootState) => state.words[id]);

  let progress0 = 0;

  if (['A', 'N', 'P'].includes(id)) {
    ({progress: progress0} = useSelector(
      (state: RootState) => state.words[id + 'X'],
    ));
  }

  function studyHandler() {
    if (isSound) {
      Tts.stop();
      Tts.speak('study');
    }
    navigation.navigate(Screens.NavigatorScreens.Study.name, {
      lessonId: id,
      randomData: datass,
    });
  }
  function wordsHandler() {
    if (isSound) {
      Tts.stop();
      Tts.speak('words');
    }
    navigation.navigate(Screens.NavigatorScreens.NewWords.name, {
      lessonId: id,
    });
  }
  function wordsHandler2() {
    if (isSound) {
      Tts.stop();
      Tts.speak('verbs');
    }
    navigation.navigate(Screens.NavigatorScreens.NewWords.name, {
      lessonId: id + 'X',
    });
  }
  function helpHandler() {
    if (isSound) {
      Tts.stop();
      Tts.speak('help');
    }
    navigation.navigate(Screens.NavigatorScreens.Help.name, {
      lessonId: id,
    });
  }

  return (
    <View
      style={[
        styles.lessonItem,
        isDarkTheme ? styles.darkTheme : styles.lightTheme,
      ]}>
      <LessonButton
        title={title}
        progress={roundScore(progressStudy)}
        done={progressStudy >= 4.5}
        study={true}
        onPress={studyHandler}
        text={
          newData.includes('0') ||
          newData.includes('1') ||
          newData.includes('3')
            ? 'Continue ⏩️'
            : 'Start 🏁'
        }
      />
      <LessonButton
        title={title}
        progress={Math.round(progress) + '%'}
        done={progress === 100}
        study={true}
        onPress={wordsHandler}
        text={'Words 📚'}
      />
      {['A', 'N', 'P'].includes(id) && (
        <LessonButton
          title={title}
          progress={Math.round(progress0) + '%'}
          done={progress0 === 100}
          study={true}
          onPress={wordsHandler2}
          text={'Verbs (v2) 📚'}
        />
      )}
      <LessonButton
        title={title}
        progress="📖"
        study={false}
        onPress={helpHandler}
        text={'Help 🆘'}
      />
    </View>
  );
}

export default LessonItem;

function LessonButton({
  title,
  progress,
  onPress,
  text,
  done,
  study,
}: LessonButtonProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <Pressable
      android_ripple={{color: '#ccc'}}
      style={({pressed}) => (pressed ? styles.buttonPressed : null)}
      onPress={onPress}>
      <View key={title} style={styles.lesson}>
        <View
          style={[
            styles.score,
            study && {
              backgroundColor: done ? Colors.green70 : Colors.amber60,
            },
          ]}>
          <Text
            style={[
              study ? styles.text : styles.titleHelp,
              isDarkTheme ? styles.darkTitle : styles.lightTitle,
            ]}>
            {progress}
          </Text>
        </View>
        <View style={styles.lessonTitle}>
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.textDarkTheme : styles.textLightTheme,
            ]}>
            {text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  lessonItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  darkTitle: {color: Colors.gray5},
  lightTitle: {color: Colors.gray95},
  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  lightTheme: {backgroundColor: Colors.green10},
  textDarkTheme: {
    color: 'white',
  },
  textLightTheme: {color: 'black'},
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  gridItem: {
    flex: 1,
    margin: 1,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  titleHelp: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  lesson: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderBottomWidth: 1,
    // borderColor: Colors.green20,
  },
  selectedLesson: {
    backgroundColor: Colors.green10,
  },
  score: {
    borderRadius: 30,
    marginHorizontal: 20,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  help: {
    borderRadius: 30,
    // backgroundColor: "orange",
    marginHorizontal: 20,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
