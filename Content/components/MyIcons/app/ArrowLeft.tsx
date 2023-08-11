import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class ArrowLeft extends React.Component<IconProps> {
  render() {
    const {color, size} = this.props;

    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
            height: size,
          },
        ]}>
        <Svg width="100%" height="100%" viewBox="0 0 512 512">
          <Path
            d="M3 248C1 250 0 252 0 254C0 256 1 258 3 260L222 444C226 447 232 447 235 444C239 440 239 435 235 432L32 262H503C508 262 512 258 512 254C512 250 508 246 503 246H32L235 76C239 73 239 68 235 64C232 61 226 61 222 64L3 248L3 248Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
