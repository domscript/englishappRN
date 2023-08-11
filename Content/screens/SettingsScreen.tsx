import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {MyIcon} from '../components/MyIcons/app';
import {darkTheme, lightTheme} from '../redux-store/theme';
import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';

function SettingsScreen() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleThemeLight = () => {
    dispatch(lightTheme());
  };
  const handleThemeDark = () => {
    dispatch(darkTheme());
  };

  return (
    <View
      style={[
        styles.rootContainer,
        isDarkTheme ? styles.darkTheme : styles.lightTheme,
      ]}>
      <View
        style={[
          styles.themeOuterContainer,
          isDarkTheme ? styles.darkTheme : styles.lightTheme,
        ]}>
        <Theme dark={true} onPress={handleThemeLight} />
        <Theme dark={false} onPress={handleThemeDark} />
      </View>
    </View>
  );
}

function Theme({dark, onPress}: {dark: boolean; onPress: () => void}) {
  return (
    <View
      style={[
        styles.themeContainer,
        dark ? styles.darkTheme : styles.lightTheme,
      ]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          dark ? styles.buttonLight : styles.buttonDark,
          pressed && styles.buttonPressed,
        ]}>
        <View
          style={[
            styles.navCont,
            dark ? styles.darkThemeNav : styles.lightThemeNav,
          ]}>
          <MyIcon
            name="arrow-left"
            size={15}
            color={dark ? styles.textLight.color : styles.textDark.color}
          />
          <Text
            style={[
              {paddingLeft: 10},
              styles.buttonText,
              dark ? styles.textLight : styles.textDark,
            ]}>
            Settings
          </Text>
        </View>
        <Text
          style={[
            styles.buttonText,
            dark ? styles.textLight : styles.textDark,
          ]}>
          {dark ? 'Light Theme' : 'Dark Theme'}
        </Text>
        <View style={[styles.themeInfo]}>
          <Text
            style={[
              styles.buttonText,
              dark ? styles.textLight : styles.textDark,
            ]}>
            I will Study🙂
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    paddingTop: 10,
  },
  themeOuterContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
  },
  navCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeContainer: {
    flex: 0.45,
    borderRadius: 5,
    alignContent: 'center',
  },
  themeInfo: {
    padding: 20,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
  },
  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  lightThemeNav: {width: '100%', backgroundColor: Colors.gray85},
  darkThemeNav: {width: '100%', backgroundColor: Colors.green20},
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navThemeContainer: {
    textAlign: 'center',
  },
  textLight: {
    color: 'black',
  },
  textDark: {
    color: 'white',
  },
  button: {
    padding: 1,
    borderRadius: 5,
    margin: 2,
    alignItems: 'center',
  },
  buttonLight: {
    backgroundColor: Colors.gray5,
  },
  buttonDark: {
    backgroundColor: Colors.gray80,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
