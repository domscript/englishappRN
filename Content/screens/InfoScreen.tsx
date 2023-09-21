import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';
import {LinkList} from '../components/LearnMoreLinks';
import {MyIcon} from '../components/MyIcons/app';
import {Statistics} from '../components/UI/Statistics';
import {countProgress} from '../utils/smallFunctions';
import {Intro} from '../components/Intro';

import Svg, {Circle, Line, Path, G, Ellipse} from 'react-native-svg';
import {BoyFace} from '../components/MyIcons/SVG/BoyFace';
import {ManFace} from '../components/MyIcons/SVG/ManFace';
import {OldFace} from '../components/MyIcons/SVG/OldFace';
import {VerbForms} from '../components/MyIcons/SVG/VerbForms';

function InfoScreen() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const newData = '110111'.padEnd(90, '1').padEnd(91, '3').padEnd(100, '2');
  const progress = countProgress(newData)[0];
  return (
    <View
      style={[
        styles.rootContainer,
        {
          backgroundColor: isDarkTheme ? Colors.gray75 : Colors.gray10,
        },
      ]}>
      <ScrollView>
        {/* <Intro endText="Play here for me!" /> */}
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
        {['past', 'present', 'future'].map((el, i) => (
          <View key={i} style={{flexDirection: 'row', marginLeft: '7%'}}>
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
                isDarkTheme ? styles.darkTitle : styles.lightTitle,
                {marginLeft: 0},
              ]}>
              - {el}
            </Text>
          </View>
        ))}
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          and in one of three forms:
        </Text>
        {['affirmative (yes)', 'negative (no)', 'interrogative (question)'].map(
          (el, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                marginLeft: '8%',
              }}>
              <Svg width="25" height="25" translateY={8}>
                <VerbForms tense={i * 3} />
              </Svg>

              <Text
                style={[
                  styles.list,
                  isDarkTheme ? styles.darkTitle : styles.lightTitle,
                  {marginLeft: 0},
                ]}>
                - {el}
              </Text>
            </View>
          ),
        )}
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
          If you answer correctly, the program will praise you.
        </Text>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          If you happen to make a mistake, don't worry—just keep going.
        </Text>
        <View style={[{flexDirection: 'row', marginLeft: '7%'}]}>
          <View style={[{justifyContent: 'center'}]}>
            <MyIcon
              name="delete"
              color={
                isDarkTheme ? styles.darkTitle.color : styles.lightTitle.color
              }
              size={32}
            />
          </View>
          <View style={[{justifyContent: 'center', paddingLeft: 3}]}>
            <Text
              style={[
                styles.text,
                styles.cursive,
                isDarkTheme ? styles.darkTitle : styles.lightTitle,
              ]}>
              click to delete wrong words.
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          The program generates random phrases using words from the dictionary
          and conveys them through images. This continues until you decide
          you've had enough. Each lesson is effectively infinite. When you feel
          you've done enough for the day, you can end it.
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
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '2%',
            },
          ]}>
          <View style={[{justifyContent: 'center'}]}>
            <MyIcon
              name="star-o"
              color={
                isDarkTheme ? styles.darkTitle.color : styles.lightTitle.color
              }
              size={32}
            />
          </View>
          <View style={[{justifyContent: 'center', paddingLeft: 3}]}>
            <Text
              style={[
                styles.mark,
                styles.cursive,
                isDarkTheme ? styles.darkTitle : styles.lightTitle,
              ]}>
              {Math.floor(progress / 2) / 10}
            </Text>
          </View>
        </View>
        <View style={{height: 35}}>
          <Statistics data={newData} flex={1} />
        </View>
        <Text
          style={[
            styles.text,
            isDarkTheme ? styles.darkTitle : styles.lightTitle,
          ]}>
          The program records the results of the last 100 answers for each
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

('👰🤵🏯🎡🎢🎠⛱️🏖️🏝️⛰️🏔️🗻🏘️🏚️🏗️💒🏛️🕋⛩️🛤️🛣️🗾🎑🏞️🌅🌄🌠🎇🎆🌇🌆🏙️🌃🌌🌉🌁          🌂🐨🐸🐒🌱🌿☘️🍀🎍🎋🍃🍂🍁🐚🌾🥀🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏💫⭐️🌟✨⚡️☄️💥☀️🌤️⛅️🌥️☁️🌦️🌧️⛈️🌩️🌨️❄️☃️⛄️🌬️💨💧💦☔️☂️🌊🌫🚨🚍🚡🚃🚄🚂🚇🛫🛬🛰️🛶⛵️🚧🚦🗼🗽🗿🗺️🚏🚥⛱️🏝️🌋⛰️🏔️   🥘🥫🍝🍜🍲🍛🍱☕️🍵🥤🍾🥂🍻🍺🍶🥡');
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
  mark: {
    fontSize: 25,
    fontWeight: '100',
    textAlign: 'justify',
    // lineHeight: 35,
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
