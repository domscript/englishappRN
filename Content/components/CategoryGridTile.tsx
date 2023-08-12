import {Pressable, View, Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import {countProgress, roundScore} from '../utils/smallFunctions';

function CategoryGridTile({
  title,
  text,
  onPress,
  id,
}: {
  title: string;
  text: string;
  id: string;
  onPress: () => void;
}) {
  const {
    theme: {isDarkTheme},
    lessons: {user1},
  } = useSelector((state: RootState) => state);
  const isOpen = user1.includes(id);

  const progress =
    Math.floor(
      countProgress(user1.toUpperCase().split(id)[1].slice(0, 100))[0] / 2,
    ) / 10;
  const roundProgress = roundScore(progress);

  return (
    <View
      style={[
        styles.gridItem,
        isDarkTheme ? styles.darkTheme : styles.lightTheme,
      ]}>
      <Pressable
        android_ripple={{color: isDarkTheme ? Colors.gray90 : Colors.gray20}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={isOpen ? onPress : () => {}}>
        <View key={title} style={styles.lesson}>
          <View
            style={[
              styles.score,
              {
                backgroundColor: !isOpen
                  ? Colors.gray60
                  : progress >= 4.5
                  ? Colors.green70
                  : Colors.amber60,
              },
            ]}>
            {isOpen && (
              <Text
                style={[
                  styles.title,
                  isDarkTheme ? styles.darkTitle : styles.lightTitle,
                ]}>
                {roundProgress}
              </Text>
            )}
          </View>
          <View style={styles.lessonTitle}>
            <Text
              style={[
                styles.title,
                isDarkTheme ? styles.darkTitle : styles.lightTitle,
              ]}>
              {title}
            </Text>
            <Text
              style={[
                styles.text,
                isDarkTheme ? styles.darkTitle : styles.lightTitle,
              ]}>
              {text}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 1,
    // height: 150,
    borderRadius: 8,
    elevation: 1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
  },
  darkTitle: {color: Colors.gray5},
  lightTitle: {color: Colors.gray95},
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lesson: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: Colors.green20,
  },
  selectedLesson: {
    backgroundColor: Colors.green10,
  },
  score: {
    borderRadius: 30,
    backgroundColor: 'orange',
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
    fontSize: 22,
  },
  text: {
    fontSize: 12,
  },
});
