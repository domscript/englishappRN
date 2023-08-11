import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Refresh extends React.Component<IconProps> {
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
            d="M13 219C7 219 3 214 4 209C15 150 47 94 98 54C210 -33 371 -13 458 98L494 146V46C494 41 498 37 503 37C508 37 512 41 512 46V174C512 179 508 183 503 183H375C370 183 366 179 366 174C366 169 370 165 375 165H485L443 110C362 6 213 -12 109 69C62 106 33 157 22 212C21 216 17 219 13 219H13ZM9 329H137C142 329 146 333 146 338C146 343 142 347 137 347H26L67 402C148 506 298 524 401 443C448 406 478 355 488 300C489 296 493 293 497 293C503 293 507 297 506 303C495 362 464 418 412 458C301 545 140 525 53 414L18 368V466C18 471 14 475 9 475C4 475 0 471 0 466V338C0 333 4 329 9 329Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
