import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';
import {LinkList} from '../components/LearnMoreLinks';
import {MyIcon} from '../components/MyIcons/app';

function InfoScreen() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          backgroundColor: isDarkTheme ? Colors.gray75 : Colors.gray10,
        },
      ]}>
      <ScrollView>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          How It Works:
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          The program presents you with simple expressions in images in one of
          three tenses:
        </Text>
        <Text
          style={[
            styles.list,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          🦖 - past{'\n'}
          🙋 - present{'\n'}
          🤖 - future
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          and in one of three forms:
        </Text>
        <Text
          style={[
            styles.list,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          ✅ - affirmative (yes){'\n'}❌ - negative (no){'\n'}❓ - interrogative
          (question){'\n'}
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          You need to form an English phrase from the words displayed on the
          screen.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          If you answer correctly, the program will praise you. If you happen to
          make a mistake, don't worry—just keep going.
        </Text>
        <Text
          style={[
            styles.text,
            styles.cursive,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          If you accidentally select the wrong word, press the{' '}
        </Text>
        <MyIcon name="delete" color={'red'} size={20} />
        <Text
          style={[
            styles.text,
            styles.cursive,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          button to undo your selection.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          The program generates random phrases using words from the dictionary.
          This continues until you decide you've had enough. Each lesson is
          effectively infinite. When you feel you've done enough for the day,
          you can end it.
        </Text>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          {'\t\t\t'}Lesson List:
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          {'\t\t\t'}The lesson list provides the following information for each
          lesson:
        </Text>
        <Text
          style={[
            styles.list,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          <Text
            style={[
              styles.bold,
              isDarkTheme ? styles.darkTitle : styles.lightTitle,
            ]}>
            Icon:
          </Text>{' '}
          Green indicates the lesson is available for learning. Gray indicates
          the lesson is locked until you complete a certain number of tasks from
          the previous lesson.{'\n'}
          <Text
            style={[
              styles.bold,
              isDarkTheme ? styles.darkTitle : styles.lightTitle,
            ]}>
            Lesson name.{'\n'}
          </Text>
          <Text
            style={[
              styles.bold,
              isDarkTheme ? styles.darkTitle : styles.lightTitle,
            ]}>
            Lesson description.{'\n'}
          </Text>
          <Text
            style={[
              styles.bold,
              isDarkTheme ? styles.darkTitle : styles.lightTitle,
            ]}>
            Points:
          </Text>{' '}
          Your current score for the lesson, recalculated based on the last 100
          responses.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          To unlock the next lesson, you must achieve a minimum of 4.5 points by
          completing tasks from the previous lesson.
        </Text>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          Statistics:
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          The program records the results of the last hundred answers for each
          lesson.
        </Text>
        {/* <LinkList
          links={[
            {
              id: 1,
              title: 'The Basics',
              link: 'https://reactnative.dev/docs/tutorial',
              description: 'Explains a Hello World for React Native.',
            },
          ]}
        /> */}
      </ScrollView>
    </View>
  );
}

('🧑‍⚖️👰🤵🏯🎡🎢🎠⛲️⛱️🏖️🏝️🏜️🌋⛰️🏔️🗻⛺️🏘️🏚️🏗️🏢💒🏛️🕋⛩️🛤️🛣️🗾🎑🏞️🌅🌄🌠🎇🎆🌇🌆🏙️🌃🌌🌉🌁          🧥👚👕👖👔👙🧦👘👠👡👢👞👟🧦🧤🧣🎩🧢👒🎓⛑️👑💍👝👛💼🎒👓🕶️🌂🐨🐸🐒🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🐚🌾💐🌷🌹🥀🌺🌸🌼🌻🌞🌝🌛🌜🌚🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏💫⭐️🌟✨⚡️☄️💥🔥🌪️🌈☀️🌤️⛅️🌥️☁️🌦️🌧️⛈️🌩️🌨️❄️☃️⛄️🌬️💨💧💦☔️☂️🌊🌫🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🚚🚛🚜🛴🚲🛵🏍️🚨🚔🚍🚡🚃🚄🚂🚇✈️🛫🛬🛩️🛰️🚀🛸🚁🛶⛵️⛴️🚤🛥️🚧🚦🏰🗼🗽🗿🗺️🚏🚥⛱️🏝️🌋⛰️🏔️          🥐🍞🥖🥨🧀🥚🥞🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🌮🌯🥗🥘🥫🍝🍜🍲🍛🍣🍱🥟🍤🍙🍚🍘🥠🍡🍧🍨🍦🥧🍰🎂🍮🍭🍬🍿🍫🍩🍪🌰🥜🍯🍼☕️🍵🥤🍾🍹🍸🥃🥂🍻🍺🍶🥄🍴🍽️🥣🥡🥢');
export default InfoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'justify',
    lineHeight: 35,
  },
  list: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 35,
    marginLeft: '7%',
  },
  bold: {
    fontWeight: 'bold',
  },
  cursive: {
    textTransform: 'uppercase',
  },
  title: {
    marginLeft: '7%',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkTitle: {color: Colors.gray5},
  lightTitle: {color: Colors.gray95},
});
