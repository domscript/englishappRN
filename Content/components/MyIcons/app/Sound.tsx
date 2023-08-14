import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Sound extends React.Component<IconProps> {
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
            d="M273 18C270 18 267 20 264 22L135 162C133 164 132 165 130 165H53C32 165 15 185 15 210V302C15 327 32 347 53 347H130C132 347 133 348 135 350L264 490C267 492 270 494 273 494C280 494 286 487 286 478V34C286 25 280 18 273 18ZM254 9C260 3 266 0 273 0C289 0 301 15 301 34V478C301 497 289 512 273 512C266 512 260 509 254 503L127 366H53C24 366 0 337 0 302V210C0 175 24 146 53 146H127L254 9ZM375 170C378 166 382 165 386 168C407 188 422 220 422 256C422 292 407 324 386 344C382 347 378 346 375 342C373 338 373 332 377 329C395 312 407 286 407 256C407 226 395 199 377 183C373 180 373 174 375 170ZM441 82C484 122 512 185 512 256C512 327 484 390 441 430C438 433 433 432 431 428C428 424 429 419 432 416C472 379 497 321 497 256C497 191 472 133 432 96C429 93 428 88 431 84C433 80 438 79 441 82Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
