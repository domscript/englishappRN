import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {MyIcon} from '../components/MyIcons/app';
import {darkTheme, lightTheme} from '../redux-store/theme';
import {easyGame, normalGame} from '../redux-store/help';
import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';
import SwitchButton from '../components/UI/SwitchButton';
import {turnSounds, turnoffSounds} from '../redux-store/sounds';

function SettingsScreen() {
  const {isDarkTheme} = useSelector((state: RootState) => ({
    isDarkTheme: state.theme.isDarkTheme,
    // isEasy: state.help.isEasy,
  }));

  const dispatch = useDispatch();

  const handleThemeLight = () => {
    dispatch(lightTheme());
  };
  const handleThemeDark = () => {
    dispatch(darkTheme());
  };

  const handleEasyLevel = () => {
    dispatch(easyGame());
  };
  const handleNormalLevel = () => {
    dispatch(normalGame());
  };

  const handleSoundsOn = () => {
    dispatch(turnSounds());
  };
  const handleSoundsOff = () => {
    dispatch(turnoffSounds());
  };
  const onValueChange1 = () => {
    console.log('TODO');
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
      <View
        style={[
          styles.levelOuterContainer,
          isDarkTheme ? styles.darkTheme : styles.lightTheme,
        ]}>
        <Level help={true} onPress={handleEasyLevel} />
        <Level help={false} onPress={handleNormalLevel} />
      </View>
      <View
        style={[
          styles.levelOuterContainer,
          isDarkTheme ? styles.darkTheme : styles.lightTheme,
        ]}>
        <Sounds sound={false} onPress={handleSoundsOff} />
        <Sounds sound={true} onPress={handleSoundsOn} />
      </View>
      <View
        style={[
          styles.switchOuterContainer,
          isDarkTheme ? styles.darkTheme : styles.lightTheme,
        ]}>
        {/* <SwitchButton
          label="Sounds"
          onValueChange={onValueChange0}
          initialValue={true}
        /> */}
      </View>
      <View
        style={[
          styles.switchOuterContainer,
          isDarkTheme ? styles.darkTheme : styles.lightTheme,
        ]}>
        {/* <SwitchButton
          label="Sound Answer"
          onValueChange={onValueChange1}
          initialValue={true}
        /> */}
      </View>
    </View>
  );
}

