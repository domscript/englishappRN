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

export default class Love extends React.Component<VerbProps> {
  render() {
    const {positive, stage} = this.props;

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
          {stage > 5 && (
            <Path
              d="M404 303C421 250 364 210 298 272C288 232 246 190 217 234C182 289 246 306 289 401C334 337 384 363 404 303Z"
              fill="#FFA9A9"
            />
          )}
          {stage > 3 && (
            <Path
              d="M501 250C535 146 422 64 289 188C270 109 185 24 128 113C57 223 184 258 271 448C360 319 461 371 501 250Z"
              fill="#FFA9A9"
            />
          )}
          {stage < 2 && (
            <Path
              d="M572 246C621 99 461 -15 275 159C248 47 130 -71 49 53C-51 207 129 256 250 523C375 342 516 415 572 246Z"
              fill="#FFA9A9"
            />
          )}

          <Path
            d="M294 200C284 195 278 185 275 177C273 173 272 168 270 163L270 163C270 162 269 160 269 159C268 157 268 155 267 153L267 153C267 152 267 151 267 150C266 150 266 150 265 150L265 150C264 150 263 150 262 150C261 150 260 150 259 149C258 147 258 147 257 146C256 140 255 135 255 129C255 125 256 121 259 117C261 114 263 114 267 117C267 117 267 117 267 117L267 117L267 117C267 117 268 117 268 117C268 117 268 116 268 115L268 115C268 113 269 111 269 110C270 98 274 87 279 76C279 75 280 74 280 73C281 72 282 71 282 69C287 60 294 54 304 51C313 49 322 48 330 48C341 48 350 52 358 59C361 61 364 64 367 67C373 73 375 80 376 87C378 98 376 109 373 119C372 124 370 129 368 133L368 133C368 135 367 137 366 139C366 140 366 140 366 140L366 140C367 140 367 140 367 140C367 140 367 140 367 140L367 140C368 139 369 139 369 139C371 138 374 138 376 140C377 142 378 144 377 146C376 151 374 155 372 159C371 160 371 160 370 161L370 161C370 162 370 162 369 163L391 156C391 158 390 159 390 160C387 161 385 162 383 162C381 163 380 164 378 166C383 166 386 165 390 163C390 162 390 162 391 161C391 161 391 161 391 161C391 160 392 160 392 160C393 159 394 159 394 158C396 157 398 156 401 157C401 157 400 158 400 159L400 159C400 161 399 162 398 164C396 170 394 175 390 180C388 183 386 184 383 184C381 185 379 185 377 185L377 185C376 185 375 186 374 186C375 187 376 187 376 188C377 188 377 188 377 188L379 190C389 196 400 203 410 209C413 211 414 214 415 217C416 219 415 222 412 223C411 224 408 225 406 225C405 225 395 226 394 226C393 227 390 228 386 228L386 228L386 228L386 228L386 228C384 229 383 229 382 230L383 235C377 236 371 237 365 238C359 238 353 239 348 240C343 270 344 300 345 331L334 333C334 333 334 334 334 334C334 334 334 335 334 335C335 340 334 345 333 351C332 352 332 354 332 355L332 355C332 364 332 373 333 382L333 382C333 397 333 412 333 427C333 450 333 474 333 498V498C333 510 334 521 334 533C334 533 334 533 334 534C334 536 333 538 335 539C336 540 336 541 336 541C335 545 337 547 339 550C339 550 340 550 340 550C340 550 340 550 340 550C341 552 342 553 344 554L344 554C344 555 345 556 346 556C346 557 346 557 347 557L347 557C348 558 349 560 350 561C352 564 351 567 348 568C342 569 337 569 332 567C330 566 329 565 328 563C326 561 324 559 323 556L323 556C322 555 321 554 321 553C319 551 320 548 321 546C321 545 321 545 321 545C321 544 322 543 322 541C321 539 322 539 324 539C324 538 324 537 324 536C324 534 324 532 324 530C323 517 322 505 322 492L322 492C321 489 321 486 321 483C321 478 321 473 320 469C320 457 319 446 318 434C318 428 317 422 316 416C316 413 315 411 315 408C315 404 314 400 314 396L314 396C313 387 311 378 310 369C310 368 310 367 310 367L310 367C310 366 310 366 310 366L293 367C293 367 293 368 293 369L293 369C293 371 292 373 292 375C291 380 291 385 290 390C288 404 286 418 285 432C284 438 283 444 283 450C283 452 283 455 283 458L283 460C281 482 280 505 278 527C278 530 278 532 278 535L278 535C278 536 278 537 277 538L280 539C280 539 280 539 280 540C280 540 280 540 280 540C280 540 280 541 280 542C280 542 280 542 280 542C280 543 281 544 281 545C283 549 283 552 279 555C278 557 277 559 275 561C275 562 275 562 274 563C272 566 269 568 265 568C262 568 258 568 255 568C251 567 250 563 252 560C253 559 254 558 255 557L255 557C256 556 257 556 258 555C260 553 262 550 264 548C265 546 266 544 266 541C266 541 266 540 267 539C268 538 268 536 268 534C268 533 268 533 268 533C268 522 268 512 268 502C269 479 269 456 269 433C269 415 270 397 270 378C271 372 271 366 271 359C271 357 271 354 270 352C269 350 268 347 268 344C268 342 268 340 268 337V337C268 336 268 335 268 334L261 332C261 332 261 331 261 330C261 329 261 328 262 327C264 311 265 295 265 280C266 268 265 257 263 245C263 245 263 245 262 244C262 244 262 243 262 243C262 241 261 240 259 239C250 235 241 232 232 228L232 228C230 227 228 226 225 225C225 225 224 225 223 224C223 224 223 224 222 224L224 221L225 218C223 218 221 217 220 216C207 211 197 207 199 196C210 189 228 181 240 175C248 171 254 169 253 168C242 168 235 164 233 159C232 157 231 154 231 153C230 147 229 142 230 136C230 135 230 134 230 132C230 132 230 131 230 131C233 131 234 132 235 134C236 135 236 136 236 136C237 137 237 138 237 139C239 140 245 145 248 147L248 147L248 147C246 145 245 143 243 142C242 141 241 140 240 139L240 139C240 138 239 138 239 138C239 137 239 136 239 134C239 134 240 134 240 134L240 134L240 134C245 138 250 142 256 147L256 147C257 148 257 148 258 149C260 154 262 159 263 164C265 166 267 168 268 169C268 174 264 176 257 181L256 181C256 181 256 181 255 182C252 184 248 186 243 188C234 194 224 199 225 201C225 201 227 202 228 202C230 203 232 203 234 204L237 199C237 199 237 199 238 199C238 200 238 200 239 200C240 201 242 202 243 203C245 204 246 205 248 206L248 206C253 209 259 213 264 216C265 217 267 217 268 217C276 213 283 210 291 206C292 206 293 205 293 203C293 202 293 201 294 200ZM310 202C310 203 311 204 311 205C311 205 312 205 312 205C314 205 315 206 316 206C316 206 316 206 316 206C317 206 318 207 319 207L321 208C327 211 333 214 338 217C340 218 341 218 343 217C352 215 360 212 368 210L368 209C370 209 371 209 373 208C374 208 374 208 375 208L375 208C375 208 375 207 376 207L377 214C380 213 384 212 387 212C386 211 386 211 386 211L385 210L385 210C384 209 383 209 382 208C380 207 379 206 377 205C369 199 361 193 354 187C351 185 350 183 351 180C352 177 354 177 356 176C357 176 359 176 359 174C355 175 352 175 350 171C349 171 349 172 349 172L348 173C348 174 347 174 346 175C341 182 336 188 330 193C326 197 320 200 310 202Z"
            fill="black"
          />
        </Svg>
      </View>
    );
  }
}
