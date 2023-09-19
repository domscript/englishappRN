import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {SimpleTenseTable} from '../components/UI/SimpleTenseTable';
import {BeTable} from '../components/UI/BeTable';
import {PronounsTable} from '../components/UI/PronounsTable';
import {AdjectivesTable} from '../components/UI/AdjectivesTable';
import {QuestionWords} from '../components/UI/QuestionWords';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';
import {LinkList} from '../components/LearnMoreLinks';
import {MyIcon} from '../components/MyIcons/app';

import Svg from 'react-native-svg';
import {BoyFace} from '../components/MyIcons/SVG/BoyFace';
import {ManFace} from '../components/MyIcons/SVG/ManFace';
import {OldFace} from '../components/MyIcons/SVG/OldFace';
import {VerbForms} from '../components/MyIcons/SVG/VerbForms';

const Title = {
  A: {
    title: 'Lesson 1',
    text: [
      'In the first lesson, we will learn how to conjugate English verbs in three simple tenses:',
      'In each of the tenses, we will figure out how to build sentences:',
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/lbIZNttSV-E',
        description: 'Simple Tenses',
      },
    ],
  },
  B: {
    title: 'Lesson 2',
    text: [
      'Object Pronouns.',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/ju9wjA9HtSA',
        description: 'Personal Pronouns',
      },
      {
        id: 2,
        title: 'Watch Video',
        link: 'https://youtu.be/zj8w-K1s87Q',
        description: 'Question Words',
      },
    ],
  },
  C: {
    title: 'Lesson 3',
    text: [
      'Verb "to be"',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      // {
      //   id: 1,
      //   title: 'Watch Video',
      //   link: 'https://youtu.be/ju9wjA9HtSA',
      //   description: 'Personal Pronouns',
      // },
    ],
  },
  D: {
    title: 'Lesson 4',
    text: [
      // 'Object Pronouns.',
      'Possessive adjectives, also known as possessive determiners, are words that indicate ownership or possession of something. They are used before a noun to show that something belongs to someone or something',
    ],
    links: [
      // {
      //   id: 1,
      //   title: 'Watch Video',
      //   link: 'https://youtu.be/ju9wjA9HtSA',
      //   description: 'Personal Pronouns',
      // },
    ],
  },
  E: {
    title: 'Lesson 5',
    text: [
      'Object Pronouns.',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/ju9wjA9HtSA',
        description: 'Personal Pronouns',
      },
    ],
  },
  F: {
    title: 'Lesson 6',
    text: [
      'Object Pronouns.',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/ju9wjA9HtSA',
        description: 'Personal Pronouns',
      },
    ],
  },
  G: {
    title: 'Lesson 7',
    text: [
      'Object Pronouns.',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/ju9wjA9HtSA',
        description: 'Personal Pronouns',
      },
    ],
  },
  H: {
    title: 'Lesson 8',
    text: [
      'Object Pronouns.',
      "To make our sentences more interesting and a bit more challenging, let's add Object pronouns.",
    ],
    links: [
      {
        id: 1,
        title: 'Watch Video',
        link: 'https://youtu.be/ju9wjA9HtSA',
        description: 'Personal Pronouns',
      },
    ],
  },
};

