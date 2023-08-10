import {Text, StyleSheet, Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';

interface WordButtonProps {
  buttonText: string;
  handlePress: () => void;
  correct?: boolean | null;
  incorrect?: boolean;
  index?: boolean;
}

export function WordButton({
  buttonText,
  handlePress,
  correct,
  incorrect,
  index,
}: WordButtonProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <Pressable
      style={({pressed}) => [
        [
          styles.button,
          isDarkTheme
            ? pressed
              ? styles.darkBackgroundColorPressed
              : styles.darkBackgroundColor
            : pressed
            ? styles.lightBackgroundColorPressed
            : styles.lightBackgroundColor,
        ],
      ]}
      onPress={handlePress}>
      <Text
        style={[
          styles.buttonText,
          index && correct
            ? isDarkTheme
              ? styles.darkThemeColorCorrect
              : styles.lightThemeColorCorrect
            : index && incorrect
            ? isDarkTheme
              ? styles.darkThemeColorIncorrect
              : styles.lightThemeColorIncorrect
            : isDarkTheme
            ? styles.darkThemeColor
            : styles.lightThemeColor,
        ]}>
        {buttonText}
      </Text>
    </Pressable>
  );
}

export function WordFlex() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        styles.button,
        isDarkTheme ? styles.darkBackgroundColor : styles.lightBackgroundColor,
      ]}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  darkBackgroundColor: {backgroundColor: Colors.gray80},
  darkBackgroundColorPressed: {backgroundColor: Colors.gray90},
  lightBackgroundColor: {backgroundColor: Colors.gray5},
  lightBackgroundColorPressed: {backgroundColor: Colors.gray10},
  button: {
    flex: 1,
    // elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  darkThemeColor: {
    color: Colors.gray40,
  },
  darkThemeColorCorrect: {color: Colors.green30},
  lightThemeColorCorrect: {color: Colors.green80},
  darkThemeColorIncorrect: {color: Colors.red60},
  lightThemeColorIncorrect: {color: Colors.red80},
  lightThemeColor: {
    color: Colors.gray95,
  },
});
