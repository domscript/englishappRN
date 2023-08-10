import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';

import WordItem from '../components/WordsList/WordItemWordsList';

function WordsList({route}) {
  const {id} = route.params;
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const {words} = useSelector((state: RootState) => state.words[id]);

  const data = words => {
    const transformedData = [];
    Object.entries(words).forEach(([key, value]) => {
      if (!key.includes('empty')) transformedData.push(['title', key]);
      Object.values(value).forEach(entry => {
        transformedData.push(['word', ...entry]);
      });
    });
    return transformedData;
  };

  const transformedData = data(words);

  function renderItem(itemData) {
    const item = itemData.item;
    if (item[0] === 'title')
      return (
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.darkTheme : styles.lightTheme,
            ]}>
            {item[1]}
          </Text>
        </View>
      );

    const ItemProps = {
      title: item[1],
      score: item[2],
      text: item[3],
      id: id,
    };
    return <WordItem {...ItemProps} />;
  }

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkTheme : styles.lightTheme,
      ]}>
      <FlatList
        data={transformedData}
        keyExtractor={word => word[0] + word[1]}
        renderItem={renderItem}
      />
    </View>
  );
}

export default WordsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkTheme: {
    backgroundColor: Colors.gray80,
    color: Colors.gray30,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
    color: Colors.gray95,
  },
  innerContainer: {},
  title: {
    fontSize: 24,
    margin: 4,
    textAlign: 'center',
  },
});