function HelpScreen({route}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const lessons = 'ABCDEFGHIJKLMNOP';

  const renderHelpContent = (lessonId: string) => {
    return (
      <View key={lessonId} style={[styles.container]}>
        <ScrollView style={{width: '100%'}}>
          {/* <View style={{}}> */}
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
            ]}>
            {Title[lessonId as keyof typeof Title].title}
          </Text>
          {Title[lessonId as keyof typeof Title].text.map((el, i) => (
            <>
              <Text
                style={[
                  styles.text,
                  isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
                ]}>
                {'\t\t\t'}
                {el}
              </Text>
              {lessonId === lessons[0] &&
                i === 0 &&
                ['past', 'present', 'future'].map((el, i) => (
                  <View
                    key={i + el}
                    style={{flexDirection: 'row', marginLeft: '7%'}}>
                    <Svg width="35" height="38" translateX={i || 5}>
                      {el === 'past' ? (
                        <BoyFace />
                      ) : el === 'present' ? (
                        <ManFace />
                      ) : el === 'future' ? (
                        <OldFace />
                      ) : null}
                    </Svg>

                    <Text
                      style={[
                        styles.list,
                        isDarkTheme
                          ? styles.darkThemeColor
                          : styles.lightThemeColor,
                        {marginLeft: 0},
                      ]}>
                      - {el}
                    </Text>
                  </View>
                ))}
              {lessonId === lessons[0] &&
                i === 1 &&
                [
                  'affirmative (yes)',
                  'negative (no)',
                  'interrogative (question)',
                ].map((el, i) => (
                  <View
                    key={i + el}
                    style={{
                      flexDirection: 'row',
                      marginLeft: '8%',
                    }}>
                    {lessonId === lessons[0] && (
                      <>
                        <Svg width="25" height="25" translateY={8}>
                          <VerbForms tense={i * 3} />
                        </Svg>
                        <Text
                          style={[
                            styles.list,
                            isDarkTheme
                              ? styles.darkThemeColor
                              : styles.lightThemeColor,
                            {marginLeft: 0},
                          ]}>
                          - {el}
                        </Text>
                      </>
                    )}
                  </View>
                ))}
            </>
          ))}
          <LinkList
            icon={true}
            links={Title[lessonId as keyof typeof Title].links}
          />
          {lessonId === lessons[0] && <SimpleTenseTable />}
          {lessonId === lessons[2] && <BeTable />}
          {lessonId === lessons[1] && <PronounsTable />}
          {lessonId === lessons[1] && <QuestionWords />}
          {lessonId === lessons[3] && <AdjectivesTable />}
          <Note />
        </ScrollView>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.rootContainer,
        {
          backgroundColor: isDarkTheme ? Colors.gray75 : Colors.gray10,
        },
      ]}>
      {lessons.split('').map(lesson => {
        if (route.params.lessonId === lesson) {
          return renderHelpContent(lesson);
        }
        return null;
      })}
    </View>
  );
}

function Note() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <>
      <View style={[styles.note]}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
            },
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          Note:
        </Text>
        <View style={[styles.flex]}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                styles.text,
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
              ]}>
              To open the next lesson, score 4.5 points;
            </Text>
          </View>
        </View>
        <View style={[styles.flex]}>
          <View style={{justifyContent: 'center'}}>
            <MyIcon
              color={
                isDarkTheme
                  ? styles.darkThemeColor.color
                  : styles.lightThemeColor.color
              }
              size={30}
              name="delete"
            />
          </View>

          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                styles.text,
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
              ]}>
              click, to delete a wrong word;
            </Text>
          </View>
        </View>
        <View style={[styles.flex]}>
          <View style={{justifyContent: 'center'}}>
            <MyIcon
              color={
                isDarkTheme
                  ? styles.darkThemeColor.color
                  : styles.lightThemeColor.color
              }
              size={30}
              name="lightbulb-on"
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                styles.text,
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
              ]}>
              click, to view a hint.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  note: {marginTop: 10, paddingLeft: 5, paddingRight: 5},
  flex: {flexDirection: 'row'},
  title: {
    fontSize: 20,
    marginVertical: '1.5%',
    marginLeft: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: '1%',
  },
  list: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 35,
    marginLeft: '7%',
  },
  darkThemeColor: {
    color: Colors.gray10,
  },
  lightThemeColor: {color: Colors.gray90},
});

//   darkBackgroundColor: {backgroundColor: Colors.gray80},
//   darkBackgroundColorPressed: {backgroundColor: Colors.gray90},
//   darkThemeColor: {
//     color: Colors.gray10,
//   },
//   lightThemeColor: {color: Colors.gray90},
//   lightBackgroundColor: {backgroundColor: Colors.gray5},
//   lightBackgroundColorPressed: {backgroundColor: Colors.gray10},
// });
