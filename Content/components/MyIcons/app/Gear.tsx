import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconProps} from './index';

export class Gear extends React.Component<IconProps> {
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
            d="M211 28C213 21 220 16 227 16H285C292 16 299 21 300 28L313 86C314 88 316 90 318 91C336 98 353 108 367 120C369 121 372 122 375 121L430 104C438 101 445 104 449 111L478 161C482 167 480 176 475 181L432 221C430 222 429 225 429 228C431 237 432 246 432 256C432 266 431 275 429 285C429 287 430 290 432 292L475 332C480 337 482 345 478 351L449 401C445 407 438 410 430 408L375 391C372 390 369 391 367 392C353 404 336 414 318 421C316 422 314 424 313 426L300 483C299 491 292 496 285 496H227C220 496 213 491 211 483L199 426C198 424 196 422 194 421C176 414 159 404 144 392C142 391 140 390 137 391L81 408C74 410 66 407 63 401L34 351C30 344 31 336 37 331L80 291C82 290 83 287 82 284C81 275 80 266 80 256C80 246 81 237 82 228C83 225 82 222 80 220L37 181C31 176 30 167 34 161L63 111C66 104 74 101 81 104L137 121C140 122 142 121 144 120C159 108 176 98 194 91C196 90 198 88 199 86L211 28ZM227 0C212 0 199 10 196 25L184 78C167 85 152 94 138 105L86 88C72 84 56 90 49 103L20 153C12 166 15 182 26 192L66 229C65 238 64 247 64 256C64 265 65 274 66 283L26 319C15 330 12 346 20 359L49 409C56 422 72 428 86 424L138 407C152 418 167 427 184 434L196 487C199 502 212 512 227 512H284C299 512 312 502 316 487L328 434C344 427 360 418 374 407L426 424C440 428 455 422 463 409L492 359C499 346 497 330 486 319L446 283C447 274 448 265 448 256C448 247 447 238 446 229L486 192C497 182 499 166 492 153L463 103C455 90 440 84 426 88L374 105C360 94 344 85 328 78L316 25C312 10 299 0 285 0H227ZM192 256C192 239 199 223 211 211C223 199 239 192 256 192C273 192 289 199 301 211C313 223 320 239 320 256C320 273 313 289 301 301C289 313 273 320 256 320C239 320 223 313 211 301C199 289 192 273 192 256ZM336 256C336 235 327 214 312 199C297 184 277 176 256 176C235 176 214 184 199 199C184 214 176 235 176 256C176 277 184 298 199 313C214 328 235 336 256 336C277 336 297 328 312 313C327 298 336 277 336 256Z"
            fill={color}
          />
        </Svg>
      </View>
    );
  }
}