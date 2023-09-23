import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

export const Empty = ({positive, stage}: VerbProps) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill={
          positive < 3
            ? Colors.green50
            : positive > 5
            ? Colors.amber50
            : Colors.red50
        }>
        <G opacity="0.5">
          <Circle id="background" cx="300" cy="300" r="300" />
        </G>
        {stage === 8 && <Path id="walk-8" d="" fill="black" />}
        {stage === 7 && <Path id="walk-7" d="" fill="black" />}
        {stage === 6 && <Path id="walk-6" d="" fill="black" />}
        {stage === 5 && <Path id="walk-5" d="" fill="black" />}
        {stage === 4 && <Path id="walk-4" d="" fill="black" />}
        {stage === 3 && <Path id="walk-3" d="" fill="black" />}
        {stage === 2 && <Path id="walk-2" d="" fill="black" />}
        {stage === 1 && <Path id="walk-1" d="" fill="black" />}
      </Svg>
    </View>
  );
};
