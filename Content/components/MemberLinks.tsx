import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import openURLInBrowser from './openURLInBrowser';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import {Verb} from '../components/MyIcons/Verbs';
import Image from '../assets/Image';

interface LinksInt {
  id: number;
  title: string;
  link: string;
  description: string;
}

export const MemberLinks = ({
  links,
  icon,
}: {
  links: LinksInt[];
  icon: boolean;
}) => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const {height, width} = useWindowDimensions();
  const radius = Math.min(100, width) / 4;

  const el = 'buy';

  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkTheme ? Colors.dark : Colors.light,
              },
            ]}>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => openURLInBrowser(link)}
              style={[
                styles.linkContainer,
                {
                  height: 120,
                  width: width * 0.85,
                  borderRadius: radius,
                },
              ]}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 5,
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View key={el + '0'} style={styles.verbIcon}>
                  <Verb positive={0} verb={el} />
                </View>
                <View
                  key={el + '1'}
                  style={{
                    justifyContent: 'center',
                    width: '26%',
                    padding: '1%',
                  }}>
                  <Image src={'me'} resizeMode="contain" />
                </View>
                <View
                  key={el + '2'}
                  style={{
                    justifyContent: 'center',
                    width: '26%',
                    padding: '1%',
                  }}>
                  <Image src={'pizza'} resizeMode="contain" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.purpleop,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
  verbIcon: {
    marginHorizontal: 5,
    width: '25%',
  },
});
