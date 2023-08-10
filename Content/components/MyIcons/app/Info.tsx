import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Info extends React.Component<IconProps> {
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
            d="M256 16C288 16 319 22 348 34C377 46 403 64 426 86C448 109 466 135 478 164C490 193 496 224 496 256C496 288 490 319 478 348C466 377 448 403 426 426C403 448 377 466 348 478C319 490 288 496 256 496C224 496 193 490 164 478C135 466 109 448 86 426C64 403 46 377 34 348C22 319 16 288 16 256C16 224 22 193 34 164C46 135 64 109 86 86C109 64 135 46 164 34C193 22 224 16 256 16ZM256 512C324 512 389 485 437 437C485 389 512 324 512 256C512 188 485 123 437 75C389 27 324 0 256 0C188 0 123 27 75 75C27 123 0 188 0 256C0 324 27 389 75 437C123 485 188 512 256 512ZM208 352C204 352 200 356 200 360C200 364 204 368 208 368H304C308 368 312 364 312 360C312 356 308 352 304 352H264V216C264 212 260 208 256 208H224C220 208 216 212 216 216C216 220 220 224 224 224H248V352H208ZM256 176C260 176 264 174 267 171C270 168 272 164 272 160C272 156 270 152 267 149C264 146 260 144 256 144C252 144 248 146 245 149C242 152 240 156 240 160C240 164 242 168 245 171C248 174 252 176 256 176Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
