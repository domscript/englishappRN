import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class ArrowRight extends React.Component<IconProps> {
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
            d="M509 248C511 250 512 252 512 254C512 256 511 258 509 260L290 444C286 447 280 447 277 444C273 440 273 435 277 432L480 262H9C4 262 0 258 0 254C0 250 4 246 9 246H480L277 76C273 73 273 68 277 64C280 61 286 61 290 64L509 248L509 248Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
