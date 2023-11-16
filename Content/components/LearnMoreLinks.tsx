import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

import openURLInBrowser from './openURLInBrowser';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import {MyIcon} from '../components/MyIcons/app';

interface LinksInt {
  id: number;
  title: string;
  link: string;
  description: string;
}

export const LinkList = ({links, icon}: {links: LinksInt[]; icon: boolean}) => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          {/* <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          /> */}
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => openURLInBrowser(link)}
            style={styles.linkContainer}>
            {icon && <MyIcon name="youtube" color={'red'} size={30} />}
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: isDarkTheme ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 32,
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 10,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});
