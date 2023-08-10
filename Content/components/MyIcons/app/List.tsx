import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

import {IconProps} from './index';

export class List extends React.Component<IconProps> {
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
            id="rocket"
            d="M70 70C61 70 53 73 47 79C41 85 38 93 38 102C38 110 41 118 47 124C53 130 61 133 70 133C78 133 86 130 92 124C98 118 101 110 101 102C101 93 98 85 92 79C86 73 78 70 70 70ZM165 86V118H512V86H165ZM165 244V276H512V244H165ZM165 403V434H512V403H165ZM101 260C101 252 98 244 92 238C86 232 78 228 70 228C61 228 53 232 47 238C41 244 38 252 38 260C38 268 41 276 47 282C53 288 61 292 70 292C78 292 86 288 92 282C98 276 101 268 101 260ZM70 387C61 387 53 390 47 396C41 402 38 410 38 418C38 427 41 435 47 441C53 447 61 450 70 450C78 450 86 447 92 441C98 435 101 427 101 418C101 410 98 402 92 396C86 390 78 387 70 387Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
