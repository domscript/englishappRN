import Colors from '../../constants/Colors';

import Svg, {Path, Rect} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

interface SvgExampleProps {
  stage: 1 | 2 | 3;
}

export default class SvgExample extends React.Component<SvgExampleProps> {
  render() {
    const stage = this.props.stage;

    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 360 100"
          fill={stage === 3 ? Colors.green70 : Colors.amber50}>
          <Rect x="97" y="45" width="38" height="10" />
          <Rect x="225" y="45" width="38" height="10" />
          <Path d="M50 100C78 100 100 78 100 50C100 22 78 0 50 0C22 0 0 22 0 50C0 78 22 100 50 100ZM50 90C28 90 10 72 10 50C10 28 28 10 50 10C72 10 90 28 90 50C90 72 72 90 50 90Z" />
          <Path d="M180 100C208 100 230 78 230 50C230 22 208 0 180 0C152 0 130 22 130 50C130 78 152 100 180 100ZM180 90C158 90 140 72 140 50C140 28 158 10 180 10C202 10 220 28 220 50C220 72 202 90 180 90Z" />
          <Path d="M310 100C338 100 360 78 360 50C360 22 338 0 310 0C282 0 260 22 260 50C260 78 282 100 310 100ZM310 90C288 90 270 72 270 50C270 28 288 10 310 10C332 10 350 28 350 50C350 72 332 90 310 90Z" />

          {stage >= 1 && (
            <Path d="M50 100C78 100 100 78 100 50C100 22 78 0 50 0C22 0 0 22 0 50C0 78 22 100 50 100ZM84 38L42 81C39 83 36 83 34 81L13 60C10 57 10 54 13 52C15 50 18 50 20 52L38 70L77 31C79 28 82 28 84 31H84C87 33 87 36 84 38Z" />
          )}
          {stage >= 2 && (
            <Path d="M180 100C208 100 230 78 230 50C230 22 208 0 180 0C152 0 130 22 130 50C130 78 152 100 180 100ZM214 38L172 81C169 83 166 83 164 81L143 60C140 57 140 54 143 52C145 50 148 50 150 52L168 70L207 31C209 28 212 28 214 31H214C217 33 217 36 214 38Z" />
          )}
          {stage === 3 && (
            <Path d="M310 100C338 100 360 78 360 50C360 22 338 0 310 0C282 0 260 22 260 50C260 78 282 100 310 100ZM344 38L302 81C299 83 296 83 294 81L273 60C270 57 270 54 273 52C275 50 278 50 280 52L298 70L337 30C339 28 342 28 344 31H344C347 33 347 36 344 38Z" />
          )}
        </Svg>
      </View>
    );
  }
}
