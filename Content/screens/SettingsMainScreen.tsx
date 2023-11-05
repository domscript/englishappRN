import {Pressable, StyleSheet, Text, View, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Colors from '../constants/Colors';
import {MyIcon} from '../components/MyIcons/app';
import {RootState} from '../redux-store/store';
import {Screens} from '../Navigation';

function SettingsMain() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const navigation = useNavigation();

  function infoHandler() {
    navigation.navigate(Screens.NavigatorScreens.Info.name);
  }

  function settingsHandler() {
    navigation.navigate(Screens.NavigatorScreens.Settings.name);
  }

  function improveHandler() {
    navigation.navigate(Screens.NavigatorScreens.ImproveApp.name);
  }

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkThemeContainer : styles.lightThemeContainer,
      ]}>
      <ScreenButton iconName="info-circle" onPress={infoHandler} text="Info" />
      <ScreenButton iconName="gear" onPress={settingsHandler} text="Settings" />
      <ScreenButton
        iconName="pizza-slice"
        onPress={improveHandler}
        text="Improve App"
      />
    </View>
  );
}

function ScreenButton({
  onPress,
  iconName,
  text,
}: {
  onPress: () => void; // Specify the type of onPress function
  iconName: 'info-circle' | 'gear' | 'pizza-slice';
  text: 'Info' | 'Settings' | 'Improve App';
}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <Pressable
      android_ripple={[{color: isDarkTheme ? Colors.gray90 : Colors.gray20}]}
      style={({pressed}) => (pressed ? styles.buttonPressed : null)}
      onPress={onPress}>
      <View style={styles.lesson}>
        <View style={styles.score}>
          <MyIcon
            name={iconName}
            size={48}
            color={`${isDarkTheme ? Colors.green5 : Colors.green95}`}
          />
        </View>
        <View style={styles.lessonTitle}>
          <Text
            style={[
              styles.title,
              isDarkTheme ? styles.darkTheme : styles.lightTheme,
            ]}>
            {text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SettingsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderTopWidth: 1,
    borderColor: Colors.gray85,
  },
  darkThemeContainer: {backgroundColor: Colors.gray80},
  lightThemeContainer: {backgroundColor: Colors.gray5},
  buttonPressed: {
    opacity: 0.5,
  },
  lesson: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: Colors.green20,
  },
  darkTheme: {
    borderColor: Colors.green95,
    color: Colors.gray5,
  },
  lightTheme: {
    borderColor: Colors.green20,
    color: Colors.gray95,
  },
  score: {
    borderRadius: 30,
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
});
