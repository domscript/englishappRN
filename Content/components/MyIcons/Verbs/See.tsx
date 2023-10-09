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

// const paths = [''];

// paths[1] = paths[0];

export const See = ({positive, frame}: VerbProps) => {
  const stages = 8;
  const stage = frame % stages;
  // const stage = frame % paths.length;

  const some_extra_color = Colors.red40;

  const movement = stage === 2 ? 4 : stage === 6 ? -4 : 0;

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
        {/* <Path d={paths[stage]} fill="black" /> */}

        {/* <Path
          id="stand"
          d="M361 296C362 316 362 336 363 355C363 361 365 366 366 372C366 376 367 379 367 383C367 384 366 386 365 387C360 393 354 398 348 402C346 403 345 404 343 405C343 405 342 405 342 405C343 401 343 398 345 395C347 390 348 386 346 381C343 385 348 392 340 395C340 390 340 385 341 379C341 379 341 378 341 377C340 373 342 369 344 366C346 363 348 360 350 358C353 353 351 349 351 344C350 336 349 327 348 319C347 313 346 307 345 302C345 309 345 317 345 326C342 326 339 327 336 328C335 328 334 329 334 330C335 343 330 355 330 368C331 381 330 394 329 406C329 420 328 434 328 447C327 457 327 467 326 477C326 488 325 499 325 510C324 519 324 528 323 537C323 540 324 543 324 545C325 554 332 558 337 564C338 565 339 565 339 566C343 572 340 574 336 575C332 575 329 575 325 575C320 574 317 571 314 566C312 564 310 562 309 560C308 558 308 555 308 553C308 551 309 548 310 546C315 539 312 531 312 524C313 502 312 481 312 459C312 448 312 437 312 426C311 414 310 403 309 391C309 382 308 373 307 363C302 363 298 363 292 363C292 368 291 373 291 378C290 390 289 402 289 414C288 424 287 433 287 443C287 460 286 476 286 493C286 509 286 524 285 540C285 542 285 544 288 544C288 545 288 545 288 546C289 549 290 551 290 554C290 556 290 558 288 560C285 563 283 567 281 571C278 574 275 575 271 575C267 575 263 574 259 574C256 573 256 571 258 569C259 566 261 563 264 561C272 555 275 547 275 538C275 528 274 518 274 508C273 496 273 483 272 471C272 456 271 442 271 428C271 419 270 411 270 403C270 394 270 386 269 377C269 370 269 362 269 354C269 353 268 352 268 352C264 345 263 338 265 331C265 331 265 330 265 329C262 329 260 328 258 328C257 331 257 334 257 338C256 343 255 347 255 352C254 355 255 358 258 361C259 362 259 364 260 365C264 370 266 376 266 382C265 385 266 389 266 392C266 394 266 395 266 397C259 393 263 387 260 381C259 388 259 393 262 398C264 401 265 403 263 406C254 401 246 395 241 387C239 385 239 381 240 378C243 360 243 343 243 325C243 313 244 302 245 291C245 282 247 273 248 264C248 261 248 259 244 259C244 259 243 258 241 258C245 244 249 229 252 215C253 212 255 210 258 208C268 204 278 199 288 195C291 194 291 191 291 187C269 183 262 164 252 148C244 149 242 148 239 140C236 133 233 126 235 118C236 112 238 111 244 113C244 111 243 109 243 107C243 103 242 98 242 94C242 89 242 85 243 80C244 73 245 66 246 59C248 49 254 42 262 37C272 31 283 27 295 25C300 24 306 26 312 27C322 30 330 34 338 41C345 47 349 56 350 66C351 77 351 88 351 100C351 103 350 107 350 111C351 109 353 108 354 107C357 105 363 107 363 111C364 123 361 134 354 144C350 149 347 149 343 147C337 157 332 167 326 177C323 182 317 185 311 186C310 187 309 188 309 188C309 190 309 193 311 194C324 197 334 205 346 210C348 210 349 213 350 215C354 228 357 241 362 253C363 257 362 258 359 258C358 258 357 258 357 259C358 271 360 283 361 296Z"
          fill="black"
        /> */}
        <Path
          id="stand"
          d="M190 579C205 573 219 566 234 560C246 554 259 548 271 543C281 539 281 531 280 522C280 522 280 521 280 520C226 509 203 468 179 426C176 419 172 413 168 406C144 410 138 406 128 382C128 381 127 379 126 378C119 359 111 340 117 319C122 301 126 298 144 305C144 303 144 301 143 299C143 294 142 290 142 286C141 283 141 279 140 275C139 266 138 257 138 248C137 235 138 221 140 208C143 188 147 167 151 147C156 119 174 99 197 84C226 65 258 53 292 49C308 46 325 51 342 54C370 61 396 73 416 94C437 113 449 139 452 166C455 194 456 222 456 251C456 256 456 261 457 266C457 272 455 279 454 287C453 290 453 294 452 297C454 296 455 295 456 294C459 292 461 290 464 288C473 281 489 286 490 297C492 333 484 366 463 395C454 408 444 408 432 403C427 411 422 420 417 428C406 449 395 469 382 489C373 504 358 513 340 517C337 518 332 521 332 523C332 524 332 525 333 527C333 532 333 537 340 539C364 544 385 556 405 567C410 570 415 572 420 575C383 591 343 600 300 600C261 600 224 593 190 579Z"
          fill="black"
        />

        <G id="eye" scale={2.8} translateX={-530} translateY={-20}>
          <Path
            id="Ellipse 42"
            d="M337.5 118C337.5 123.981 335.736 129.375 332.909 133.262C330.082 137.15 326.219 139.5 322 139.5C317.781 139.5 313.918 137.15 311.091 133.262C308.264 129.375 306.5 123.981 306.5 118C306.5 112.019 308.264 106.625 311.091 102.738C313.918 98.8503 317.781 96.5 322 96.5C326.219 96.5 330.082 98.8503 332.909 102.738C335.736 106.625 337.5 112.019 337.5 118Z"
            fill="#D9D9D9"
            stroke="#9C9C9C"
          />

          <G id="Group 2" translateX={movement}>
            <Path
              id="Ellipse 8"
              opacity="0.4"
              d="M312 117.65C312 121.15 314.208 128.65 322 128.65C329 128.65 332.5 123.15 332.5 118.15C332.5 113.15 327.635 108.15 322.25 108.15C315.797 108.15 312 114.15 312 117.65Z"
              fill="url(#paint0_radial_638_357)"
            />
            <Path
              id="Ellipse 10"
              d="M331.5 117.473C331.5 121.4 329 127.4 322 127.4C316.5 127.4 312.5 123.4 312.5 117.473C312.5 113.4 316 108.9 321.799 108.9C327.598 108.9 331.5 112.9 331.5 117.473Z"
              fill="url(#paint1_radial_638_357)"
            />
            <Path
              id="Ellipse 11"
              d="M328 117.4C328 120.714 324.538 124.4 321.5 124.4C318.462 124.4 315 120.714 315 117.4C315 114.086 318.462 110.9 321.5 110.9C324.538 110.9 328 114.086 328 117.4Z"
              fill="url(#paint2_radial_638_357)"
            />
            <Path
              id="Ellipse 12"
              d="M322 112.9C322 114.4 321 115.9 319 115.9C317 115.9 316 114.4 316 112.9C316 111.4 317.5 110.4 319 110.4C320.5 110.4 322 111.4 322 112.9Z"
              fill="url(#paint3_radial_638_357)"
            />
          </G>
        </G>

        <G id="eye_2" scale={2.8} translateX={-530} translateY={-20}>
          <Path
            id="Ellipse 43"
            d="M286.5 118C286.5 123.981 284.736 129.375 281.909 133.262C279.082 137.15 275.219 139.5 271 139.5C266.781 139.5 262.918 137.15 260.091 133.262C257.264 129.375 255.5 123.981 255.5 118C255.5 112.019 257.264 106.625 260.091 102.738C262.918 98.8503 266.781 96.5 271 96.5C275.219 96.5 279.082 98.8503 281.909 102.738C284.736 106.625 286.5 112.019 286.5 118Z"
            fill="#D9D9D9"
            stroke="#9C9C9C"
          />
          <G id="Group 2" translateX={movement}>
            <Path
              id="Ellipse 8_2"
              opacity="0.4"
              d="M282 117.65C282 121.15 279.792 128.65 272 128.65C265 128.65 261.5 123.15 261.5 118.15C261.5 113.15 266.365 108.15 271.75 108.15C278.203 108.15 282 114.15 282 117.65Z"
              fill="url(#paint4_radial_638_357)"
            />
            <Path
              id="Ellipse 10_2"
              d="M281.5 117.473C281.5 121.4 279 127.4 272 127.4C266.5 127.4 262.5 123.4 262.5 117.473C262.5 113.4 266 108.9 271.799 108.9C277.598 108.9 281.5 112.9 281.5 117.473Z"
              fill="url(#paint5_radial_638_357)"
            />
            <Path
              id="Ellipse 11_2"
              d="M278 117.4C278 120.714 274.538 124.4 271.5 124.4C268.462 124.4 265 120.714 265 117.4C265 114.086 268.462 110.9 271.5 110.9C274.538 110.9 278 114.086 278 117.4Z"
              fill="url(#paint6_radial_638_357)"
            />
            <Path
              id="Ellipse 12_2"
              d="M272 112.9C272 114.4 271 115.9 269 115.9C267 115.9 266 114.4 266 112.9C266 111.4 267.5 110.4 269 110.4C270.5 110.4 272 111.4 272 112.9Z"
              fill="url(#paint7_radial_638_357)"
            />
          </G>
        </G>

        <Defs>
          <RadialGradient
            id="paint0_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(322 118.15) rotate(90) scale(10.5 10.8528)">
            <Stop offset="0.880403" stopColor="#AB6C04" />
            <Stop offset="0.931303" stopColor="#AB6C04" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient
            id="paint1_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(325 123.4) rotate(-127.875) scale(11.4018 28.1902)">
            <Stop offset="0.125" stopColor="#FFD73B" />
            <Stop offset="0.244792" stopColor="#AC6D05" stopOpacity="0.88" />
            <Stop offset="0.529815" stopColor="#231809" />
          </RadialGradient>
          <RadialGradient
            id="paint2_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(321.5 117.65) rotate(90) scale(6.25 6)">
            <Stop offset="0.942708" stopColor="#201709" />
            <Stop offset="1" stopColor="#201709" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient
            id="paint3_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(319 112.9) rotate(90) scale(2.5)">
            <Stop offset="0.479167" stopColor="#FFF7DB" />
            <Stop offset="0.776042" stopColor="#FDDF87" />
            <Stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient
            id="paint4_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(272 118.15) rotate(90) scale(10.5 10.8528)">
            <Stop offset="0.880403" stopColor="#AB6C04" />
            <Stop offset="0.931303" stopColor="#AB6C04" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient
            id="paint5_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(275 123.4) rotate(-127.875) scale(11.4018 28.1902)">
            <Stop offset="0.125" stopColor="#FFD73B" />
            <Stop offset="0.260417" stopColor="#AC6D05" stopOpacity="0.88" />
            <Stop offset="0.529815" stopColor="#231809" />
          </RadialGradient>
          <RadialGradient
            id="paint6_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(271.5 117.65) rotate(90) scale(6.25 6)">
            <Stop offset="0.942708" stopColor="#201709" />
            <Stop offset="1" stopColor="#201709" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient
            id="paint7_radial_638_357"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(269 112.9) rotate(90) scale(2.5)">
            <Stop offset="0.479167" stopColor="#FFF7DB" />
            <Stop offset="0.776042" stopColor="#FDDF87" />
            <Stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  );
};
