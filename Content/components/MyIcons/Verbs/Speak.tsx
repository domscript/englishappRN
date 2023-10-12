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

const paths = [
  'M370 199C360 185 356 169 354 153C352 135 352 117 355 100C358 79 371 68 391 63C410 57 427 61 443 73C452 81 455 91 456 102C458 114 457 125 456 136C455 138 455 139 456 140C457 141 457 141 458 140C466 139 470 142 468 149C467 159 463 167 457 174C452 179 447 181 440 178C432 189 423 199 413 207C412 208 411 209 411 210C410 213 415 225 419 226C435 231 448 240 458 253C461 258 465 262 468 265C470 267 471 269 468 271C466 273 467 275 469 277C472 282 475 287 479 292C483 298 483 303 477 309C464 320 452 331 440 341C438 343 437 345 438 347C440 352 441 358 443 363C444 367 444 371 441 375C438 380 434 385 429 389C427 391 425 393 425 397C425 417 425 438 425 458C426 481 428 504 429 527C429 534 429 541 430 547C430 551 432 555 433 559C434 563 434 567 431 570C429 571 428 572 427 574C422 582 415 583 407 581C401 580 400 576 404 572C404 571 405 570 407 569C418 561 420 550 419 536C415 509 412 481 410 454C407 430 405 405 403 380C402 377 401 376 397 376C389 376 389 376 388 385C383 438 384 491 384 544C384 551 387 557 387 564C387 568 386 570 383 571C374 573 366 575 357 578C354 579 351 578 348 577C344 576 343 574 346 571C347 570 349 569 350 569C353 568 356 567 358 566C371 563 374 555 373 543C373 527 372 511 371 495C369 472 368 448 367 425C366 408 366 390 365 373C365 369 364 366 363 362C361 359 361 355 361 351C361 348 361 345 358 342C356 339 358 335 358 332C360 314 361 296 362 278C360 277 359 279 359 279C357 283 355 286 351 283C349 282 348 284 347 286C343 290 339 295 336 299C330 306 324 306 318 299C307 287 296 275 286 262C284 260 282 258 279 257C277 257 275 256 273 255C257 251 251 239 248 225C247 222 248 220 251 217C256 223 260 231 269 233C267 231 262 230 265 225C273 226 279 231 282 238C285 244 289 248 294 253C304 262 313 271 322 280C326 285 326 285 330 280C331 278 332 277 334 275C335 274 335 272 334 271C331 269 332 267 334 265C342 256 350 247 358 238C362 234 365 232 370 233C372 234 374 233 375 233C379 231 383 230 386 228C395 225 395 224 395 214C384 214 376 208 370 199ZM437 276C436 291 436 307 436 322C436 323 436 324 437 325C446 317 454 308 462 300C463 299 463 298 462 297C459 293 457 288 453 285C451 286 450 286 448 287C446 285 445 282 443 280C442 278 441 275 438 273C438 274 437 275 437 276Z',

  'M459 255C462 259 465 263 469 266C470 268 471 269 469 271C466 273 468 276 470 278C473 283 476 288 479 293C483 299 483 304 477 308C465 319 453 330 440 341C438 343 437 345 438 348C440 353 441 358 443 363C444 367 444 371 441 375C438 380 434 384 430 388C427 391 425 394 425 397C425 418 425 438 425 459C426 482 428 504 429 527C429 534 429 541 430 547C430 551 432 555 433 560C434 563 434 567 431 570C429 571 428 572 427 574C422 582 415 583 406 581C401 580 400 576 403 572C404 571 405 570 406 569C418 561 420 550 419 536C415 512 413 488 411 465C408 436 405 408 403 380C402 377 401 376 398 376C389 376 389 376 388 385C383 438 384 491 384 543C384 550 387 557 387 564C387 568 386 570 383 571C374 573 366 575 358 578C354 579 351 578 347 577C344 576 343 574 346 572C347 570 349 569 351 568C354 567 356 566 359 566C371 563 374 555 373 543C373 527 372 512 371 497C369 473 368 449 367 425C366 407 366 390 365 373C365 369 364 366 363 362C361 358 361 354 361 350C361 347 361 345 358 342C356 339 358 335 358 331C360 313 362 294 362 275C362 275 361 274 361 273C358 275 356 279 354 281C353 283 352 284 350 283C347 281 346 282 344 284C339 289 335 293 330 298C324 303 318 303 314 296C305 282 295 268 287 253C284 248 281 245 276 243C262 236 257 224 257 209C257 206 258 203 262 200C265 209 269 216 277 221C276 217 270 216 273 211C281 213 288 221 289 232C290 236 291 239 293 242C303 253 311 265 319 277C320 278 321 279 323 281C327 278 330 274 333 270C328 266 331 264 334 260C342 253 350 245 358 238C361 234 366 232 371 233C373 234 374 233 376 233C379 231 383 230 387 228C395 225 395 225 395 215C375 211 367 197 361 180C353 154 352 128 356 101C359 81 371 69 390 63C409 57 426 60 442 72C451 79 456 89 457 100C459 112 459 125 456 137C456 138 456 140 457 141C457 141 457 141 457 141C469 140 472 144 468 155C465 163 462 170 456 176C452 179 448 181 443 179C441 178 440 179 439 181C431 191 423 200 413 207C413 208 412 209 411 210C410 213 416 225 419 226C420 226 420 227 420 227C437 231 449 241 459 255ZM440 274C438 274 438 274 437 276C435 292 436 308 436 324C436 324 437 324 437 324C446 316 454 307 463 299C460 294 457 289 453 285C451 286 450 286 449 287C445 284 443 279 440 274Z',

  'M359 169C355 147 353 126 357 105C361 79 371 68 397 62C415 58 430 62 444 73C455 81 458 93 459 105C460 116 460 127 457 138C457 139 457 140 457 142C458 142 459 142 459 142C468 140 472 144 470 153C467 162 464 170 457 176C453 180 449 182 444 180C442 179 441 179 440 181C432 191 423 200 413 208C413 208 412 209 412 210C411 213 416 224 419 226C419 226 419 226 420 227C443 232 455 251 469 267C470 268 471 270 469 272C467 273 468 275 469 277C472 282 475 287 478 291C484 300 483 303 476 310C464 320 453 331 440 341C438 343 437 345 438 348C440 353 441 358 443 363C444 367 444 371 441 375C438 380 434 385 429 389C427 391 425 394 425 397C425 418 425 439 425 459C426 482 428 505 429 527C429 534 429 541 430 548C431 552 432 556 433 559C434 563 434 567 431 570C429 571 428 572 427 574C422 581 415 583 406 581C401 580 400 576 403 572C404 571 405 570 406 569C418 561 420 550 419 536C415 512 413 488 411 464C408 436 405 408 403 380C402 377 402 376 398 376C389 376 389 376 388 385C383 438 384 492 384 545C384 551 387 557 387 564C387 568 386 570 383 571C374 573 366 575 358 578C354 579 351 578 347 577C344 576 343 574 346 571C347 570 349 569 351 569C353 567 356 566 359 566C371 563 374 555 373 543C373 527 372 511 371 494C369 471 368 448 367 425C366 408 366 390 365 373C365 369 364 366 363 362C361 359 361 355 361 351C361 348 361 344 358 342C356 341 357 339 357 338C359 318 362 298 362 279C362 277 362 276 362 273C359 276 357 278 356 281C354 283 352 284 350 282C348 280 347 282 345 283C340 288 335 293 330 298C325 303 320 303 316 297C305 283 295 269 286 255C284 252 281 249 278 248C274 246 270 244 267 242C254 236 252 224 250 212C250 210 252 208 254 206C258 214 264 221 273 225C273 224 272 223 271 223C270 222 269 221 268 221C267 219 265 218 266 216C267 214 269 215 271 216C279 219 283 225 285 233C286 237 288 239 291 242C301 252 310 265 319 276C321 278 322 280 324 281C328 278 330 274 333 271C334 271 334 269 333 268C330 266 332 264 334 262C342 254 351 246 359 237C363 234 366 233 371 233C379 233 386 229 393 225C396 224 396 219 395 216C395 213 392 214 390 213C380 211 374 204 369 195C364 187 361 178 359 169ZM460 294C459 292 458 291 457 289C455 286 453 284 449 287C444 283 443 277 438 272C435 290 436 308 437 325C445 318 452 311 459 304C463 300 464 298 460 294Z',

  'M292 267C289 263 287 259 284 256C283 253 281 252 278 251C276 251 274 250 271 249C256 246 248 236 244 222C243 218 243 217 247 212C252 219 257 226 266 227C263 225 259 224 260 219C269 220 276 224 280 232C282 237 286 241 290 244C301 254 311 266 321 278C324 281 326 281 328 278C329 276 331 274 332 273C334 271 335 270 333 267C331 266 332 264 333 263C343 254 352 244 362 235C364 233 366 232 369 233C378 234 385 229 392 226C396 224 396 220 396 217C396 213 393 214 390 213C383 212 378 207 374 201C366 191 362 179 359 167C355 145 354 122 359 100C362 81 373 69 392 64C410 58 426 60 441 70C453 78 459 89 460 102C462 115 461 127 459 139C458 140 459 141 459 142C459 142 460 142 461 142C470 141 473 145 471 154C469 160 466 166 462 171C458 178 452 183 444 180C442 179 441 181 440 182C432 191 424 200 414 208C412 209 411 210 412 212C412 213 412 213 413 214C414 222 418 227 427 230C438 232 446 239 453 248C458 254 463 260 468 266C470 268 472 270 469 272C467 274 468 275 469 277C472 282 475 287 479 292C484 300 483 303 476 309C465 320 453 331 440 341C438 343 437 345 438 348C440 353 441 358 443 363C444 367 444 371 441 375C438 380 434 385 429 389C427 391 425 394 425 398C425 418 425 439 425 460C426 482 428 505 429 527C429 534 429 541 430 547C431 552 432 556 433 560C434 563 434 567 431 569C430 571 428 572 427 574C422 582 416 583 406 581C401 580 400 576 403 572C404 571 405 570 406 569C418 561 421 550 419 536C415 512 413 489 411 465C408 437 405 408 403 380C402 377 401 376 398 376C389 376 389 376 388 385C383 438 384 491 384 544C384 551 387 557 387 564C387 568 386 570 383 571C374 573 366 576 357 578C354 579 351 578 347 577C344 576 343 574 346 571C348 570 349 569 351 568C353 567 356 566 359 566C371 563 374 555 373 543C373 527 372 511 371 496C369 472 368 449 367 425C366 407 366 390 365 372C365 369 364 366 363 362C361 359 361 355 361 352C361 348 360 345 358 342C355 338 358 333 358 329C360 312 362 295 362 278C362 277 362 276 361 275C359 277 357 279 356 281C353 285 351 282 349 281C344 284 340 289 336 294C325 304 322 304 313 292C306 284 299 275 292 267ZM458 291C456 288 455 284 449 287C448 288 447 285 446 284C443 280 441 277 439 273C439 273 438 273 438 273C435 291 436 308 437 326C444 319 451 313 457 306C464 299 464 299 458 291Z',

  'M291 267C285 258 278 252 266 252C251 251 244 240 238 227C237 225 238 225 240 219C247 226 253 231 264 232C261 231 259 230 257 229C255 229 254 227 255 225C255 223 257 224 259 224C265 225 270 227 274 232C278 238 284 243 290 248C296 252 301 257 306 262C311 267 316 273 322 278C324 281 326 281 329 278C330 276 332 274 334 273C335 271 336 269 334 267C332 266 333 264 334 263C344 254 353 244 363 235C365 233 368 232 372 232C380 233 387 229 394 225C397 223 396 219 396 216C396 213 393 214 391 213C383 212 378 206 373 200C365 188 361 175 359 161C356 141 356 121 360 101C362 90 366 79 376 72C386 65 397 62 409 61C424 59 436 65 447 74C456 80 460 90 461 100C463 113 462 125 460 138C460 139 459 141 460 143C460 143 461 143 461 143C473 141 474 148 471 155C469 162 466 169 461 174C456 181 450 183 443 180C434 190 425 200 414 208C413 208 413 209 413 210C411 214 416 226 420 227C438 232 450 243 461 257C463 260 465 263 468 266C470 268 472 270 468 273C466 275 468 276 469 278C473 283 476 288 480 294C483 300 482 305 477 309C465 320 452 331 440 342C438 343 437 345 438 348C440 353 441 358 443 363C444 367 444 371 441 375C438 380 434 385 429 389C427 391 425 393 425 397C425 418 425 439 425 461C426 483 428 505 429 527C429 534 429 541 430 547C431 552 432 556 433 560C434 563 434 567 431 569C430 571 428 572 427 574C422 582 416 583 406 581C401 580 400 576 403 572C404 571 405 570 406 569C418 561 421 550 419 536C415 512 413 489 411 465C408 437 405 408 403 380C402 377 401 376 398 376C389 376 389 376 388 385C383 438 384 491 384 544C384 551 387 557 387 564C387 568 386 570 383 571C374 573 366 576 357 578C354 579 351 578 347 577C344 576 343 574 346 571C347 570 348 570 350 569C353 568 356 567 359 566C371 563 374 555 373 543C373 527 372 511 371 496C369 472 368 448 367 425C366 408 366 390 365 373C365 369 364 366 363 362C361 359 361 356 361 352C361 348 361 345 358 341C355 338 358 333 358 329C360 312 362 296 362 279C362 278 362 277 361 276C359 277 359 278 358 280C357 282 355 284 352 281C349 280 348 282 347 283C342 288 338 293 333 297C328 303 322 303 317 297C308 287 300 277 291 267ZM458 291C456 289 455 287 453 286C449 289 447 286 445 283C443 280 442 277 438 273C435 291 437 308 436 326C444 320 450 313 457 307C464 300 464 300 458 291Z',
];

