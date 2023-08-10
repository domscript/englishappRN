import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Youtube extends React.Component<IconProps> {
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
            d="M501 131C495 109 478 91 456 85C416 75 256 75 256 75C256 75 96 75 56 85C34 91 17 109 11 131C0 171 0 255 0 255C0 255 0 339 11 379C17 401 34 419 56 425C96 435 256 435 256 435C256 435 416 435 456 425C478 419 495 401 501 379C512 339 512 255 512 255C512 255 512 171 501 131"
            fill="#CD201F"
          />
          <Path d="M204 331L337 255L204 179V331Z" fill="white" />
        </Svg>
      </View>
    );
  }
}
