import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class ListCheck extends React.Component<IconProps> {
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
            d="M161 65L171 53L147 33L137 45L69 126L33 91L22 80L0 102L11 113L59 161L71 173L82 160L161 65ZM161 223L171 211L147 191L137 203L69 284L33 249L22 238L0 260L11 271L59 319L71 331L82 318L161 223ZM196 86V118H212H496H512V86H496H212H196ZM196 244V276H212H496H512V244H496H212H196ZM164 402V434H180H496H512V402H496H180H164ZM101 418C101 410 98 402 92 396C86 390 78 387 70 387C61 387 53 390 47 396C41 402 38 410 38 418C38 426 41 435 47 440C53 446 61 450 70 450C78 450 86 446 92 440C98 435 101 426 101 418Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
