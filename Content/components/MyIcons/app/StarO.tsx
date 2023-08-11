import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class StarO extends React.Component<IconProps> {
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
            d="M182 157L249 20C250 17 253 16 256 16C259 16 262 17 263 20L329 157C332 162 336 165 341 165L490 187C493 188 495 190 496 193C497 196 496 199 494 201L386 307C383 311 381 316 382 321L407 472C408 475 407 478 404 480C402 481 399 481 396 480L263 409C259 407 253 407 249 409L116 480C113 481 110 481 108 480C105 478 104 475 105 472L130 321C131 316 129 311 126 307L18 201C16 199 15 195 16 193C17 190 19 188 22 187L171 165C176 165 180 161 182 157ZM389 494C397 498 406 497 413 492C421 487 424 478 423 469L397 319L505 212C511 205 514 196 511 188C508 180 501 173 492 172L343 150L277 13C273 5 265 0 256 0C247 0 239 5 235 13L168 150L20 172C11 173 4 180 1 188C-2 196 1 206 7 212L115 319L89 469C88 478 91 487 99 492C106 497 115 498 123 494L256 423L389 494H389Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
