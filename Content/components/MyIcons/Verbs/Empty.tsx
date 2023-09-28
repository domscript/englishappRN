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

const paths = [''];

paths[1] = paths[0];

export const Empty = ({positive, frame}: VerbProps) => {
  // const stages = 8;
  // const stage = frame % stages;
  const stage = frame % paths.length;

  const some_extra_color = Colors.red40;

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
        <Circle id="background" opacity="0.5" cx="300" cy="300" r="300" />
        <Path d={paths[stage]} fill="black" />

        {stage === 7 && <Path id="7" d="" fill="black" />}
        {stage === 6 && <Path id="6" d="" fill="black" />}
        {stage === 5 && <Path id="5" d="" fill="black" />}
        {stage === 4 && <Path id="4" d="" fill="black" />}
        {stage === 3 && <Path id="3" d="" fill="black" />}
        {stage === 2 && <Path id="2" d="" fill="black" />}
        {stage === 1 && <Path id="1" d="" fill="black" />}
        {stage === 0 && <Path id="1" d="" fill="black" />}
      </Svg>
    </View>
  );
};
