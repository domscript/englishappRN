import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class SoundOff extends React.Component<IconProps> {
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
            d="M273 18C270 18 267 20 265 22L135 162C133 164 132 165 130 165H53C32 165 15 185 15 210V302C15 327 32 347 53 347H130C132 347 134 348 135 350L265 490C267 492 270 494 273 494C281 494 286 487 286 478V34C286 25 281 18 273 18ZM255 9C260 3 266 0 273 0C289 0 301 15 301 34V478C301 497 289 512 273 512C266 512 260 509 255 503L127 366H53C24 366 0 337 0 302V210C0 175 24 146 53 146H127L255 9Z M332 167C335 164 341 164 345 167L421 243L496 167C500 164 506 164 509 167C513 171 513 177 509 180L434 256L509 332C513 335 513 341 509 345C506 348 500 348 496 345L421 269L345 345C341 348 335 348 332 345C328 341 328 335 332 332L408 256L332 180C328 177 328 171 332 167Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
