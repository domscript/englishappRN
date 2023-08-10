import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Test extends React.Component<IconProps> {
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
            d="M406 458L505 286C507 282 509 277 511 272C513 265 513 256 512 248C511 241 508 235 505 229L406 57C395 39 376 28 356 28H157C137 28 118 39 107 57L8 229C4 236 2 243 1 251C-1 263 2 276 8 286L107 458C118 476 137 487 157 487H356C376 487 395 476 406 458ZM490 237C493 242 495 247 496 252L493 273C492 275 491 277 490 278L391 450C384 463 370 471 356 471H157C143 471 129 463 122 450L22 278C19 272 17 265 17 258C17 254 17 251 18 247C19 244 20 240 22 237L122 65C129 53 143 45 157 45H356C370 45 384 53 391 65L490 237ZM361 198C364 194 364 189 361 186C358 183 353 183 350 186L223 312L163 252C160 249 155 249 152 252C149 255 149 260 152 264L218 329C221 333 226 333 229 329L361 198Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
