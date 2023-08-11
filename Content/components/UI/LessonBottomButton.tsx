import {Text, StyleSheet, Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MyIcon} from '../MyIcons/app';

import {RootState} from '../../redux-store/store';
import Colors from '../../constants/Colors';

export const LessonButton = ({
  title,
  iconName,
  onPress,
}: {
  title: string;
  iconName: string;
  onPress: () => void;
}) => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View style={styles.listOuterContainer}>
      <Pressable
        android_ripple={{color: Colors.gray40}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <View
          style={[
            styles.buttonBottom,
            isDarkTheme
              ? styles.darkThemeColorButton
              : styles.lightThemeColorButton,
          ]}>
          <View style={styles.iconCont}>
            <MyIcon
              name={iconName}
              size={30}
              color={
                isDarkTheme
                  ? styles.darkThemeColor.color
                  : styles.lightThemeColor.color
              }
            />
          </View>
          <View style={styles.textCont}>
            <Text
              style={[
                styles.title,
                isDarkTheme ? styles.darkThemeColor : styles.lightThemeColor,
              ]}>
              {title}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listOuterContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  darkThemeColorButton: {backgroundColor: Colors.gray75},
  lightThemeColorButton: {backgroundColor: Colors.gray5},
  darkThemeColor: {
    color: Colors.gray40,
  },
  lightThemeColor: {
    color: Colors.gray95,
  },
  buttonBottom: {
    flexDirection: 'row',
    width: '100%',
  },
  textCont: {
    flex: 0.6,
    justifyContent: 'center',
  },
  iconCont: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: '100',
    fontSize: 17,
    padding: 1,
  },
});