paths[5] = paths[4];
paths[6] = paths[4];

export const Speak = ({positive, frame}: VerbProps) => {
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

        <Path
          id="bobble"
          d="M246 14C242 14 240 14 238 15C235 16 229 19 227 20C226 21 226 21 225 21C225 20 224 20 223 20C213 16 205 16 196 20C193 20 193 20 189 22C184 25 177 30 174 35C172 38 172 38 171 41L171 43L167 44C159 47 154 50 150 55C145 60 142 65 140 72C140 75 140 82 140 86C142 93 143 96 146 99L148 101L148 103C146 107 146 110 145 114C144 122 147 129 153 135C160 142 169 147 180 149C186 150 188 150 194 150H200L202 153C204 155 207 157 209 158C214 160 225 161 233 161C242 160 246 158 253 152C255 151 256 151 256 151C258 151 263 152 268 152C271 152 274 152 274 152C274 153 274 153 274 154C273 158 273 162 275 165C277 168 284 171 288 172C291 172 292 172 296 169C302 164 305 160 305 155C305 154 305 153 304 151C303 150 302 148 301 147C301 146 300 146 300 145C300 145 301 145 302 144C303 144 305 141 307 140C310 136 311 136 312 132C313 130 314 128 314 128C314 128 314 128 314 127C315 127 316 124 316 122C316 121 316 121 320 118C322 117 324 116 325 115C328 113 333 103 335 98C337 93 337 87 336 84C336 83 336 82 335 81C335 79 335 78 335 78C334 77 334 75 333 73C328 61 324 55 316 52C314 51 313 50 313 50C312 50 311 50 311 50C308 49 308 49 308 47C307 39 295 24 284 19C280 17 275 15 269 14C266 14 248 13 246 14ZM262 14C271 15 279 18 286 23C295 28 301 36 305 47L306 49L308 50C311 51 311 51 315 53C319 55 324 60 328 68C332 76 333 82 333 89C333 93 333 94 332 97C330 103 326 110 322 114C320 116 315 120 315 120C314 120 314 120 314 122C313 125 312 127 311 130C308 137 303 141 296 145C290 147 285 149 278 150C274 150 261 150 257 149C256 149 255 149 254 149C254 149 253 150 251 151C249 154 249 154 246 156C244 157 242 158 240 158C239 158 237 159 236 159C235 160 222 160 218 159C212 158 208 156 203 152C202 151 202 151 203 150L203 149H197C190 149 182 148 178 147C169 145 164 142 158 136C153 131 150 127 149 123C149 121 148 120 148 116C148 110 149 107 150 103C151 102 151 101 152 101H153L152 101C151 100 150 100 150 99C149 98 146 95 146 93C144 86 144 84 144 78C144 73 144 70 146 65C149 59 154 53 161 48C163 47 169 44 171 44C172 43 173 43 173 42C173 41 176 36 177 34C180 31 187 26 197 22C200 20 204 20 209 20C214 20 215 20 221 21C223 21 225 22 226 22C226 22 227 22 229 21C237 16 240 15 247 14C252 14 257 14 262 14ZM300 148C302 151 303 153 303 156C303 158 303 159 302 160C301 162 297 167 294 168C291 170 287 170 283 167C278 165 276 161 276 157C276 155 277 153 277 152C277 152 278 152 280 152C284 152 291 150 295 148C296 147 298 147 298 147C298 147 299 147 300 148ZM152 112C152 113 152 114 152 115C152 117 152 118 152 119C154 121 154 122 155 121C155 121 155 120 154 120C154 119 154 117 154 115C153 113 153 112 153 112C153 112 153 112 152 112ZM156 117C155 119 156 119 156 120C156 120 157 121 157 121C158 121 158 121 157 119C156 116 156 115 156 117ZM159 118C159 119 159 121 160 121C161 121 161 120 160 119C160 118 159 118 159 118ZM313 186C310 187 309 189 308 193C308 195 308 196 308 196C309 198 311 200 313 201C316 203 322 201 325 198C328 195 327 193 325 190C323 189 322 188 322 188C321 188 321 188 321 189C322 190 323 191 323 191C324 192 325 193 325 193C325 194 324 196 322 199C320 201 320 201 319 201C316 200 311 197 310 194C309 192 310 191 313 187C315 185 315 185 313 186Z"
          fill="black"
        />

        {[3, 4, 5, 6].includes(stage) && (
          <Path
            id="blah"
            d="M211 74C210 74 211 99 212 100C212 101 213 101 215 101C218 101 220 100 222 98C224 94 224 88 221 85C219 84 218 84 216 83L214 83L213 79C213 76 213 74 213 74C212 73 212 73 211 74ZM219 87C219 88 220 88 220 89C221 90 221 94 220 95C219 97 217 98 215 98L214 98L214 93C214 90 214 87 214 87C214 86 217 86 219 87ZM253 74C253 75 253 76 253 82C253 86 254 92 254 94C254 100 254 101 255 101L256 101L256 94C257 88 257 87 257 87C258 86 261 86 262 87C263 88 264 90 263 96L263 101L264 101C266 101 266 100 266 94C266 89 266 88 265 86C264 84 263 83 260 83C259 83 257 83 257 84C257 84 256 84 256 84C256 84 256 82 256 80C256 74 255 72 253 74ZM227 75C227 76 227 93 227 96C228 99 229 101 231 101C234 101 236 99 235 97C235 95 233 96 232 97C232 98 231 98 230 97C230 96 230 95 230 85V74L228 74C228 74 227 74 227 75ZM240 84C240 84 239 85 239 86C236 90 236 98 239 100C241 101 244 101 245 100C247 99 247 99 247 100C247 101 247 101 248 101L250 101L250 98C250 91 249 84 249 84C249 84 247 83 245 83C242 83 241 83 240 84ZM245 86C246 87 247 89 247 92C247 96 245 98 243 98C240 99 238 94 240 90C240 88 241 87 243 86C243 86 244 86 244 86C244 86 244 86 245 86Z"
            fill="black"
          />
        )}
      </Svg>
    </View>
  );
};