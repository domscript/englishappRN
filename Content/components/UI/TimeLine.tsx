import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Path, Text, G, Ellipse} from 'react-native-svg';

import {BoyFace} from '../MyIcons/SVG/BoyFace';
import {BoyBody} from '../MyIcons/SVG/BoyBody';
import {ManFace} from '../MyIcons/SVG/ManFace';
import {ManBody} from '../MyIcons/SVG/ManBody';
import {OldFace} from '../MyIcons/SVG/OldFace';
import {OldBody} from '../MyIcons/SVG/OldBody';
import {VerbForms} from '../MyIcons/SVG/VerbForms';
import {Clock} from '../MyIcons/SVG/Clock';

import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const TimeLine = ({tense}: {tense: number}) => {
  const [state, setState] = useState(new Date());
  const [img, setImg] = useState(true);

  setTimeout(() => {
    setState(new Date());
  }, 1000);

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
          x2="99%"
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Line
          x1="97%"
          y1="43"
          x2="99%"
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Line
          x1="97%"
          y1="33"
          x2="99%"
          y2="39"
          stroke="black"
          strokeWidth="2"
          fill="gray"
        />
        <Circle cx={screenWidth * 0.5} cy="43" r="10 " fill="#3332"></Circle>

        <G translateX={screenWidth * 0.5 - 27} translateY={10}>
          <VerbForms tense={tense} />
        </G>

        <G
          translateX={
            [0, 3, 6].includes(tense)
              ? screenWidth * 0.5 - 5
              : screenWidth * 0.06 - 5
          }
          translateY={7}>
          {img ? <BoyBody /> : <BoyFace />}
        </G>

        <G
          translateX={
            [0, 3, 6].includes(tense)
              ? screenWidth * 0.75 - 6
              : [2, 5, 8].includes(tense)
              ? screenWidth * 0.15 - 6
              : screenWidth * 0.5 - 6
          }>
          {img ? <ManBody /> : <ManFace />}
        </G>

        <G
          translateX={
            [2, 5, 8].includes(tense)
              ? screenWidth * 0.5 - 6
              : screenWidth * 0.9 - 6
          }
          translateY={1}>
          {img ? <OldBody /> : <OldFace />}
        </G>

        <Text
          x={
            [0, 3, 6].includes(tense)
              ? '75%'
              : [2, 5, 8].includes(tense)
              ? '15%'
              : '50%'
          }
          y="32"
          fontSize="12"
          fill="#43D2FF"
          textAnchor="start"
          alignmentBaseline="middle">
          now
        </Text>

        <G translateX={screenWidth * 0.92} translateY={3}>
          <Clock date={state} />
        </G>
      </Svg>
    </View>
  );
};

export default TimeLine;
