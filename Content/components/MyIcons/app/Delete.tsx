import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Delete extends React.Component<IconProps> {
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
            d="M498 136C498 112 479 93 455 93H182C171 93 160 98 152 106L18 239C16 242 14 245 14 249C14 253 16 256 18 259L152 392C160 400 171 405 182 405H455C479 405 498 386 498 362V136ZM8 229L142 96C153 85 167 79 182 79H455C486 79 512 104 512 136V362C512 394 486 419 455 419H182C167 419 153 413 142 402L8 269C3 264 0 257 0 249C0 241 3 234 8 229ZM382 180C385 183 385 188 382 190L323 249L382 308C385 310 385 315 382 318C379 320 375 320 372 318L313 259L254 318C251 320 247 320 244 318C241 315 241 310 244 308L303 249L244 190C241 188 241 183 244 180C247 178 251 178 254 180L313 239L372 180C375 178 379 178 382 180H382Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}
