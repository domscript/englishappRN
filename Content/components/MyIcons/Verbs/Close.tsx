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

export const Close = ({positive, stage}: VerbProps) => {
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
        <Path
          id="person"
          d="M296 291C295 277 289 255 287 242C285 236 285 228 285 224C285 220 287 217 291 216C302 212 313 208 324 204C327 203 329 202 329 199C329 196 329 194 330 191C329 191 328 191 327 191C320 194 314 192 307 188C295 181 287 170 280 158C270 138 262 116 260 93C259 82 259 71 263 60C265 53 271 48 277 44C288 35 301 28 316 29C345 31 359 42 366 69C369 79 370 91 371 101C371 102 372 103 372 104C374 102 375 101 377 100C382 98 387 100 387 106C387 115 387 124 383 132C381 136 378 139 375 142C372 144 369 145 366 142C360 155 353 167 345 178C344 179 344 181 344 182C345 185 345 187 346 190C349 202 349 202 361 207C366 209 370 211 375 213C381 215 383 220 382 227C379 237 376 248 373 258C371 266 370 275 370 283C370 298 370 312 370 327C370 328 370 328 370 330C368 330 365 330 363 331C360 344 358 357 357 370C357 390 355 411 354 431C354 443 355 455 356 468C358 487 359 507 361 526C362 533 362 540 363 547C363 548 364 549 365 550C365 550 366 551 366 551C365 557 370 563 364 568C362 569 361 571 360 572C355 579 345 582 337 578C334 577 333 574 335 572C337 569 339 567 341 566C351 559 354 550 352 538C347 506 343 474 338 441C337 432 337 422 337 412C336 396 335 381 334 365C334 362 333 361 330 361C326 361 322 361 317 361C316 367 315 373 314 380C311 397 307 414 305 431C303 440 303 450 303 459C303 487 303 515 303 543C303 549 304 556 305 563C305 565 304 567 302 568C299 568 296 569 292 570C288 571 284 571 280 573C275 575 269 575 264 574C263 574 261 572 261 572C261 571 262 569 263 568C266 567 269 565 273 564C276 563 280 561 284 560C288 558 289 555 290 551C294 539 291 526 291 514C290 489 288 465 288 440C288 420 291 400 292 379C292 372 290 343 293 337C293 328 296 291 296 291Z"
          fill="black"
        />
        {stage === 1 && (
          <Path
            id="hand-5"
            d="M239 246C234 247 208 224 172 210C170 199 173 193 204 211L242 230L264 223L262 217C276 213 320 208 320 208L317 231L239 246Z"
            fill="black"
          />
        )}
        {stage === 2 && (
          <Path
            id="hand-4"
            d="M229 246C222 248 212 224 181 222C179 211 174 199 205 214L244 238L265 231L262 224C306 204 320 207 320 207L317 230L229 246Z"
            fill="black"
          />
        )}
        {stage === 3 && (
          <Path
            id="hand-3"
            d="M229 246C222 248 215 221 184 218C181 208 197 190 205 214L244 238L265 231L262 224C306 204 320 207 320 207L317 230L229 246Z"
            fill="black"
          />
        )}
        {stage === 4 && (
          <Path
            id="hand-2"
            d="M229 246C222 248 238 233 206 231C204 220 221 206 229 231L244 238L265 231L262 224C306 204 320 207 320 207L317 230L229 246Z"
            fill="black"
          />
        )}

        {stage === 1 && (
          <Path
            id="cover-b-5"
            d="M169 138L192 115L209 119L213 196L192 237L174 234L169 138Z"
            fill="#747474"
          />
        )}
        {stage === 1 && (
          <Path
            id="cover-b-5_2"
            d="M200 196L194 124L209 119L213 196L192 237L174 234L200 196Z"
            fill="#595959"
          />
        )}
        {stage === 1 && (
          <Path
            id="cover-b-5_3"
            d="M200 196L194 124L209 119L213 196H200Z"
            fill="#6A6A6A"
          />
        )}
        {stage === 2 && (
          <Path
            id="cover-b-4"
            d="M226 138L214 204L175 232L226 138Z"
            fill="#747474"
          />
        )}
        {stage === 2 && (
          <Path
            id="cover-b-4_2"
            d="M214 204L225 208L193 241L175 232L214 204Z"
            fill="#595959"
          />
        )}
        {stage === 2 && (
          <Path
            id="cover-b-4_3"
            d="M214 204L226 138H242L225 208L214 204Z"
            fill="#6A6A6A"
          />
        )}
        {stage === 3 && (
          <Path
            id="cover-b-3"
            d="M259 179L220 230L171 236L248 179H259Z"
            fill="#747474"
          />
        )}
        {stage === 3 && (
          <Path
            id="cover-b-3_2"
            d="M220 230L231 239L183 249L171 236L220 230Z"
            fill="#595959"
          />
        )}
        {stage === 3 && (
          <Path
            id="cover-b-3_3"
            d="M220 230L259 179H278L230 239L220 230Z"
            fill="#6A6A6A"
          />
        )}
        {stage === 4 && (
          <Path
            id="cover-b-2"
            d="M282 205L241 239L217 239L273 205H282Z"
            fill="#747474"
          />
        )}
        {stage === 4 && (
          <Path
            id="cover-b-2_2"
            d="M244 238L241 247L194 255L184 240L244 238Z"
            fill="#595959"
          />
        )}
        {stage === 4 && (
          <Path
            id="cover-b-2_3"
            d="M231 247L282 205L300 210L251 253L231 247Z"
            fill="#6A6A6A"
          />
        )}

        {stage === 1 && (
          <Path
            id="light"
            opacity="0.4"
            d="M153 0H354L309 260H212L153 0Z"
            fill="url(#paint0_linear_248_339)"
          />
        )}

        <Path
          id="box"
          d="M201 245L289 228L316 240V341L292 364L215 356L201 245Z"
          fill="#989898"
        />
        <Path
          id="box_2"
          d="M201 245L289 228L292 364L215 356L201 245Z"
          fill="#C6C6C6"
        />

        {stage === 1 && (
          <Path
            id="cover-f-5"
            d="M169 138L192 115L209 119L192 142V236L174 234L169 138Z"
            fill="#A9A9A9"
          />
        )}
        {stage === 1 && (
          <Path
            id="cover-f-5_2"
            d="M169 138L192 115L209 119L192 142L169 138Z"
            fill="#8B8B8B"
          />
        )}
        {stage === 2 && (
          <Path
            id="cover-f-4"
            d="M200 145L227 130L242 138L218 155L193 241L175 232L200 145Z"
            fill="#A9A9A9"
          />
        )}
        {stage === 2 && (
          <Path
            id="cover-f-4_2"
            d="M200 145L227 130L242 138L218 155L200 145Z"
            fill="#8B8B8B"
          />
        )}
        {stage === 3 && (
          <Path
            id="cover-f-3"
            d="M236 163L248 182L183 249L171 236L236 163Z"
            fill="#A9A9A9"
          />
        )}
        {stage === 3 && (
          <Path
            id="cover-f-3_2"
            d="M236 163H268L278 179L248 182L236 163Z"
            fill="#8B8B8B"
          />
        )}
        {stage === 4 && (
          <Path
            id="cover-f-2"
            d="M264 186L273 205L194 255L184 240L264 186Z"
            fill="#A9A9A9"
          />
        )}
        {stage === 4 && (
          <Path
            id="cover-f-2_2"
            d="M264 186L295 193L300 210L273 205L264 186Z"
            fill="#8B8B8B"
          />
        )}
        {stage >= 5 && (
          <Path
            id="cover-f-1"
            d="M291 221V240L200 259L198 240L291 221Z"
            fill="#A9A9A9"
          />
        )}
        {stage >= 5 && (
          <Path
            id="cover-f-1_2"
            d="M291 221L319 227V246L291 240V221Z"
            fill="#8B8B8B"
          />
        )}

        <Path
          id="hand-f"
          d="M251 358L268 349L270 349C270 349 269 349 269 350C268 351 268 351 267 352C266 354 265 355 263 357C263 357 263 358 262 359C262 360 262 360 262 361C263 360 263 360 263 360C264 360 265 360 266 359C272 355 278 351 284 346C287 344 290 341 293 339C296 337 300 335 303 333C305 331 322 322 325 320L323 300C320 303 299 319 296 321C294 324 292 325 288 324C280 320 272 317 263 314C263 314 262 314 261 314C261 314 261 314 260 314C260 314 260 315 260 315C260 316 260 317 261 318C262 319 263 319 264 320C264 320 265 320 265 320C267 321 269 322 270 323C271 324 272 324 272 325L272 326C272 326 271 327 270 327C269 328 267 328 266 329C260 329 254 330 248 330C246 330 245 331 246 334L264 336L264 336L244 343C245 347 247 347 249 346C253 345 257 344 261 343C262 343 264 342 265 342L266 343C264 344 263 345 262 346C259 348 256 350 253 353C253 353 253 353 252 353C251 354 249 355 251 358Z"
          fill="black"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_248_339"
            x1="254"
            y1="260"
            x2="254"
            y2="-21"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#ADFF00" />
            <Stop offset="1" stopColor="#ADFF00" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};
