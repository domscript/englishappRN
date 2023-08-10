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

export default class Walk extends React.Component<VerbProps> {
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
          {stage === 8 && (
            <Path
              id="walk-8"
              d="M362 275C363 282 364 288 364 294C364 302 365 310 365 318C365 324 366 331 366 338C365 344 366 350 367 356C367 359 367 363 368 367C368 368 368 370 368 372C368 374 368 375 366 376C363 378 361 380 358 382C356 383 355 384 355 386C355 387 354 388 352 388C351 388 350 388 349 389C348 386 348 384 348 381C347 378 347 378 344 378C344 377 343 377 343 377C343 374 342 371 342 368C342 367 342 367 342 367C341 364 342 362 344 361C347 357 351 353 354 350C355 349 355 348 355 347C355 343 354 339 354 336C353 331 353 326 352 321C351 313 350 305 350 298C349 293 349 287 348 282C347 278 346 273 345 268C345 268 345 267 344 267C344 270 344 274 344 278C344 283 345 288 345 293C345 300 346 306 346 313C346 315 346 317 346 319C344 319 341 320 339 320C338 321 338 322 338 324C338 329 337 335 334 340C333 341 333 341 332 342C328 346 326 351 324 356C319 367 314 379 309 390C308 393 307 395 307 399C309 410 311 421 313 432C314 438 317 443 320 449C325 455 329 461 333 467C340 477 347 488 355 498C355 499 355 499 355 499C358 500 360 503 362 505C364 506 366 507 367 509C369 510 369 511 369 512C368 514 368 515 367 517C366 518 365 520 364 522C361 525 359 528 358 532C355 537 351 541 346 544C345 545 344 545 343 543C342 542 342 540 343 538C344 535 346 533 347 530C348 527 350 524 351 521C352 517 352 513 349 510C349 510 348 509 348 509C348 508 349 507 349 507C340 495 331 483 322 471C322 471 322 471 321 472C322 472 322 473 322 474C325 489 328 503 331 518C331 520 331 522 333 523C333 524 333 525 333 526C333 529 333 533 333 536C332 539 332 540 329 541C327 542 324 542 322 542C318 542 313 543 309 544C304 546 298 545 293 543C290 542 290 541 292 539C293 538 295 537 297 536C300 535 304 535 308 534C311 533 314 532 316 530C319 529 320 527 320 524C320 523 320 522 322 522C321 519 321 516 320 513C314 492 309 471 303 450C302 446 300 442 297 439C293 434 289 428 285 423C282 419 282 416 283 412C284 407 286 402 288 397C289 394 289 392 288 389C285 375 281 361 278 347C278 345 277 344 276 343C273 339 272 334 271 329C271 326 271 323 271 319C268 319 268 317 268 314C269 312 269 310 268 307C268 308 268 308 268 309C265 318 263 327 260 336C259 340 257 344 256 347C255 350 255 352 256 354C257 356 257 359 257 362C257 364 257 367 259 369C260 370 260 371 260 372C260 374 259 374 258 375C256 375 255 376 253 377C251 377 250 378 249 378C247 379 246 380 245 381C244 382 243 383 242 381C241 379 239 377 238 374C237 374 237 373 237 372C237 370 237 369 238 367C238 366 238 365 238 363C240 359 241 355 243 351C245 347 246 343 247 339C249 328 252 316 254 305C257 293 259 281 261 269C262 266 262 264 263 261C262 260 261 260 260 260C259 260 258 260 257 259C258 256 259 252 260 249C262 239 264 230 267 220C267 218 268 216 270 214C272 212 274 211 276 211C279 211 282 210 285 209C290 207 295 205 300 202C301 202 302 201 302 199C302 196 303 193 303 190C302 190 301 190 300 190C292 191 285 186 279 180C270 170 265 159 261 146C258 135 256 124 255 114C254 111 254 108 254 105C254 99 254 94 254 89C255 80 256 71 260 63C262 58 266 53 271 50C277 46 284 43 291 40C296 39 301 38 307 38C314 37 322 39 329 42C331 43 333 44 335 46C343 50 349 57 352 66C355 74 356 83 356 92C356 98 356 105 356 112C356 113 356 114 356 115C357 115 358 114 359 114C361 113 363 112 365 113C368 114 370 116 370 119C370 121 370 123 369 125C368 131 366 138 362 143C360 147 357 150 353 151C353 152 352 152 351 152C349 153 347 153 344 150C337 163 328 174 317 184C317 186 317 187 318 189C319 192 320 195 321 199C322 200 323 201 324 201C330 204 336 206 342 208C344 209 347 210 349 211C351 213 353 215 354 218C356 225 358 233 360 240C362 245 364 251 365 256C364 257 362 257 360 258C360 264 361 269 362 275Z"
              fill="black"
            />
          )}
          {stage === 7 && (
            <Path
              id="walk-7"
              d="M335 362C335 363 335 364 335 365C334 369 333 374 333 378C332 379 332 380 330 381C328 381 326 382 324 383C323 384 322 384 322 386C319 397 316 409 313 420C312 422 313 423 314 424C332 447 349 470 367 492C370 495 372 498 374 501C375 502 375 503 376 503C378 503 379 505 381 506C383 508 386 509 388 511C390 513 390 514 390 516C389 518 388 520 387 522C384 526 382 531 379 536C378 541 374 544 370 547C369 548 368 548 367 548C365 546 365 544 366 542C367 540 368 537 369 534C370 532 371 530 372 528C373 525 373 521 373 518C373 517 372 515 371 514C370 513 369 513 369 511C370 510 369 509 368 509C366 505 363 502 360 499C346 483 332 467 318 452C313 445 307 439 302 433C297 429 297 424 297 418C300 403 302 388 304 373C305 368 306 363 306 358C306 357 307 356 307 355C307 354 306 354 305 354C303 354 300 353 297 353C297 356 297 358 297 360C296 368 295 376 295 384C294 388 294 391 294 395C293 403 293 410 292 417C292 418 292 418 292 419C292 429 292 440 292 451C292 468 292 484 292 501C292 510 292 520 292 529C292 530 292 531 294 531C294 531 294 532 294 533C294 537 293 541 293 545C292 548 291 549 289 549C286 549 282 549 279 549C276 550 273 550 269 550C263 551 258 551 252 548C250 547 249 546 251 544C252 543 253 542 255 542C258 541 262 541 266 540C269 540 271 539 274 539C277 537 280 535 281 531C281 530 282 529 283 528C283 524 283 520 283 516C282 511 282 506 282 502C281 496 281 491 281 485C280 479 280 472 280 465C279 458 279 452 278 445C278 440 278 436 277 431C277 425 277 418 277 412C276 406 276 399 276 392C276 390 275 389 274 388C273 387 271 385 270 383C269 383 268 381 269 380C269 379 269 378 269 378C267 374 268 371 268 367C269 363 270 359 271 355C271 352 271 348 271 344C271 343 271 342 271 340C271 335 271 329 271 323C270 322 269 322 268 321C268 318 269 315 269 311C269 307 270 302 270 298C270 292 271 285 271 279C271 276 271 272 271 269C271 268 271 268 271 267C269 267 267 267 265 267C265 266 265 265 265 265C265 260 265 255 266 250C266 245 266 240 266 235C266 232 266 228 267 224C268 219 271 215 278 214C279 214 281 214 283 213C288 211 293 209 299 206C301 205 302 204 302 202C302 199 303 196 303 194C302 193 302 193 302 193C295 194 290 192 285 188C279 184 274 178 270 171C265 162 262 151 259 141C257 131 255 122 254 112C254 107 254 101 254 96C254 89 255 82 257 75C258 72 259 69 260 66C262 60 267 55 273 52C281 48 289 44 297 42C305 40 312 41 319 43C326 45 333 48 339 52C345 56 349 62 352 69C355 77 356 86 356 94C356 101 356 108 356 115C356 116 356 117 356 119C357 119 357 118 358 118C360 117 361 117 363 117C368 116 370 120 370 124C369 132 366 140 361 148C359 151 356 154 352 156C349 157 347 156 344 154C337 166 328 177 317 187C317 189 318 191 318 193C319 196 320 199 321 202C322 203 323 204 325 205C329 207 334 209 339 211C342 212 345 213 348 214C352 216 354 219 354 223C354 227 354 231 355 235C355 241 356 247 356 252C356 255 357 258 357 261C357 264 356 264 354 264C353 264 352 264 351 264C351 266 350 268 350 270C350 277 349 284 348 292C348 296 347 300 346 304C345 308 346 312 346 316C346 318 346 320 346 322C346 322 346 323 346 323C342 323 342 323 342 326C341 333 339 340 337 347C336 352 336 357 335 362Z"
              fill="black"
            />
          )}
          {stage === 6 && (
            <Path
              id="walk-6"
              d="M271 366C272 360 272 354 273 347C273 345 273 342 272 339C271 335 271 331 271 327C271 326 271 325 271 325C270 324 269 324 268 323C268 320 269 317 269 314C269 309 270 305 270 300C270 294 271 288 271 282C271 278 271 275 271 271C269 264 269 257 269 250C268 245 268 240 267 235C267 233 267 230 267 228C266 221 271 216 277 216C279 216 281 215 283 215C289 212 294 210 300 207C301 207 302 207 302 205C302 202 303 199 303 195C302 195 301 195 300 195C293 196 287 192 282 187C273 179 267 169 263 158C260 147 258 136 256 125C254 114 254 103 254 91C255 84 256 77 259 71C261 63 266 58 273 54C280 49 288 46 297 44C304 42 310 42 317 44C324 45 331 48 338 52C344 56 348 62 351 69C354 75 355 81 356 87C357 97 356 107 356 118C356 118 356 119 356 121C357 120 358 119 359 119C361 118 363 117 366 118C369 119 370 123 370 125C369 134 366 142 361 150C359 153 357 155 353 157C350 158 347 158 344 155C344 156 344 156 343 157C338 166 332 174 325 181C323 183 320 186 318 188C317 189 317 190 317 191C319 195 320 200 322 204C322 206 323 206 325 207C331 209 337 211 343 213C344 214 346 215 347 215C351 216 354 221 354 225C354 229 354 233 354 238C353 245 353 251 353 258C353 261 353 263 353 266C351 266 349 266 347 266C347 267 346 268 346 269C345 273 345 277 344 280C344 283 345 286 345 289C345 291 345 293 345 295C345 302 346 309 346 316C346 319 346 321 347 324C344 324 341 325 339 325C338 326 338 327 338 328C338 333 337 337 335 342C335 343 335 344 335 345C334 351 334 357 334 363C334 370 334 378 333 385C333 391 333 398 333 404C333 410 333 416 332 423C332 426 333 428 334 431C342 444 350 458 358 471C364 481 370 491 375 501C377 505 379 508 381 511C382 513 383 515 385 516C387 517 388 519 389 520C391 522 391 524 390 527C389 530 388 532 387 535C386 538 384 541 384 543C383 547 381 549 378 550C373 552 368 552 363 551C361 551 361 550 361 548C361 546 362 545 364 544C365 543 366 543 367 543C371 541 373 538 374 534C374 532 374 531 374 529C373 526 373 523 374 520C374 519 374 518 374 517C370 511 366 505 362 500C357 491 351 482 345 473C340 466 335 458 330 451C326 445 322 439 318 433C317 431 317 429 317 427C316 420 316 413 315 406C315 400 315 395 314 389C314 386 314 383 313 380C310 381 306 382 303 384C301 385 300 387 299 388C298 389 298 389 297 390C294 388 291 386 289 384C287 389 286 394 286 398C284 407 282 415 280 423C279 429 279 435 278 441C277 449 276 458 275 467C274 474 273 481 272 489C271 499 269 509 268 519C267 522 267 525 267 528C267 528 267 529 267 530C269 531 268 532 268 533C269 537 269 541 269 545C269 546 268 547 267 548C264 549 262 550 260 550C254 550 249 551 244 553C239 555 234 554 229 553C226 552 226 550 228 548C229 547 231 546 233 545C236 544 240 544 243 543C247 542 250 540 253 538C254 536 255 535 255 533C255 532 255 530 257 529C257 529 258 528 258 527C258 521 259 515 259 509C260 501 260 493 261 485C261 479 261 473 262 467C263 459 263 451 264 443C264 438 264 433 265 427C265 420 266 412 267 404C267 400 268 397 268 393C269 385 270 377 271 369C271 368 271 367 271 366ZM298 355C297 357 299 357 300 358C301 357 302 356 303 355C301 355 300 355 298 355Z"
              fill="black"
            />
          )}
          {stage === 5 && (
            <Path
              id="walk-5"
              d="M267 372C269 362 270 352 272 343C272 342 272 341 272 340C272 334 271 329 270 323C270 323 269 323 268 322C268 320 269 317 269 315C269 308 270 300 270 293C271 282 271 271 271 259C271 253 270 247 269 241C268 236 267 232 267 227C266 221 270 216 277 215C280 215 282 214 284 213C289 211 293 209 298 207C298 207 298 207 299 207C301 206 302 205 302 202C302 200 303 197 303 194C302 194 301 194 300 194C293 194 288 191 283 187C275 181 270 172 266 163C262 154 259 144 257 133C256 128 256 123 255 118C255 115 254 112 254 109C254 104 254 99 254 93C255 84 256 75 260 66C262 62 266 58 270 55C278 49 287 45 297 43C308 40 318 42 328 46C332 48 337 50 340 53C346 58 350 64 352 70C355 78 356 86 356 95C356 102 356 109 356 116C356 117 356 118 356 119C357 120 357 119 358 119C360 117 361 117 363 117C367 117 371 120 370 124C369 133 366 142 360 150C359 152 357 153 356 154C354 156 352 156 350 156C348 157 346 156 345 155C344 155 344 155 343 156C338 165 332 172 325 180C323 182 321 184 318 187C317 188 317 189 317 190C319 195 320 199 322 204C322 204 323 205 324 205C329 207 335 209 340 211C343 212 345 213 347 214C352 216 355 221 354 227C353 232 353 238 353 243C352 248 351 253 351 258C351 261 351 263 350 266C348 266 347 266 344 265C344 272 344 278 344 285C345 291 345 298 345 304C346 310 346 317 346 323C344 324 341 324 339 324C339 325 338 326 338 327C338 331 338 334 336 338C335 341 335 344 336 346C336 351 336 356 337 360C337 366 338 372 338 378C338 382 338 385 339 389C339 395 340 401 340 407C340 410 341 413 341 415C340 421 342 426 344 431C349 439 353 448 357 456C365 472 372 488 380 503C382 508 385 513 387 517C387 518 388 519 389 519C389 519 390 520 390 520C391 521 391 522 391 523C392 526 394 529 395 531C396 534 396 535 394 537C392 539 389 540 387 542C383 544 380 546 376 549C372 553 366 554 361 554C359 555 359 554 358 552C358 551 359 549 360 548C362 546 364 545 366 543C370 541 373 538 376 535C378 532 379 529 378 525C378 525 378 524 378 524C379 522 378 521 377 519C372 509 366 499 361 489C354 477 347 465 341 454C337 447 334 441 330 434C327 430 326 425 325 420C323 408 321 396 319 383C318 382 318 380 318 378C315 379 313 382 312 385C311 386 311 387 309 386C307 385 304 383 302 381C301 381 301 380 300 379C297 379 294 379 292 382C291 383 290 383 289 383C288 383 286 383 285 382C285 383 284 384 284 385C281 396 277 407 274 418C271 428 269 438 267 448C264 465 260 483 256 500C255 508 253 515 252 523C251 523 252 524 252 525C254 530 255 534 255 539C255 542 253 544 250 544C247 544 244 544 242 543C235 541 229 539 223 536C220 535 217 533 214 530C213 530 212 529 211 527C210 526 211 525 212 524C215 522 218 522 222 523C224 523 227 524 230 525C232 525 235 525 238 525C240 525 242 523 242 520C243 514 244 509 245 504C246 497 247 489 248 482C250 469 252 456 254 443C257 426 260 408 263 390C265 384 266 378 267 372Z"
              fill="black"
            />
          )}
          {stage === 4 && (
            <Path
              id="walk-4"
              d="M331 427C327 407 322 387 317 367C316 376 307 377 303 384C302 387 296 382 292 381C289 381 290 379 290 377C291 373 291 370 287 368C282 383 277 399 271 414C270 417 272 419 273 420C288 443 303 465 317 488C322 496 328 501 336 506C341 509 341 510 339 515C335 522 332 528 330 534C328 538 325 541 322 544C320 545 319 547 317 545C315 544 315 542 315 540C315 539 316 538 316 536C317 535 317 533 318 532C324 522 322 513 315 504C303 489 292 473 280 457C272 446 264 435 257 425C254 421 253 417 254 413C260 388 266 364 271 340C272 333 271 326 268 319C266 314 268 309 268 305C270 282 271 260 268 238C267 233 266 228 266 223C266 216 270 212 277 211C285 210 292 206 299 202C302 201 302 197 302 194C301 191 299 192 297 192C289 190 283 186 278 181C268 170 263 157 260 144C254 123 252 103 254 82C256 64 265 51 282 44C299 37 315 36 332 44C347 52 353 64 356 79C358 89 357 99 357 109C357 110 356 112 357 114C370 113 373 116 369 129C367 135 365 142 360 148C357 152 352 155 346 154C344 153 343 154 342 156C336 166 328 175 319 184C319 184 318 185 318 186C317 189 323 201 327 202C333 205 340 208 347 210C352 212 355 216 355 222C354 234 353 246 353 259C353 261 352 263 349 263C345 262 345 265 345 268C345 275 345 283 345 290C346 298 346 307 347 315C347 318 347 321 342 321C340 321 340 323 339 325C335 338 338 350 339 362C341 380 343 398 346 416C349 432 352 448 355 463C359 482 362 500 366 519C367 525 370 532 371 539C372 542 371 545 367 546C359 548 351 551 343 554C339 555 336 554 333 554C331 553 330 553 329 552C328 550 330 548 331 547C333 544 337 544 341 542C343 541 345 540 348 539C355 536 357 531 355 522C348 490 340 459 331 427Z"
              fill="black"
            />
          )}
          {stage === 3 && (
            <Path
              id="walk-3"
              d="M354 267C355 277 355 286 355 295C354 304 353 312 352 321C352 326 351 332 351 337C350 340 350 344 349 347C349 350 349 352 349 355C348 360 349 364 348 369C348 372 348 376 347 379C347 380 346 381 346 381C342 383 339 384 336 386C335 387 333 388 333 390C333 391 332 391 331 391C328 391 328 392 327 395C326 403 325 411 324 419C324 423 324 427 324 430C323 437 323 443 323 449C322 453 322 458 322 462C322 462 322 463 322 463C321 466 322 468 324 470C331 478 338 487 346 495C346 496 347 496 348 497C349 496 350 496 351 497C355 499 358 500 361 502C364 504 365 505 364 509C363 511 362 514 361 516C359 520 358 523 358 527C357 533 354 538 349 542C348 543 347 543 346 542C345 540 345 539 345 537C345 536 345 534 346 532C347 528 348 524 349 520C349 517 349 514 348 511C347 511 347 510 346 510C345 508 343 507 342 505C340 502 337 500 335 497C332 494 328 490 325 487C324 486 323 485 321 484C321 485 321 486 321 487C320 492 320 498 320 504C319 512 319 520 318 528C318 530 318 532 319 534C319 534 319 535 319 535C320 539 320 544 320 548C320 550 320 551 317 552C315 552 313 553 311 553C306 553 301 554 296 556C291 558 286 557 281 556C280 556 278 555 278 554C277 552 279 551 280 551C281 550 283 549 284 548C289 547 293 546 297 545C299 544 301 543 302 542C305 541 306 539 307 535C307 534 307 533 309 533C309 532 309 531 309 530C309 512 309 494 309 477C309 475 309 473 309 471C309 471 308 470 308 470C305 467 303 464 300 461C296 457 291 453 287 448C281 442 276 436 270 430C267 428 266 425 267 422C267 417 267 413 267 409C268 403 268 398 269 393C270 390 268 387 266 385C265 385 265 384 264 383C263 382 263 381 263 379C263 378 263 377 262 376C262 374 262 373 262 372C263 366 265 360 266 355C266 354 267 353 267 352C267 346 267 341 267 336C267 332 267 329 268 325C268 323 268 322 268 320C268 313 269 306 269 299C269 289 269 278 269 268C269 267 269 267 269 266C267 266 266 266 264 266C264 265 264 263 264 262C264 256 265 250 265 244C266 237 266 231 267 225C267 220 270 215 276 215C282 214 287 211 292 210C294 209 297 207 300 206C301 206 302 205 302 204C303 201 303 197 303 194C302 194 302 193 302 193C296 194 290 192 285 189C278 184 273 176 269 169C263 158 260 147 258 136C257 130 256 123 255 117C254 114 254 111 254 108C254 104 254 99 254 95C254 87 256 79 258 72C260 64 264 58 271 54C276 50 282 47 289 45C292 44 295 43 297 42C302 41 307 41 312 41C322 42 331 46 339 52C345 55 348 61 351 67C354 74 355 81 356 88C356 90 356 92 356 94C356 101 356 108 356 115C356 116 356 117 356 119C357 119 358 118 358 118C360 117 362 117 363 117C367 116 370 120 370 124C369 132 366 140 362 147C360 150 357 153 353 155C350 157 347 156 344 154C344 155 344 155 343 156C337 165 331 174 323 182C321 183 320 185 318 186C317 187 317 188 317 189C319 194 320 198 322 203C322 204 324 205 325 205C329 207 334 209 339 210C342 212 345 213 348 214C352 216 353 219 354 223C356 233 357 243 359 253C359 256 360 259 360 262C359 263 358 263 357 263C354 263 354 264 354 266C354 266 354 267 354 267ZM310 368C310 363 310 359 310 354C305 354 300 354 295 354C295 354 295 355 295 356C292 370 289 384 286 399C285 405 284 412 282 419C282 420 282 422 283 423C290 430 296 437 302 445C304 447 306 449 309 452C309 451 309 450 309 450C309 435 309 421 309 407C309 394 309 381 310 368ZM338 346C338 341 338 337 338 332C337 336 336 339 334 343C334 343 334 344 333 345C333 349 332 353 332 357C337 355 338 353 338 348C338 347 338 347 338 346Z"
              fill="black"
            />
          )}
          {stage === 2 && (
            <Path
              id="walk-2"
              d="M364 282C365 286 365 291 366 296C366 302 367 308 367 315C367 320 368 324 368 329C368 335 368 341 368 347C368 352 369 358 370 364C371 367 371 371 371 374C371 375 371 375 371 376C371 381 371 381 368 383C366 385 364 386 362 387C360 388 359 390 359 392C358 393 358 394 356 394C355 394 354 395 353 395C352 392 352 390 351 388C350 384 351 384 347 384C347 383 346 383 346 382C346 379 345 375 345 372C345 370 345 369 346 368C349 364 353 361 356 357C358 355 359 353 358 350C357 344 356 339 355 334C354 327 354 321 353 315C352 310 352 305 351 301C351 292 348 284 347 276C346 273 346 271 345 269C345 269 344 270 344 270C344 277 344 283 344 289C344 293 345 297 345 302C345 307 346 313 346 319C346 321 346 323 346 325C345 325 343 326 341 326C339 326 338 326 338 329C338 332 338 336 337 339C336 342 334 344 333 347C332 349 331 350 331 352C328 362 325 373 323 383C319 396 316 409 313 422C312 425 311 429 310 433C310 434 310 435 311 436C318 448 325 459 331 471C338 483 345 494 352 506C354 509 356 512 359 514C360 515 360 517 361 518C362 520 362 521 361 523C360 525 359 528 358 530C357 533 355 536 354 539C352 544 348 546 342 546C340 546 337 546 335 546C334 546 334 546 334 546C332 546 330 545 329 544C329 542 331 539 333 539C336 538 338 537 340 536C343 534 344 532 344 528C345 525 345 523 345 520C345 519 345 517 346 516C346 515 346 514 345 513C340 505 335 497 330 490C324 481 319 473 313 465C312 462 310 460 308 457C308 457 307 456 306 455C306 457 305 458 305 460C303 470 301 479 300 489C298 498 296 506 295 515C294 520 293 525 292 530C292 532 291 533 292 535C292 536 292 537 292 537C291 541 290 545 289 548C288 551 287 552 285 552C283 552 280 552 278 551C274 551 269 550 264 551C259 551 253 549 248 546C246 544 246 543 248 541C249 540 251 540 252 540C256 540 260 540 264 540C267 540 270 540 272 539C275 539 278 537 279 533C280 533 280 532 281 531C282 531 283 530 283 529C283 524 284 519 285 514C286 505 287 496 288 488C289 479 290 471 291 463C292 455 293 447 294 440C295 438 295 437 294 436C293 436 293 435 293 435C291 432 289 429 289 424C289 419 288 413 287 407C285 397 283 388 282 378C281 372 279 366 278 359C278 358 278 357 278 356C277 352 276 349 274 346C272 343 272 339 271 336C271 332 271 329 271 326C268 324 268 322 269 320C269 318 269 317 268 315C268 316 268 316 268 317C266 323 264 330 262 337C261 343 258 348 256 354C255 356 255 357 256 358C258 362 258 366 258 370C258 372 258 373 259 374C260 375 261 376 261 378C261 379 260 380 259 381C257 382 255 382 253 383C250 384 248 385 246 388C245 389 244 389 244 388C242 385 240 383 239 381C238 380 239 379 238 378C238 376 238 375 239 373C239 372 239 371 239 370C240 367 241 363 243 360C245 355 247 349 248 343C249 336 251 328 252 321C256 306 259 291 262 276C262 274 262 271 263 269C263 268 263 268 263 267C261 267 259 266 257 266C258 263 258 261 259 259C261 248 264 237 267 227C267 225 267 224 268 223C270 219 273 217 277 217C279 217 282 216 284 215C289 213 294 211 299 209C301 208 302 207 302 205C302 202 303 199 303 196C302 196 301 196 300 196C294 197 289 194 284 190C277 185 271 177 268 169C266 164 263 159 262 154C260 148 259 142 257 136C256 130 256 125 255 120C255 117 254 114 254 112C254 106 254 100 254 95C255 86 256 78 259 70C261 65 264 61 268 58C275 53 282 50 290 47C292 46 294 46 296 45C300 44 305 44 309 44C314 44 320 45 324 47C329 49 333 51 338 53C346 58 350 66 353 75C355 83 356 90 356 98C356 104 356 111 356 118C356 119 356 120 356 122C357 121 358 120 359 120C361 120 362 119 364 119C367 119 370 123 370 127C369 135 366 142 362 150C360 152 358 154 356 156C354 158 352 158 350 159C348 159 346 159 344 156C344 158 343 159 342 160C338 168 332 175 325 182C323 184 320 187 318 189C317 190 317 190 317 191C319 196 320 201 322 206C322 207 323 207 324 207C330 210 335 211 340 214C343 215 346 216 349 217C352 219 353 221 354 224C356 230 358 236 360 243C362 248 364 254 365 259C366 262 366 262 363 263C362 263 362 263 361 264C361 270 363 276 364 282ZM301 358C301 368 302 380 303 382C304 374 306 365 307 356C305 356 303 356 301 356C301 356 301 357 301 358Z"
              fill="black"
            />
          )}
          {stage === 1 && (
            <Path
              id="walk-1"
              d="M367 134C365 137 364 141 362 144C361 147 358 150 355 151C354 152 352 153 350 153C348 154 346 153 344 151C344 152 344 153 343 153C338 162 332 169 325 177C323 179 320 182 318 184C317 185 317 185 317 187C319 191 320 195 322 200C322 201 323 202 325 203C330 205 336 207 342 209C344 210 347 211 349 213C351 213 352 215 353 217C358 229 363 241 368 253C368 254 368 255 368 255C366 256 365 257 363 258C363 258 363 259 363 260C365 267 367 274 369 281C370 285 370 290 371 294C372 305 374 317 375 329C376 332 376 335 376 339C376 344 377 348 378 353C380 359 380 365 381 372C381 373 381 374 380 375C377 377 374 379 371 381C370 382 369 384 369 385C369 387 368 388 366 388C365 388 364 388 363 389C363 386 362 384 362 382C361 379 361 378 357 378C356 375 356 373 355 370C353 366 354 363 357 360C360 357 362 354 365 351C366 349 366 347 366 345C365 342 365 340 364 337C363 330 361 323 360 316C358 305 356 295 354 284C352 278 350 272 348 265C348 265 348 264 347 263C346 263 345 264 344 264C344 267 344 270 344 273C344 276 344 278 344 281C345 286 345 292 345 297C345 304 346 310 346 317C346 318 346 319 346 320C344 320 341 321 339 321C339 322 338 323 338 324C338 331 337 336 333 342C333 342 333 342 333 342C328 347 326 354 324 360C320 368 317 376 313 384C312 387 312 391 313 394C314 401 315 408 317 415C320 425 322 434 325 443C330 463 336 483 341 503C343 508 344 512 345 516C345 517 345 518 346 518C347 519 348 520 348 522C347 525 348 529 349 533C349 535 349 536 346 537C344 538 341 539 339 539C334 540 329 542 324 543C319 545 315 545 310 544C309 544 309 544 309 543C307 543 306 542 308 540C308 539 309 538 311 537C312 536 313 536 315 536C318 534 322 533 325 532C327 531 329 530 331 529C333 527 335 525 335 522C335 521 335 521 335 520C336 519 336 518 335 516C332 508 330 500 327 492C323 480 319 468 315 456C310 443 306 429 301 416C301 416 301 416 301 415C300 416 300 417 299 418C298 421 297 425 295 429C291 442 287 455 282 468C278 482 273 496 268 511C268 511 268 512 267 512C265 517 265 522 266 527C267 529 267 532 267 534C267 537 265 539 262 539C259 539 257 538 254 537C248 535 241 532 235 529C232 527 228 525 225 521C223 517 224 516 228 515C231 515 235 515 238 516C241 518 245 519 249 519C250 519 251 519 252 519C253 519 253 519 253 518C254 517 256 516 257 514C258 509 260 504 261 499C263 492 265 486 267 479C269 471 271 463 273 455C278 439 282 423 287 406C288 401 290 395 292 389C292 388 292 387 292 386C288 374 284 362 280 349C279 348 278 346 277 344C273 341 272 336 271 331C271 328 271 324 271 320C270 320 269 320 268 319C269 306 270 294 271 281C271 281 270 281 270 281C269 283 269 285 268 287C267 291 266 294 264 298C262 305 259 313 256 320C253 328 249 335 246 343C246 344 246 344 246 344C244 347 244 350 245 353C246 356 245 359 245 362C245 364 245 366 246 367C247 367 247 368 247 369C248 372 247 373 244 374C241 374 239 375 236 376C235 376 233 377 232 378C231 380 230 380 229 378C227 376 226 373 224 370C224 370 224 370 224 369C226 368 225 366 225 364C226 362 227 359 228 357C230 354 231 350 233 347C235 344 236 341 237 338C239 326 243 315 247 304C251 290 255 277 259 264C259 263 259 262 260 260C258 260 256 259 254 259C254 258 254 257 255 256C259 244 263 232 267 220C267 219 268 218 268 217C270 214 273 212 277 212C279 212 281 211 283 211C289 208 294 206 299 204C301 203 302 202 302 200C302 197 303 194 303 191C302 191 302 191 302 191C295 192 289 189 284 185C278 180 273 174 269 166C265 159 262 151 260 142C258 133 256 124 255 114C254 111 254 108 254 105C254 101 254 97 254 92C254 85 256 77 258 69C260 62 264 55 271 51C277 47 283 44 290 42C293 41 297 40 301 39C307 38 313 38 319 40C324 41 329 44 334 46C342 50 348 57 351 65C354 71 355 77 356 83C357 92 356 102 356 111C356 113 356 114 356 117C357 116 358 115 359 115C360 115 362 114 364 114C368 114 370 118 370 122C369 126 368 130 367 134Z"
              fill="black"
            />
          )}
        </Svg>
      </View>
    );
  }
}
