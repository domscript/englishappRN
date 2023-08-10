import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {SimpleTenseTable} from '../components/UI/SimpleTenseTable';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';
import {LinkList} from '../components/LearnMoreLinks';
import {MyIcon} from '../components/MyIcons/app';

interface HelpScreenProps {
  route: {params: {lessonId: string}};
}

const Title = {
  A: {
    title: 'Lesson 1',
    text: [
      'In the first lesson, we will learn how to conjugate English verbs in three simple tenses: past 🦖, present 🙋, future 🤖.',
      'In each of the tenses, we will figure out how to build an affirmative ✅, negative ❌ or interrogative ❓ sentence.',
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
  D: {
    title: 'Lesson 4',
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
};

function HelpScreen({route}: HelpScreenProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const lessons = 'ABCDEFGHIJKLMNOP';

  const Note = () => {
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
        </View>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          To erase a mistyped word, click the{' '}
          <MyIcon
            color={
              isDarkTheme
                ? styles.darkThemeColor.color
                : styles.lightThemeColor.color
            }
            size={30}
            name="delete"
          />
          {'\t\t'}
          button.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          To open the next lesson, score 4.5 points.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
          ]}>
          To view a hint, click on the{' '}
          <MyIcon
            color={
              isDarkTheme
                ? styles.darkThemeColor.color
                : styles.lightThemeColor.color
            }
            size={30}
            name="lightbulb-on"
          />
          {'\t\t'} button.
        </Text>
      </>
    );
  };

  const renderHelpContent = (lessonId: string) => {
    return (
      <View key={lessonId} style={[styles.rootContainer]}>
        <ScrollView>
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
            ]}>
            {Title[lessonId as keyof typeof Title].title}
          </Text>
          {Title[lessonId as keyof typeof Title].text.map((el, i) => (
            <Text
              style={[
                styles.text,
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
              ]}>
              {'\t\t\t'}
              {el}
            </Text>
          ))}
          <LinkList
            icon={true}
            links={Title[lessonId as keyof typeof Title].links}
          />
          {lessonId === lessons[0] && <SimpleTenseTable />}
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

export default HelpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '0.25%',
    paddingRight: '0.25%',
  },
  note: {marginTop: 10},
  title: {
    fontSize: 20,
    marginVertical: '1.5%',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: '1%',
    paddingLeft: '1%',
    paddingRight: '1%',
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
