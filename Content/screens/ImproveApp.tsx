import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';
import {MemberLinks} from '../components/MemberLinks';

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
      <Text
        style={[
          styles.title,
          isDarkTheme ? styles.darkTitle : styles.lightTitle,
          {backgroundColor: isDarkTheme ? Colors.gray80 : Colors.green20},
        ]}>
        Buy Pizza == Improve App
      </Text>
      <MemberLinks
        icon={true}
        links={[
          {
            id: 1,
            title: 'buy me a pizza',
            link: 'https://www.buymeacoffee.com/domscript',
            description: 'buy me a coffee com',
          },
        ]}
      />
    </View>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    height: 60,
    width: '100%',
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: Colors.gray85,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  darkTitle: {color: Colors.green5},
  lightTitle: {color: Colors.green90},
});
