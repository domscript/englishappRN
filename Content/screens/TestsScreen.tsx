import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-store/store';

import Colors from '../constants/Colors';
import {roundScore} from '../utils/smallFunctions';

const DATA = [
  {
    title: 'Lesson 1',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 2',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 3',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 4',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 5',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 6',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 7',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 8',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 9',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 10',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 11',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 12',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 13',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 14',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 15',
    data: 'simple',
    score: 0,
  },
  {
    title: 'Lesson 16',
    data: 'simple',
    score: 0,
  },
];

export default function Lessons() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <ScrollView style={[isDarkTheme ? styles.darkTheme : styles.lightTheme]}>
      {DATA.map(({title, data, score}) => (
        <View
          key={title}
          style={[
            styles.lesson,
            isDarkTheme ? styles.darkTheme : styles.lightTheme,
          ]}>
          <View style={styles.score}>
            <Text
              style={[
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
                styles.title,
              ]}>
              {roundScore(score)}
            </Text>
          </View>
          <View style={styles.lessonTitle}>
            <Text
              style={[
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
                styles.title,
              ]}>
              {title}
            </Text>
            <Text
              style={[
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
                styles.text,
              ]}>
              {data}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lesson: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: Colors.green20,
  },
  selectedLesson: {
    backgroundColor: Colors.green10,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
  },
  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  lightThemeColor: {
    color: Colors.gray95,
  },
  darkThemeColor: {
    color: Colors.gray5,
  },
  score: {
    borderRadius: 30,
    backgroundColor: Colors.amber50,
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
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 14,
  },
});
