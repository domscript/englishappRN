import Svg, {Circle, Ellipse, G, Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

const paths = [
  'M349 262C352 260 375 243 383 244C388 243 390 245 393 247C396 249 396 251 395 253C394 255 393 257 391 259C390 260 377 266 375 266C365 269 350 273 345 274C343 274 341 275 340 277C337 279 334 281 331 284C328 286 324 287 320 289C318 290 315 289 313 287C311 285 310 282 308 279C306 276 303 269 306 268C307 268 309 268 310 268C312 267 314 266 315 263C316 260 318 259 320 259C323 259 329 259 331 260C333 260 337 263 339 264C343 265 346 263 349 262Z M252 263C249 261 219 240 211 241C206 241 204 242 201 245C198 246 198 249 200 251C201 253 202 255 204 256C205 258 218 263 220 263C230 266 251 273 257 274C259 274 261 275 262 277C265 280 268 281 271 284C275 286 278 286 282 288C284 289 288 288 289 286C291 283 293 280 294 278C296 275 299 267 295 267C294 267 293 267 292 266C289 266 287 265 286 262C285 259 283 258 281 259C278 259 272 259 270 259C268 260 264 263 262 264C259 266 255 264 252 263Z',

  '',
  '',
  '',
  '',

  'M351 253C355 252 377 240 386 243C390 244 392 246 395 248C397 251 397 253 395 255C393 257 391 258 390 259C388 260 374 263 373 262C362 263 350 264 344 263C342 263 340 263 338 265C335 267 332 268 328 270C324 271 321 271 317 272C314 273 311 271 310 269C309 266 308 263 307 260C306 256 305 248 308 249C309 249 310 249 311 249C314 249 316 248 317 246C319 243 321 243 324 243C327 244 332 245 334 246C336 247 339 251 341 253C344 255 348 254 351 253Z M252 255C249 254 218 238 210 241C205 241 203 243 201 246C199 248 199 251 201 253C202 255 204 256 206 257C207 258 221 261 223 261C233 261 254 266 259 265C261 265 263 266 265 267C268 269 272 270 275 272C279 274 283 273 287 274C289 275 292 274 293 271C295 268 296 265 297 262C298 259 299 251 296 251C295 251 293 252 292 252C290 251 288 251 286 248C285 246 282 245 280 246C277 246 271 247 270 249C268 250 264 253 263 255C259 257 256 256 252 255Z',

  '',
  '',
  '',
  '',
];

paths[4] = paths[3] = paths[2] = paths[1] = paths[0];
paths[9] = paths[8] = paths[7] = paths[6] = paths[5];

export const Have = ({positive, frame}: VerbProps) => {
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
        <Path
          id="body"
          d="M227 228C226 225 225 222 225 222C230 222 249 213 254 212C261 209 281 202 287 199C288 199 290 198 291 197C291 197 292 193 292 192H310C310 192 311 197 312 197C318 197 324 201 329 203C332 205 335 207 338 208C340 209 343 211 347 214C356 218 365 222 374 226C375 227 376 227 377 228L374 233C378 236 381 238 385 241C385 241 386 242 387 242C391 243 393 247 394 250C396 253 395 255 392 257C390 258 388 258 386 259C379 257 372 252 367 248L365 250C365 250 353 246 347 242C346 243 347 254 347 256C347 257 347 258 347 259C346 263 346 267 346 271C346 273 346 275 346 277C346 288 346 299 346 310C346 313 346 316 346 319C346 322 346 325 347 329L335 331C335 332 335 334 335 335C336 340 335 346 333 351C333 352 332 354 332 355C332 376 331 397 330 417C329 447 327 476 326 506C325 518 325 531 324 543C324 545 324 546 325 547C326 548 326 549 326 550C326 555 329 558 331 560C334 564 337 566 340 569C341 570 342 572 342 573C342 575 341 577 340 577H339C338 578 336 578 335 578C333 579 330 578 328 578C323 578 319 576 316 571C315 568 313 566 311 563C308 561 309 558 310 555C311 553 312 552 311 550C311 548 313 548 314 547C314 546 314 545 314 543C314 508 314 474 313 439C313 428 312 417 311 406C311 394 310 382 309 369C309 368 309 367 308 366L294 367C294 367 294 368 293 369C292 389 290 410 289 430C288 444 288 458 288 471C287 496 287 520 286 545C286 546 286 547 286 548L289 549C290 552 290 555 291 558C292 560 291 563 289 565C287 568 285 571 283 574C281 577 279 579 275 579C271 579 267 580 264 579C258 578 257 575 261 571C263 567 267 565 269 562C271 560 272 558 274 556C274 555 275 554 274 553C274 551 275 549 276 548C276 547 277 546 277 545C276 526 275 507 274 489C273 471 273 452 272 434C271 409 271 384 270 359C270 357 269 355 268 352C266 350 266 347 266 344C266 340 266 336 266 332L258 330C259 327 259 324 260 321C262 303 264 286 263 268C263 259 262 250 261 241C261 240 260 238 260 236C250 241 246 245 236 251C236 249 235 248 234 247C234 246 233 246 233 245C228 247 224 249 220 251C218 252 216 253 215 254C210 257 203 255 200 252C199 251 199 250 199 248C199 246 202 239 227 228Z"
          fill="black"
        />

        {positive < 3 || positive > 5 ? (
          <Path
            id="head"
            d="M292 195C281 194 274 188 267 181C262 174 258 166 254 158C253 157 252 156 252 155C246 157 242 155 240 150C237 145 235 140 234 134C233 130 234 127 235 124C237 119 239 118 244 121C241 106 241 83 247 66C249 58 253 52 260 47C270 40 280 36 292 34C300 32 309 33 317 36C320 38 324 39 327 41C338 46 345 55 348 67C352 78 353 89 352 101C351 107 351 112 350 118C351 118 352 117 353 116C355 115 357 114 360 115C362 116 363 119 363 121C363 124 363 126 362 129C361 135 359 144 355 150C352 156 348 157 341 154C340 158 339 161 337 164C334 171 331 177 326 183C323 189 318 192 310 194C302 196 299 196 292 195Z"
            fill="black"
          />
        ) : (
          <>
            {[0, 1].includes(stage) && (
              <Path
                id="head"
                d="M292 195C281 194 274 188 267 181C262 174 258 166 254 158C253 157 252 156 252 155C246 157 242 155 240 150C237 145 235 140 234 134C233 130 234 127 235 124C237 119 239 118 244 121C241 106 241 83 247 66C249 58 253 52 260 47C270 40 280 36 292 34C300 32 309 33 317 36C320 38 324 39 327 41C338 46 345 55 348 67C352 78 353 89 352 101C351 107 351 112 350 118C351 118 352 117 353 116C355 115 357 114 360 115C362 116 363 119 363 121C363 124 363 126 362 129C361 135 359 144 355 150C352 156 348 157 341 154C340 158 339 161 337 164C334 171 331 177 326 183C323 189 318 192 310 194C302 196 299 196 292 195Z"
                fill="black"
              />
            )}
            {[2, 3, 4].includes(stage) && (
              <Path
                id="head-1"
                d="M292 192L293 189C294 184 294 182 290 179C285 173 280 167 276 160C274 158 273 157 270 158C265 160 261 157 258 154C252 146 247 137 246 127C245 118 247 117 255 118C256 118 257 118 258 117C259 114 258 111 258 108C257 95 257 82 260 69C264 49 278 39 295 35C313 30 330 36 345 46C355 54 358 65 360 77C363 107 362 136 352 164C349 171 345 178 340 184C333 193 324 197 313 195C313 195 312 195 311 195C311 195 298 194 292 192Z"
                fill="black"
              />
            )}
            {[5, 6].includes(stage) && (
              <Path
                id="head"
                d="M292 195C281 194 274 188 267 181C262 174 258 166 254 158C253 157 252 156 252 155C246 157 242 155 240 150C237 145 235 140 234 134C233 130 234 127 235 124C237 119 239 118 244 121C241 106 241 83 247 66C249 58 253 52 260 47C270 40 280 36 292 34C300 32 309 33 317 36C320 38 324 39 327 41C338 46 345 55 348 67C352 78 353 89 352 101C351 107 351 112 350 118C351 118 352 117 353 116C355 115 357 114 360 115C362 116 363 119 363 121C363 124 363 126 362 129C361 135 359 144 355 150C352 156 348 157 341 154C340 158 339 161 337 164C334 171 331 177 326 183C323 189 318 192 310 194C302 196 299 196 292 195Z"
                fill="black"
              />
            )}
            {[7, 8, 9].includes(stage) && (
              <Path
                id="head-2"
                d="M310 192L309 189C308 184 308 182 312 179C317 173 322 167 326 160C328 158 329 157 332 158C337 160 341 157 344 154C350 146 355 137 356 127C357 118 355 117 347 118C346 118 345 118 344 117C343 114 344 111 344 108C345 95 345 82 342 69C338 49 324 39 307 35C289 30 272 36 257 46C247 54 244 65 242 77C239 107 240 136 250 164C253 171 257 178 262 184C269 193 278 197 289 195C289 195 290 195 291 195C291 195 304 194 310 192Z"
                fill="black"
              />
            )}
          </>
        )}

        <G id="apple" translateY={[0, 1, 2, 3, 4].includes(stage) ? 15 : 0}>
          <Path
            d="M300 210C300 210 296 214 290 214C284 214 277 210 276 209C276 209 282 205 288 205C294 205 300 210 300 210Z"
            fill="#547921"
          />
          <Path
            d="M300 206C301 210 302 218 301 218C300 218 301 217 299 211C298 208 298 208 297 206H300Z"
            fill="#4C311E"
          />
          <Path
            d="M330 237C329 242 324 254 316 259C311 261 302 260 301 260C298 260 293 261 289 259C281 254 276 245 275 236C274 230 277 221 283 217C291 212 295 218 300 217C307 215 313 214 318 216C326 220 330 226 330 237Z"
            fill="#C2291C"
          />
          <Path
            d="M327 231C328 235 328 237 326 241C326 241 327 236 326 231C324 224 320 221 320 221C323 223 326 225 327 231Z"
            fill="white"
          />
        </G>
        <Path d={paths[stage]} fill="#222" />

        <Path
          id="have"
          d="M113 451V472H108V425H113V443H114C115 441 116 439 117 438C119 437 121 437 124 437C126 437 128 437 130 438C132 439 133 440 134 442C135 444 136 447 136 450V472H131V450C131 447 130 445 128 444C127 442 125 441 122 441C121 441 119 442 118 443C116 443 115 444 114 446C114 447 113 449 113 451ZM156 473C154 473 152 472 150 472C148 471 147 470 146 468C145 466 144 464 144 462C144 460 144 458 145 457C146 456 147 455 148 454C150 454 151 453 153 453C154 452 156 452 158 452C160 452 161 451 163 451C164 451 165 451 166 450C166 450 167 450 167 449V448C167 446 166 444 165 443C164 442 162 441 159 441C157 441 155 442 153 443C152 444 151 445 150 447L145 445C146 443 147 441 149 440C150 439 152 438 154 437C156 437 157 437 159 437C160 437 161 437 163 437C164 437 166 438 167 439C169 439 170 441 171 442C172 444 172 446 172 449V472H167V467H166C166 468 165 469 165 470C164 471 163 471 161 472C160 473 158 473 156 473ZM157 468C159 468 161 468 162 467C164 466 165 465 165 464C166 462 167 461 167 459V454C166 455 166 455 165 455C164 455 163 456 162 456C162 456 161 456 160 456C159 456 158 456 157 456C156 457 155 457 153 457C152 458 151 458 151 459C150 460 149 461 149 462C149 464 150 466 152 467C153 468 155 468 157 468ZM209 437L196 472H191L178 437H184L193 465H194L203 437H209ZM230 473C226 473 223 472 221 471C218 469 217 467 215 464C214 462 213 458 213 455C213 451 214 448 215 445C217 443 218 440 221 439C223 437 226 437 229 437C231 437 233 437 234 438C236 438 238 439 239 441C241 442 242 444 243 446C244 448 244 451 244 454V456H219V452H239C239 450 238 448 237 446C237 445 235 444 234 443C233 442 231 441 229 441C227 441 225 442 223 443C222 444 221 445 220 447C219 449 219 451 219 453V456C219 458 219 461 220 462C221 464 222 466 224 467C225 467 227 468 230 468C231 468 232 468 233 467C235 467 236 466 236 466C237 465 238 464 238 462L243 464C243 466 242 467 241 469C239 470 238 471 236 472C234 472 232 473 230 473Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};
