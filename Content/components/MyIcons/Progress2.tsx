import Svg, {G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

interface SvgExampleProps {
  stage: 1 | 2 | 3 | 4;
}

export default class SvgExample extends React.Component<SvgExampleProps> {
  render() {
    const stage = this.props.stage;

    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 101 100"
          fill={stage >= 3 ? Colors.green80 : Colors.amber50}>
          <G opacity="0.1">
            <Path d="M50 100C78 100 100 78 100 50C100 22 78 0 50 0C22 0 0 22 0 50C0 78 22 100 50 100ZM50 90C28 90 10 72 10 50C10 28 28 10 50 10C72 10 90 28 90 50C90 72 72 90 50 90Z" />
          </G>
          {stage >= 3 && (
            <Path d="M50 100C78 100 100 78 100 50C100 22 78 0 50 0C22 0 0 22 0 50C0 78 22 100 50 100ZM50 90C28 90 10 72 10 50C10 28 28 10 50 10C72 10 90 28 90 50C90 72 72 90 50 90Z" />
          )}
          {stage >= 3 && (
            <Path d="M50 79C46 79 43 78 40 77C37 76 34 74 33 71C31 69 30 67 30 63H37C37 65 38 67 39 68C40 70 42 71 43 71C45 72 47 73 50 73C52 73 54 72 56 71C58 70 60 69 61 68C62 66 62 64 62 62C62 60 62 58 61 57C60 55 58 54 56 53C54 52 52 51 49 51H44V45H49C51 45 53 45 55 44C57 43 58 42 59 40C60 39 60 37 60 35C60 33 60 31 59 30C58 28 57 27 55 26C54 26 52 25 50 25C48 25 46 26 44 26C42 27 41 28 40 29C39 31 38 32 38 34H31C31 31 32 29 34 26C36 24 38 22 41 21C43 20 46 19 50 19C54 19 57 20 59 21C62 23 64 25 65 27C66 29 67 32 67 35C67 38 66 41 65 43C63 45 61 47 58 48V48C61 49 64 50 66 53C68 55 69 59 69 62C69 65 68 68 67 71C65 73 63 75 60 77C57 78 53 79 50 79Z" />
          )}
          {stage === 1 && <Path d="M57 20V78H50V27H50L36 37V29L50 20H57Z" />}
          {stage === 2 && (
            <Path d="M31 78V73L50 52C52 49 54 47 56 45C57 44 58 42 59 40C60 39 60 37 60 35C60 33 60 31 59 30C58 28 56 27 55 26C53 26 51 25 49 25C47 25 45 26 43 26C41 27 40 29 39 30C38 32 38 34 38 36H31C31 33 32 30 34 27C35 25 37 23 40 21C43 20 46 19 49 19C53 19 56 20 58 21C61 23 63 25 64 27C66 29 67 32 67 35C67 37 66 39 66 41C65 43 63 46 62 48C60 51 57 54 54 57L41 71V72H68V78H31Z" />
          )}
          {stage === 2 && (
            <Path d="M7 75C16 90 32 100 50 100C78 100 100 78 100 50C100 22 78 0 50 0V10C72 10 90 28 90 50C90 72 72 90 50 90C35 90 23 82 16 70L7 75" />
          )}
          {stage === 1 && (
            <Path d="M93 75C98 68 100 59 100 50C100 22 78 0 50 0V10C72 10 90 28 90 50C90 57 88 64 85 70L93 75Z" />
          )}
        </Svg>
      </View>
    );
  }
}
