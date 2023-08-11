import {useLayoutEffect, useState, useMemo, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {MyIcon} from '../components/MyIcons/app';
import {useDispatch, useSelector} from 'react-redux';
import Tts from 'react-native-tts';

import {WordButton, WordFlex} from '../components/WordsList/WordButton';
import {ThreeEmojiText} from '../components/UI/ThreeEmojiText';
import {ProgressLine} from '../components/UI/ProgressLine';
import {LessonButton} from '../components/UI/LessonBottomButton';
import {EmojiCircle} from '../components/UI/EmojiCircle';
import {Verb} from '../components/MyIcons/Verbs/index';
import Image from '../assets/Image';

import {spWord} from '../data/words';

import {getRandomInt, countProgress} from '../utils/smallFunctions';
import {setLessonData, ACTIONS} from '../redux-store/lessons';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';

const tenseNoteIcons = [
  '🦖✅',
  '🙋✅',
  '🤖✅',
  '🦖❌',
  '🙋❌',
  '🤖❌',
  '🦖❓',
  '🙋❓',
  '🤖❓',
];

const ComponentStates = {
  IDLE: 'idle',
  PRESSED: 'pressed',

  SHOW_RESULT_GOOD: 'showResultGood',
  SHOW_RESULT_BAD: 'showResultBad',

  UPDATEDATA: 'updateData',
};

type Stages = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

function LessonStudyScreen({route, navigation}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const id = route.params.lessonId;
  const lessonData = route.params.randomData;
  const dispatch = useDispatch();
  let {user1} = useSelector((state: RootState) => state.lessons);

  const [progress, newData] = useMemo(() => {
    return countProgress(user1.split(id)[1].slice(0, 100));
  }, [user1, id]);
  const [stage, setStage] = useState<Stages>(1);

  const test =
    lessonData[
      newData.indexOf('4') < 0 ? newData.indexOf('3') : newData.indexOf('4')
    ];

  const {qWord, question, tenseNoteIndex} = test;

  const [componentState, setComponentState] = useState(ComponentStates.IDLE);

  const [greeting, setData] = useState(getRandomInt(0, 19));

  const [[testData0, userAnswer, restoreData], setTestData0] = useState<
    [any, string[], string[][]]
  >([test.testData, [], []]);

  const [timeQ, noteQ] = tenseNoteIcons[tenseNoteIndex];

  if (componentState === ComponentStates.UPDATEDATA) {
    setData(getRandomInt(0, 19));

    setTestData0([test.testData, [], []]);

    setComponentState(ComponentStates.IDLE);
  }

  function handlePress(index: number) {
    if (componentState === ComponentStates.PRESSED) return;
    setComponentState(ComponentStates.PRESSED);
    const timer = setTimeout(() => {
      if (
        componentState === ComponentStates.SHOW_RESULT_GOOD ||
        componentState === ComponentStates.SHOW_RESULT_BAD ||
        componentState === ComponentStates.UPDATEDATA
      ) {
        clearTimeout(timer);
      } else {
        setComponentState(ComponentStates.IDLE);
      }
    }, 500);
    Tts.stop();
    Tts.speak(testData0[index]);

    if (index >= 0 && index < 4) {
      setTestData0(prevtestData0 => {
        const word = prevtestData0[0][index];
        const restored = [...prevtestData0[0]];
        const restored0 = [...prevtestData0[0]];

        const start = restored0.splice(8, 4);
        restored0.splice(0, 4);
        return [
          [...start, ...restored0],
          [...prevtestData0[1], word],
          [...prevtestData0[2], restored],
        ];
      });
    } else if (index > 3 && index < 8) {
      setTestData0(prevtestData0 => {
        const word = prevtestData0[0][index];
        const restored = [...prevtestData0[0]];
        const restored0 = [...prevtestData0[0]];
        restored0.splice(4, 4);

        return [
          [...restored0],
          [...prevtestData0[1], word],
          [...prevtestData0[2], restored],
        ];
      });
    }
  }
  // console.log(124, question, userAnswer);
  if (
    question.filter((i: string) => i).length === userAnswer.length &&
    componentState === ComponentStates.IDLE
  ) {
    if (
      question.join(' ').trim() === userAnswer.join(' ').trim() &&
      componentState !== ComponentStates.PRESSED
    ) {
      setComponentState(ComponentStates.SHOW_RESULT_GOOD);
      setTimeout(() => {
        dispatch(
          setLessonData({
            action: ACTIONS.SETDATA1,
            lessonId: id,
          }),
        );
      }, 500);
      setTimeout(() => {
        setComponentState(ComponentStates.UPDATEDATA);
      }, 900);
    } else {
      setComponentState(ComponentStates.SHOW_RESULT_BAD);
      setTimeout(() => {
        dispatch(
          setLessonData({
            action: ACTIONS.SETDATA0,
            lessonId: id,
          }),
        );
      }, 500);
      setTimeout(() => {
        setComponentState(ComponentStates.UPDATEDATA);
      }, 900);
    }
  }

  function deleteHandler() {
    if (!restoreData.length) return;
    Tts.stop();
    Tts.speak('delete');

    setTestData0(prevtestData0 => {
      const [_, userAnswer, restoreData] = prevtestData0;
      userAnswer.pop();
      const data = restoreData.pop() || [];
      return [[...data], [...userAnswer], restoreData];
    });
  }

  function noteHandler() {
    Tts.stop();
    Tts.speak('note');
    navigation.navigate('Note', {
      lessonId: id,
      note: [test.note, test.tenseNoteIndex, test.verb],
    });
  }
  function helpHandler() {
    Tts.stop();
    Tts.speak('help');
    navigation.navigate('Help', {
      lessonId: id,
    });
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStage(prevStage => {
        if (stage < 8) return (prevStage + 1) as Stages;
        return 1 as Stages;
      });
    }, 125);
    return () => clearTimeout(timeoutId);
  }, [stage]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <MyIcon
                name={progress === 100 ? 'star' : 'star-o'}
                color={
                  isDarkTheme
                    ? styles.darkThemeColor.color
                    : styles.lightThemeColor.color
                }
                size={25}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={[
                  {
                    fontSize: 18,
                    fontWeight: '100',
                  },
                  isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
                ]}>
                {Math.floor(progress / 2) / 10}
              </Text>
            </View>
          </View>
        );
      },
    });
  }, [navigation, progress]);

  return (
    <View
      style={[
        styles.listOuterContainer,
        isDarkTheme ? styles.darkBackgroundColor : styles.lightBackgroundColor,
      ]}>
      <Pressable
        style={styles.listContainer}
        onPress={() => {
          Tts.stop();
          Tts.speak(question.join(' '));
        }}>
        <View style={styles.question}>
          <ThreeEmojiText timeQ={timeQ} noteQ={noteQ} />
        </View>
        <View style={styles.time}>
          <EmojiCircle active={timeQ === '🦖'}>🦖</EmojiCircle>
          <EmojiCircle active={timeQ === '🙋'}>🙋</EmojiCircle>
          <EmojiCircle active={timeQ === '🤖'}>🤖</EmojiCircle>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 0.8,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              borderRadius: 50,
              // backgroundColor: Colors.greenop,
              // padding: 4,

              width: '16%',
            }}>
            <Image src={qWord[0]} resizeMode="contain" />
            {/* <Text style={styles.title}>{qWord[0]}</Text> */}
          </View>
          <View style={styles.verbIcon}>
            <Verb positive={tenseNoteIndex} stage={stage} verb={qWord[1]} />
          </View>
          <View style={{justifyContent: 'center', width: '16%'}}>
            {spWord.includes(qWord[2]) ? (
              <>
                <Image
                  style={{position: 'relative', bottom: '-44%', right: '-30%'}}
                  src={qWord[2]}
                  resizeMode="contain"
                />
                <Image
                  style={{position: 'relative', bottom: '44%'}}
                  src={qWord[2]}
                  resizeMode="contain"
                />
              </>
            ) : (
              <Image src={qWord[2]} resizeMode="contain" />
            )}
            {/* <Text style={styles.title2}>{qWord[2]}</Text> */}
          </View>
        </View>
      </Pressable>
      <View style={styles.output}>
        <Text
          style={[
            styles.outputText,
            {color: isDarkTheme ? Colors.gray40 : Colors.gray95},
          ]}>
          {userAnswer.join(' ')}
        </Text>
      </View>
      {componentState === ComponentStates.SHOW_RESULT_GOOD ||
      componentState === ComponentStates.SHOW_RESULT_BAD ? (
        <View style={styles.messageContainer}>
          <View
            style={[
              {
                opacity: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <MyIcon
              name={
                componentState === ComponentStates.SHOW_RESULT_GOOD
                  ? [
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      'star-o',
                      // 'trophy-outline',
                      // 'bulb-outline',
                      // 'hammer-outline',
                      // 'hammer-outline',
                      // 'color-wand-outline',
                      // 'bonfire-outline',
                      // 'thumbs-up-outline',
                      // 'trending-up-outline',
                      // 'rocket-outline',
                      // 'checkbox-outline',
                      // 'arrow-up-circle-outline',
                      // 'car-sport-outline',
                      // 'hammer-outline',
                      // 'create-outline',
                      // 'game-controller-outline',
                      // 'code-slash-outline',
                      // 'star-outline',
                      // 'star-outline',
                      // 'star-outline',
                      // 'star-outline',
                    ][greeting]
                  : [
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',
                      'rocket',

                      // 'bulb-outline',
                      // 'walk-outline',
                      // 'car-sport-outline',
                      // 'fitness-outline',
                      // 'rocket-outline',
                      // 'trending-up-outline',
                      // 'arrow-forward-circle-outline',
                      // 'battery-charging-outline',
                      // 'game-controller-outline',
                      // 'trending-up-outline',
                      // 'walk-outline',
                      // 'compass-outline',
                      // 'code-slash-outline',
                      // 'arrow-forward-circle-outline',
                      // 'fitness-outline',
                      // 'walk-outline',
                      // 'color-wand-outline',
                      // 'rocket-outline',
                      // 'star-outline',
                      // 'star-outline',
                    ][greeting]
              }
              size={150}
              color={
                componentState === ComponentStates.SHOW_RESULT_GOOD
                  ? isDarkTheme
                    ? Colors.green90
                    : Colors.green30
                  : isDarkTheme
                  ? Colors.red80
                  : Colors.red20
              }
            />
          </View>
          <Text
            style={[
              styles.message,

              isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
            ]}>
            {componentState === ComponentStates.SHOW_RESULT_GOOD
              ? [
                  "You're a champion!",
                  "You're a genius!",
                  'Awesome job!',
                  'Impressive work!',
                  'Fantastic work!',
                  "You're on fire!",
                  'Bravo!',
                  'Outstanding!',
                  "You're outstanding!",
                  'Well done!',
                  'Keep it up!',
                  'Way to go!',
                  "You're crushing it!",
                  "You're amazing!",
                  "You're a real pro!",
                  "You're a legend!",
                  'Keep shining bright!',
                  "You're a star!",
                  "You're a superstar!",
                  'Great job, rockstar!',
                ][greeting]
              : [
                  "You're an inspiration!",
                  'One step at a time!',
                  "Keep pushing, you'll succeed!",
                  'Stay strong, keep going!',
                  "You're unstoppable!",
                  "You're making progress!",
                  'Keep pushing forward!',
                  "You're getting better every day!",
                  'Believe in yourself!',
                  "You're getting better!",
                  'Every effort counts!',
                  "Don't give up, you're close!",
                  "You're capable of anything!",
                  'Stay strong and keep moving forward!',
                  "You're strong, keep rising higher!",
                  'One step closer, keep going!',
                  'Every effort is worthwhile!',
                  "You're doing great things!",
                  "You're capable of greatness!",
                  "You're destined for greatness!",
                ][greeting]}
          </Text>
        </View>
      ) : (
        <View style={styles.mainBottoms}>
          <View style={styles.flexRow}>
            {[0, 1].map(index =>
              testData0[index] ? (
                <WordButton
                  key={index}
                  buttonText={testData0[index]}
                  handlePress={() => handlePress(index)}
                />
              ) : (
                <WordFlex key={index} />
              ),
            )}
          </View>
          <View style={styles.flexRow}>
            {[2, 3].map(index =>
              testData0[index] ? (
                <WordButton
                  key={index}
                  buttonText={testData0[index]}
                  handlePress={() => handlePress(index)}
                />
              ) : (
                <WordFlex key={index} />
              ),
            )}
          </View>
          <View style={styles.flexRow}>
            {[4, 5].map(index =>
              testData0[index] ? (
                <WordButton
                  key={index}
                  buttonText={testData0[index]}
                  handlePress={() => handlePress(index)}
                />
              ) : (
                <WordFlex key={index} />
              ),
            )}
          </View>
          <View style={styles.flexRow}>
            {[6, 7].map(index =>
              testData0[index] ? (
                <WordButton
                  key={index}
                  buttonText={testData0[index]}
                  handlePress={() => handlePress(index)}
                />
              ) : (
                <WordFlex key={index} />
              ),
            )}
          </View>
        </View>
      )}
      <View style={styles.iconBottom}>
        <ProgressLine data={newData.slice(0, newData.length / 4)} />
        <ProgressLine
          data={newData.slice(newData.length / 4, newData.length / 2)}
        />
        <ProgressLine
          data={newData.slice(newData.length / 2, (newData.length / 4) * 3)}
        />
        <ProgressLine
          data={newData.slice((newData.length / 4) * 3, newData.length)}
        />
      </View>
      <View
        style={[
          styles.buttomsBottom,
          isDarkTheme
            ? styles.darkThemeColorButton
            : styles.lightThemeColorButton,
        ]}>
        <View style={styles.buttonBottom}>
          <LessonButton
            title={'DELETE'}
            onPress={deleteHandler}
            iconName="delete"
          />
        </View>
        <View style={styles.buttonBottom}>
          <LessonButton
            title={'NOTE'}
            onPress={noteHandler}
            iconName="lightbulb-on"
          />
        </View>
        <View style={styles.buttonBottom}>
          <LessonButton
            title={'HELP'}
            onPress={helpHandler}
            iconName="open-book"
          />
        </View>
      </View>
    </View>
  );
}

export default LessonStudyScreen;

const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: 'center',
    flex: 1,
  },
  darkBackgroundColor: {backgroundColor: Colors.gray80},
  darkThemeColorButton: {backgroundColor: Colors.gray75},
  lightThemeColorButton: {backgroundColor: Colors.gray5},
  darkThemeColor: {
    color: Colors.gray40,
  },
  lightThemeColor: {color: Colors.gray95},
  lightBackgroundColor: {backgroundColor: Colors.gray5},
  listContainer: {
    flex: 0.25,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.purpleop,
  },
  verbIcon: {
    marginHorizontal: 5,
    width: '20%',
    // height: '100%',
  },
  output: {
    flex: 0.07,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.greenop,
  },
  outputText: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  question: {
    textAlign: 'left',
    flex: 0.2,
    flexDirection: 'row',
  },
  time: {
    textAlign: 'left',
    flex: 0.2,
    flexDirection: 'row',
    position: 'absolute',
    top: '17%',
  },
  flexRow: {
    flex: 0.5,
    flexDirection: 'row',
  },
  mainBottoms: {
    flex: 0.8,
    textAlign: 'center',
    width: '100%',
    gap: 2,
  },
  message: {
    textAlign: 'center',
    fontSize: 40,
  },
  messageContainer: {
    flex: 0.8,
    textAlign: 'center',
    justifyContent: 'center',
  },

  iconBottom: {
    flex: 0.05,
    textAlign: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    gap: 2,
  },

  buttomsBottom: {
    flex: 0.06,
    flexDirection: 'row',
  },
  buttonBottom: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#888',
  },
  title1: {
    position: 'relative',
    top: 15,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#888',
  },
  title2: {
    position: 'relative',
    top: -15,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#888',
  },
});
