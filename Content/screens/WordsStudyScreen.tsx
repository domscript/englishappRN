import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Progress from '../components/MyIcons/Progress';
import {
  setWordsLesson,
  clearWordsProgress,
  ACTIONS,
} from '../redux-store/words';
import {WordButton} from '../components/WordsList/WordButton';
import {MyIcon} from '../components/MyIcons/app';

import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';

import {
  verbsList,
  Nouns,
  Professions,
  Food,
  Family,
  Interrogatives,
  subjectPronounsIcons,
  objectPronounsIcons,
  possessiveAdjectivesIcons,
} from '../data/words';

import {Verb, Stages} from '../components/MyIcons/Verbs/index';
import Image from '../assets/Image';

import Tts from 'react-native-tts';

function WordsStudy({route}) {
  const {id} = route.params;

  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const [stage0, setStage] = useState<Stages>(1);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [pressedButtonIndex, setPressedButtonIndex] = useState<number | null>(
    null,
  );
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);

  let {progress, nextStudyWord} = useSelector(
    (state: RootState) => state.words[id],
  );

  const handlePressDelete = () => {
    dispatch(
      clearWordsProgress({
        lessonId: id,
      }),
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStage(prevStage => {
        if (stage0 < 8) return (prevStage + 1) as Stages;
        return 1 as Stages;
      });
    }, 150);
    return () => clearTimeout(timeoutId);
  }, [stage0]);

  if (progress === 100) {
    return (
      <View
        style={[
          styles.listOuterContainer,
          styles.centerContainer,
          isDarkTheme
            ? styles.darkBackgroundColor
            : styles.lightBackgroundColor,
        ]}>
        <Text
          style={[
            styles.title,
            styles.centerText,
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          Good Job
        </Text>
        <Pressable
          style={[
            styles.refreshButton,
            isDarkTheme
              ? styles.darkBackgroundColor
              : styles.lightBackgroundColor,
          ]}
          onPress={handlePressDelete}>
          <MyIcon
            name="refresh"
            size={30}
            color={
              isDarkTheme
                ? styles.darkThemeColor.color
                : styles.lightThemeColor.color
            }
          />
        </Pressable>
      </View>
    );
  }

  let word = nextStudyWord[0][0];
  let stage = nextStudyWord[0][1];
  let newWord = nextStudyWord[0][2];
  const dataNew = nextStudyWord[1];
  const listName = nextStudyWord[2];

  const handlePress = (wordId: number) => {
    if (!isAnswerCorrect && !areButtonsDisabled) {
      Tts.stop();
      Tts.speak(dataNew[wordId]);
      if (word === dataNew[wordId]) {
        setIsAnswerCorrect(true);
        setPressedButtonIndex(wordId);
      } else {
        setIsAnswerCorrect(false);
        setPressedButtonIndex(wordId);
      }
      setAreButtonsDisabled(true);
      setTimeout(() => {
        if (word === dataNew[wordId]) {
          dispatch(
            setWordsLesson({
              word: word,
              listName: listName,
              action: ACTIONS.SET,
              lessonId: id,
            }),
          );
        } else {
          dispatch(
            setWordsLesson({
              word: word,
              listName: listName,
              action: ACTIONS.RESET,
              lessonId: id,
            }),
          );
        }
        setIsAnswerCorrect(null);
        setAreButtonsDisabled(false);
      }, 500);
    }
  };

  const Buttons = (
    <View style={styles.flexRow}>
      <View style={styles.flexCol}>
        {[0, 2, 4].map(index => (
          <WordButton
            key={index}
            correct={isAnswerCorrect && areButtonsDisabled}
            index={index === pressedButtonIndex}
            incorrect={!isAnswerCorrect && areButtonsDisabled}
            buttonText={dataNew[index]}
            handlePress={() => handlePress(index)}
          />
        ))}
      </View>
      <View style={styles.flexCol}>
        {[1, 3, 5].map(index => (
          <WordButton
            key={index}
            correct={isAnswerCorrect && areButtonsDisabled}
            index={index === pressedButtonIndex}
            incorrect={!isAnswerCorrect && areButtonsDisabled}
            buttonText={dataNew[index]}
            handlePress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.listOuterContainer,
        isDarkTheme ? styles.darkBackgroundColor : styles.lightBackgroundColor,
      ]}>
      <View style={styles.icon}>
        <Progress
          stage={
            isAnswerCorrect && areButtonsDisabled
              ? (stage += 1)
              : !isAnswerCorrect && areButtonsDisabled
              ? 0
              : stage
          }
        />
      </View>

      <Pressable
        style={styles.listContainer}
        onPress={() => {
          Tts.stop();
          Tts.speak(word);
        }}>
        {verbsList.includes(newWord) ? (
          <Verb positive={1} stage={stage0} verb={newWord} />
        ) : Object.keys(Nouns[id as keyof typeof Nouns] || {}).includes(
            newWord,
          ) ||
          Object.keys(
            Professions[id as keyof typeof Professions] || {},
          )?.includes(newWord) ||
          Object.keys(Interrogatives)?.includes(newWord) ||
          Object.keys(
            subjectPronounsIcons[id as keyof typeof subjectPronounsIcons] || {},
          )?.includes(newWord) ||
          Object.keys(
            objectPronounsIcons[id as keyof typeof objectPronounsIcons] || {},
          )?.includes(newWord) ||
          Object.keys(
            possessiveAdjectivesIcons[
              id as keyof typeof possessiveAdjectivesIcons
            ] || {},
          )?.includes(newWord) ||
          Object.keys(Food[id as keyof typeof Food] || {})?.includes(newWord) ||
          Object.keys(Family[id as keyof typeof Family] || {})?.includes(
            newWord,
          ) ? (
          <Image src={newWord} resizeMode="contain" />
        ) : (
          <Text style={styles.title}>{newWord}</Text>
        )}
      </Pressable>
      {Buttons}
      <View style={styles.iconBottom}>
        <Text
          style={[
            styles.progressText,
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          {Math.round(progress * 10) / 10} %
        </Text>
        <View style={styles.line}>
          <View
            style={[
              styles.lineFill,
              {flex: Math.round(progress) / 100},
            ]}></View>
        </View>
      </View>
    </View>
  );
}

export default WordsStudy;

const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: 'center',
    flex: 1,
  },
  darkBackgroundColor: {backgroundColor: Colors.gray80},
  darkBackgroundColorPressed: {backgroundColor: Colors.gray90},
  lightBackgroundColor: {backgroundColor: Colors.gray5},
  lightBackgroundColorPressed: {backgroundColor: Colors.gray10},
  listContainer: {
    flex: 0.2,
    justifyContent: 'center',
    width: '100%',
  },

  centerText: {
    fontSize: 50,
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  refreshButton: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },

  centerContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  button: {
    flex: 1,
    // elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCol: {
    flex: 1,
    flexDirection: 'column',
    // gap: 1,
  },
  flexRow: {
    flex: 0.8,
    flexDirection: 'row',
    // gap: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  darkThemeColor: {
    color: Colors.gray40,
  },
  lightThemeColor: {
    color: Colors.gray95,
  },
  icon: {flex: 0.08, width: '100%', marginVertical: '1%'},
  iconBottom: {
    flex: 0.08,
    textAlign: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    // marginTop: "1%",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 70,
    textAlign: 'center',
    color: '#888',
  },
  progressText: {
    flex: 0.89,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '100',
  },
  line: {
    flex: 0.1,
    backgroundColor: Colors.gray40,
    flexDirection: 'row',
  },
  lineFill: {backgroundColor: Colors.amber50},
});
