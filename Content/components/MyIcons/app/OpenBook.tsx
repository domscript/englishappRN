import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class OpenBook extends React.Component<IconProps> {
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
            d="M263 393L438 357C444 356 448 351 448 345V73C448 65 441 59 433 60L263 83V393ZM250 83L79 60C71 59 64 65 64 73V345C64 351 68 356 74 357L250 393V83ZM432 47C447 45 461 57 461 73V345C461 357 452 368 440 370L266 405C259 406 253 406 246 405L72 370C60 367 51 357 51 345V73C51 57 65 45 80 47L256 71L432 47ZM0 98C0 84 12 73 26 73V85C19 85 13 91 13 98V381C13 387 17 392 23 393L248 438C253 439 259 439 264 438L489 393C495 392 499 387 499 381V98C499 91 493 85 486 85V73C500 73 512 84 512 98V381C512 393 503 403 491 406L266 451C259 452 253 452 246 451L21 406C9 403 0 393 0 381V98Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
