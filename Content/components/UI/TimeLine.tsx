import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import Svg, {Circle, Line, Path, Text, G, Ellipse} from 'react-native-svg';

import {BoyFace} from '../MyIcons/SVG/BoyFace';
import {BoyBody} from '../MyIcons/SVG/BoyBody';
import {ManFace} from '../MyIcons/SVG/ManFace';
import {ManBody} from '../MyIcons/SVG/ManBody';
import {OldFace} from '../MyIcons/SVG/OldFace';
import {OldBody} from '../MyIcons/SVG/OldBody';
import {VerbForms} from '../MyIcons/SVG/VerbForms';
import {Clock} from '../MyIcons/SVG/Clock';

const TimeLine = ({tense}: {tense: number}) => {
  const {height, width} = useWindowDimensions();

  const [img, setImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImg(prev => !prev);
    }, 1000);
  }, [tense]);

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Svg width="100%" height={44}>
        <Line
          x1="0"
          y1="39"
          x2={width - 5}
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Line
          x1={width - 15}
          y1="43"
          x2={width - 5}
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Line
          x1={width - 15}
          y1="33"
          x2={width - 5}
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Circle cx={width * 0.5} cy="39" r="5" fill="#000"></Circle>

        <G translateX={width * 0.5 - 27} translateY={10}>
          <VerbForms tense={tense} />
        </G>

        <G
          translateX={
            [0, 3, 6].includes(tense) ? width * 0.5 - 5 : width * 0.06 - 5
          }
          translateY={7}>
          {img ? <BoyBody /> : <BoyFace />}
        </G>

        <G
          translateX={
            [0, 3, 6].includes(tense)
              ? width * 0.75 - 6
              : [2, 5, 8].includes(tense)
              ? width * 0.15 - 6
              : width * 0.5 - 6
          }>
          {img ? <ManBody /> : <ManFace />}
        </G>

        <G
          translateX={
            [2, 5, 8].includes(tense) ? width * 0.5 - 6 : width * 0.9 - 6
          }
          translateY={1}>
          {img ? <OldBody /> : <OldFace />}
        </G>

        <Text
          x={
            [0, 3, 6].includes(tense)
              ? width * 0.75
              : [2, 5, 8].includes(tense)
              ? width * 0.15
              : width * 0.5
          }
          y="32"
          fontSize="12"
          fill="#43D2FF"
          textAnchor="start"
          alignmentBaseline="middle">
          now
        </Text>

        <G translateX={width - 35} translateY={3}>
          <Clock />
        </G>
      </Svg>
    </View>
  );
};

export default TimeLine;
