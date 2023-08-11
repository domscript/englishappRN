import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Star extends React.Component<IconProps> {
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
            d="M389 494C397 498 406 497 413 492C421 487 424 478 423 469L397 319L505 212C511 205 514 196 511 188C508 180 501 173 492 172L343 150L277 13C273 5 265 0 256 0C247 0 239 5 235 13L168 150L20 172C11 173 4 180 1 188C-2 196 1 206 7 212L115 319L89 469C88 478 91 487 99 492C106 497 115 498 123 494L256 423L389 494H389Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
