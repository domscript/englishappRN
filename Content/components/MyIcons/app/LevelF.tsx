import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class LevelF extends React.Component<IconProps> {
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
            d="M427 48C427 22 446 0 469 0C493 0 512 22 512 48V464C512 491 493 512 469 512C446 512 427 491 427 464V48ZM327 128C351 128 370 150 370 176V464C370 491 351 512 327 512C304 512 284 491 284 464V176C284 150 304 128 327 128ZM142 304C142 278 161 256 185 256C208 256 228 278 228 304V464C228 491 208 512 185 512C161 512 142 491 142 464V304ZM0 432C0 406 19 384 43 384C66 384 85 406 85 432V464C85 491 66 512 43 512C19 512 0 491 0 464V432Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
