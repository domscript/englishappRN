import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import LessonOverview from './Content/screens/LessonOverviewScreen';
import LessonStudy from './Content/screens/LessonStudyScreen';
import SettingsMain from './Content/screens/SettingsMainScreen';
import Categories from './Content/screens/CategoriesScreen';
import {MyIcon} from './Content/components/MyIcons/app';
import WordsStudy from './Content/screens/WordsStudyScreen';
import WordsList from './Content/screens/WordsListScreen';
import Settings from './Content/screens/SettingsScreen';
import Colors from './Content/constants/Colors';
import Tests from './Content/screens/TestsScreen';
import Help from './Content/screens/HelpScreen';
import Note from './Content/screens/NoteScreen';
import Info from './Content/screens/InfoScreen';

import type {RootState} from './Content/redux-store/store';

const Stack = createNativeStackNavigator();
const TopTabs = createMaterialTopTabNavigator();
const BottomTabs = createBottomTabNavigator();

import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-US');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.6, true);
// Tts.setDefaultPitch(1);
// Tts.setDefaultPitch(1.5);
Tts.setDefaultPitch(1.1);

export function AppStore(): JSX.Element {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const backgroundStyle = {
    backgroundColor: isDarkTheme ? Colors.gray80 : Colors.green20,
  };

  return (
    <>
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar
          barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainNav />
      </SafeAreaView>
    </>
  );
}

export const Screens = {
  tabsMain: [
    {
      name: 'study',
      component: Categories,
      options: {
        // ... specify tab options
      },
    },
    {
      name: 'test',
      component: Tests,
      options: {
        // ... specify tab options
      },
    },
    {
      name: 'settings',
      component: SettingsMain,
      options: {
        // ... specify tab options
      },
    },
  ],
  tabsStudyWords: [
    {
      name: 'Study',
      component: WordsStudy,
      options: {
        header: () => <></>,
        //   title: "Word",
      },
    },
    {
      name: 'List',
      component: WordsList,
      options: {
        header: () => <></>,
      },
    },
  ],
  NavigatorScreens: {
    Settings: {
      name: 'Settings',
      component: Settings,
      options: {
        title: 'Settings',
      },
    },
    Info: {
      name: 'Info',
      component: Info,
      options: {
        title: 'Info',
      },
    },
    Help: {
      name: 'Help',
      component: Help,
      options: {
        title: 'Help',
      },
    },
    Note: {
      name: 'Note',
      component: Note,
      options: {
        title: 'Note',
      },
    },
    Study: {
      name: 'Study',
      component: LessonStudy,
      options: {
        title: 'Study',
      },
    },
    NewWords: {
      name: 'NewWords',
      component: StudyWordsTabs,
      options: {
        title: 'New Words',
      },
    },
  },
};

function MainTabBar({state, descriptors, navigation}): JSX.Element {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          Tts.stop();
          Tts.speak(route.key.slice(0, route.key.indexOf('-')));

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: 3,
              }}>
              <MyIcon
                name={
                  route.name === 'test'
                    ? 'test'
                    : route.name === 'study'
                    ? 'study'
                    : route.name === 'settings'
                    ? 'folder-gear'
                    : route.name
                }
                size={45}
                color={
                  isFocused
                    ? isDarkTheme
                      ? Colors.green20
                      : Colors.amber80
                    : isDarkTheme
                    ? Colors.gray40
                    : Colors.gray70
                }
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MainTabs() {
  return (
    <TopTabs.Navigator tabBar={props => <MainTabBar {...props} />}>
      {Screens.tabsMain.map(tab => (
        <TopTabs.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </TopTabs.Navigator>
  );
}

function StudyWordsTabBar({state, descriptors, navigation}) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index: number) => {
        const {options} = descriptors[route.key];
        const {name} = route;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          Tts.stop();
          Tts.speak(route.name);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View
              style={[
                styles.list,
                isFocused
                  ? isDarkTheme
                    ? styles.darkThemeBackgroundColorPressed
                    : styles.lightThemeBackgroundColorPressed
                  : isDarkTheme
                  ? styles.darkThemeBackgroundColor
                  : styles.lightThemeBackgroundColor,
              ]}>
              <MyIcon
                name={
                  name === 'Study'
                    ? isFocused
                      ? 'rocket-launch'
                      : 'rocket'
                    : isFocused
                    ? 'list-check'
                    : 'list'
                }
                size={35}
                color={
                  isFocused
                    ? isDarkTheme
                      ? styles.darkThemeColorFocus.color
                      : styles.lightThemeColorFocus.color
                    : isDarkTheme
                    ? styles.darkThemeColor.color
                    : styles.lightThemeColor.color
                }
              />

              <Text
                style={[
                  isFocused
                    ? isDarkTheme
                      ? styles.darkThemeColorFocus
                      : styles.lightThemeColorFocus
                    : isDarkTheme
                    ? styles.darkThemeColor
                    : styles.lightThemeColor,
                ]}>
                {' ' + label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function StudyWordsTabs({route}) {
  return (
    <BottomTabs.Navigator tabBar={props => <StudyWordsTabBar {...props} />}>
      {Screens.tabsStudyWords.map(tab => (
        <BottomTabs.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.options}
          initialParams={{
            id: route.params.lessonId,
          }}
        />
      ))}
    </BottomTabs.Navigator>
  );
}

function MainNav() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: isDarkTheme ? styles.darkTheme : styles.lightTheme,
          headerTintColor: isDarkTheme ? Colors.green5 : Colors.green99,
          contentStyle: isDarkTheme ? styles.darkTheme : styles.lightTheme,
        }}>
        <Stack.Screen
          name="mainScreen"
          component={MainTabs}
          options={({navigation}) => ({
            title: 'Ok English!',
            headerRight: ({tintColor}) => null,
          })}
        />
        <Stack.Screen
          name="LessonOverview"
          component={LessonOverview}
          options={({navigation}) => ({
            title: 'Ok English!',
            headerRight: ({tintColor}) => (
              <Pressable onPress={() => navigation.navigate('Settings')}>
                <MyIcon name="gear" size={30} color={tintColor} />
              </Pressable>
            ),
          })}
        />
        {Object.values(Screens.NavigatorScreens).map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    width: 35,
    height: 35,
  },
  darkTheme: {
    backgroundColor: Colors.gray80,
    color: Colors.green5,
  },
  lightTheme: {
    backgroundColor: Colors.green20,
    color: Colors.gray95,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // darkBackgroundColor: { backgroundColor: Colors.gray80 },
  darkThemeColorButton: {backgroundColor: Colors.gray75},
  lightThemeColorButton: {backgroundColor: Colors.gray5},
  // darkBackgroundColorPressed: { backgroundColor: Colors.gray90 },
  darkThemeColor: {
    color: Colors.gray40,
  },
  lightThemeColor: {color: Colors.gray90},
  lightThemeColorFocus: {color: Colors.gray80},
  darkThemeColorFocus: {
    color: Colors.gray30,
  },
  lightThemeBackgroundColor: {backgroundColor: Colors.gray40},
  lightThemeBackgroundColorPressed: {backgroundColor: Colors.green10},
  darkThemeBackgroundColor: {backgroundColor: Colors.gray90},
  darkThemeBackgroundColorPressed: {backgroundColor: Colors.gray80},
});