function Theme({dark, onPress}: {dark: boolean; onPress: () => void}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        styles.themeContainer,
        {flex: dark !== isDarkTheme ? 0.54 : 0.44},
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

function Level({help, onPress}: {help: boolean; onPress: () => void}) {
  const {isDarkTheme, isEasy} = useSelector((state: RootState) => ({
    isDarkTheme: state.theme.isDarkTheme,
    isEasy: state.help.isEasy,
  }));

  return (
    <View
      style={[
        styles.themeContainer,
        {flex: isEasy === help ? 0.54 : 0.44},
        isDarkTheme
          ? isEasy === help
            ? styles.darkThemeActive
            : styles.darkThemeNotActive
          : isEasy === help
          ? styles.lightThemeActive
          : styles.lightThemeNotActive,
      ]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          isDarkTheme
            ? isEasy === help
              ? styles.buttonDarkActive
              : styles.buttonDark
            : isEasy === help
            ? styles.buttonLightActive
            : styles.buttonLight,

          pressed && styles.buttonPressed,
        ]}>
        <View
          style={[
            styles.navCont,
            isDarkTheme
              ? isEasy === help
                ? styles.lightThemeNavLevel
                : styles.lightThemeNav
              : styles.darkThemeNav,
          ]}>
          <MyIcon
            name="study"
            size={25}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
          <Text
            style={[
              {paddingHorizontal: 2},
              styles.buttonText,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}>
            Level {help ? 'Easy' : 'Normal'}
          </Text>
          <MyIcon
            name={help ? 'level-2' : 'level-f'}
            size={25}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <MyIcon
            name={help ? 'star-o' : 'rocket-launch'}
            size={35}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
          <MyIcon
            name={help ? 'sound' : 'sound-off'}
            size={12}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
        </View>
        <Text
          style={[
            styles.buttonText,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}>
          {help ? 'I         will' : 'Will        i'}
        </Text>
        <Text
          style={[
            styles.buttonText,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}>
          {help ? 'take      a star' : 'ever        fly'}
        </Text>
        <View style={[styles.helpInfo]}>
          <Text
            style={[
              styles.buttonText,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}>
            {help ? 'DELETE NOTE HELP' : 'DELETE         HELP'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

function Sounds({sound, onPress}: {sound: boolean; onPress: () => void}) {
  const {isDarkTheme, isSound} = useSelector((state: RootState) => ({
    isDarkTheme: state.theme.isDarkTheme,
    isSound: state.sounds.isSound,
  }));

  return (
    <View
      style={[
        styles.themeContainer,
        {flex: isSound === sound ? 0.54 : 0.44},
        isDarkTheme
          ? isSound === sound
            ? styles.darkThemeActive
            : styles.darkThemeNotActive
          : isSound === sound
          ? styles.lightThemeActive
          : styles.lightThemeNotActive,
      ]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          isDarkTheme
            ? isSound === sound
              ? styles.buttonDarkActive
              : styles.buttonDark
            : isSound === sound
            ? styles.buttonLightActive
            : styles.buttonLight,

          pressed && styles.buttonPressed,
        ]}>
        <View
          style={[
            styles.navCont,
            isDarkTheme
              ? isSound === sound
                ? styles.lightThemeNavLevel
                : styles.lightThemeNav
              : styles.darkThemeNav,
          ]}>
          <MyIcon
            name="study"
            size={25}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
          <Text
            style={[
              {paddingHorizontal: 2},
              styles.buttonText,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}>
            Sounds {sound ? 'on' : 'off'}
          </Text>
          <MyIcon
            name={sound ? 'sound' : 'sound-off'}
            size={25}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
        </View>
        <MyIcon
          name={sound ? 'star-o' : 'rocket-launch'}
          size={35}
          color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
        />
        <View style={{flexDirection: 'row'}}>
          <MyIcon
            name={sound ? 'sound' : 'sound-off'}
            size={12}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
          <Text
            style={[
              styles.buttonText,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}>
            {sound ? 'I         will' : 'Will        i'}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <MyIcon
            name={sound ? 'sound' : 'sound-off'}
            size={12}
            color={isDarkTheme ? styles.textDark.color : styles.textLight.color}
          />
          <Text
            style={[
              styles.buttonText,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}>
            {sound ? 'take      a star' : 'ever        fly'}
          </Text>
        </View>
        <View style={[styles.helpInfo]}>
          <View style={{flexDirection: 'row'}}>
            <MyIcon
              name={sound ? 'sound' : 'sound-off'}
              size={12}
              color={
                isDarkTheme ? styles.textDark.color : styles.textLight.color
              }
            />
            <Text
              style={[
                styles.buttonText,
                isDarkTheme ? styles.textDark : styles.textLight,
              ]}>
              {sound ? 'DELETE NOTE HELP' : 'DELETE NOTE HELP'}
            </Text>
          </View>
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
    flex: 0.18,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
  },
  levelOuterContainer: {
    flex: 0.24,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
  },
  switchOuterContainer: {
    flex: 0.1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
  },
  navCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeContainer: {
    flex: 0.49,
    borderRadius: 5,
    alignContent: 'center',
  },
  themeInfo: {
    padding: 20,
  },
  helpInfo: {
    paddingTop: 5,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
  },
  lightThemeActive: {
    backgroundColor: Colors.green30,
  },
  lightThemeNotActive: {
    backgroundColor: Colors.green20,
  },
  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  darkThemeActive: {
    backgroundColor: Colors.green60,
  },
  darkThemeNotActive: {
    backgroundColor: Colors.gray70,
  },
  lightThemeNav: {width: '100%', backgroundColor: Colors.gray85},
  darkThemeNav: {width: '100%', backgroundColor: Colors.green20},
  lightThemeNavLevel: {width: '100%', backgroundColor: Colors.green80},
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
  buttonLightActive: {
    backgroundColor: Colors.green10,
  },
  buttonDarkActive: {
    backgroundColor: Colors.green90,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
