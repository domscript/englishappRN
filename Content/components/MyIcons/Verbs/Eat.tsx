import Svg, {Circle, G, Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

export const Eat = ({positive, frame}: VerbProps) => {
  const stages = 8;
  const stage = frame % stages;

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
        {stage === 7 && (
          <>
            <Path
              id="Rectangle 8"
              d="M414 215L402 204L397 209L409 220L414 215Z"
              fill="#D3D3D3"
            />
            <Path
              id="8"
              d="M352 272C355 276 357 279 359 282C362 286 368 287 372 284C386 273 405 261 417 248C424 240 431 233 432 221C432 220 432 218 431 217C425 213 419 209 412 210C408 210 406 220 404 220L326 162C342 176 367 111 338 127C339 108 339 103 338 92C336 76 334 67 317 57C306 51 287 45 271 52C259 56 245 65 242 78C236 92 237 121 238 133C239 140 245 164 251 176C255 185 261 191 269 196C271 198 276 199 282 199C282 203 280 202 278 203C268 207 259 213 249 218C248 219 247 220 246 221C239 231 232 240 225 250C224 252 223 254 225 256C226 256 227 258 227 259C225 262 224 266 221 268C219 267 218 266 217 264C210 257 204 249 197 241C196 239 195 238 196 235C199 230 199 224 198 218C193 210 189 202 180 208C176 209 172 213 169 217C169 218 169 219 169 220C172 227 174 235 181 239C184 241 185 244 186 246C195 261 205 274 215 287C219 294 226 294 230 287C234 280 238 274 242 267C245 268 247 270 250 267C251 271 251 275 252 280C252 294 253 308 253 322C252 326 253 328 258 328C261 328 262 330 262 334C264 355 258 376 254 396C251 415 250 433 249 452C248 473 248 494 247 515C246 522 244 529 239 534C236 536 234 538 231 541C229 545 230 548 234 549C243 552 251 549 256 542C257 540 258 538 259 536C261 534 262 531 261 529C255 516 259 504 260 492C261 472 263 452 265 432C266 424 268 416 270 408C274 393 278 379 282 364C283 360 285 359 289 360C293 361 297 362 301 360C304 360 305 362 306 364C310 381 314 398 319 415C323 427 323 440 324 453C326 474 327 494 329 515C330 520 327 523 326 527C325 531 325 534 328 536C329 538 330 540 331 542C336 549 343 552 352 550C358 548 359 545 355 540C354 540 354 539 353 538C343 531 340 520 340 508C339 479 338 449 337 420C337 412 334 404 333 396C331 381 328 366 327 351C326 344 328 337 328 330C328 328 329 328 331 327C336 326 336 324 335 320C332 300 329 279 330 259C330 257 329 255 331 253C334 256 335 259 337 262C340 266 341 269 346 264C348 267 350 270 352 272ZM326 162L404 220C401 228 404 234 408 241C396 249 381 258 369 266C366 262 363 259 360 255C360 254 359 252 361 251C364 249 362 247 360 245C354 238 347 231 341 224C336 218 329 214 322 211C316 208 307 205 301 203C300 202 299 197 299 193C303 190 318 176 326 162Z"
              fill="black"
            />
            <Path
              id="Ellipse 8"
              d="M194 211C198 220 195 212 216 211C226 210 242 196 242 187C242 177 226 151 199 187C194 208 187 204 194 211Z M367 204C387 219 399 208 403 217C407 218 409 218 405 213C410 215 411 212 411 209C402 202 405 176 386 171C354 164 358 198 367 204Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 6 && (
          <>
            <Path
              id="Rectangle 7"
              d="M412 216L398 209L394 215L409 222L412 216Z"
              fill="#D3D3D3"
            />
            <Path
              id="7"
              d="M352 273C355 276 357 279 359 282C362 287 368 288 372 285C386 274 401 265 413 252C420 244 427 234 428 222C428 220 428 219 427 218C421 214 415 210 408 211C404 211 402 221 400 221L324 178C327 171 329 164 330 156C333 130 333 104 324 79C318 65 309 58 295 54C276 49 259 50 243 62C232 70 227 81 226 95C226 107 228 118 230 129C231 131 231 133 232 135C230 135 230 135 229 135C222 134 218 138 220 145C222 152 226 158 230 164C232 169 236 170 240 171C242 172 244 172 245 172C251 169 254 173 258 177C264 183 271 189 279 194C282 196 282 198 282 200C282 203 280 203 278 204C268 208 259 214 249 219C248 219 247 221 246 222C239 231 232 241 225 251C224 253 223 255 225 256C226 257 227 258 227 260C225 263 224 266 221 269C219 268 218 266 217 265C210 257 204 250 197 242C196 240 195 238 196 236C199 230 199 224 198 219C193 211 189 203 180 209C176 210 172 213 169 218C169 219 169 220 169 220C172 227 174 236 181 240C184 242 185 245 186 247C195 261 205 274 215 288C219 295 226 294 230 287C234 281 238 275 242 268C245 269 247 271 250 267C251 272 251 276 252 280C252 294 253 308 253 322C252 326 253 329 258 329C261 329 262 331 262 334C264 356 258 376 254 397C251 416 250 434 249 453C248 474 248 495 247 516C246 523 244 530 239 535C236 537 234 539 231 542C229 545 230 549 234 550C243 553 251 550 256 542C257 540 258 539 259 537C261 535 262 532 261 529C255 517 259 505 260 492C261 472 263 452 265 432C266 424 268 417 270 409C274 394 278 380 282 365C283 361 285 360 289 361C293 362 297 362 301 361C304 360 305 362 306 365C310 382 314 399 319 415C323 428 323 441 324 454C326 474 327 495 329 516C330 520 327 524 326 528C325 532 325 534 328 537C329 539 330 541 331 542C336 550 343 552 352 550C358 549 359 546 355 541C354 540 354 539 353 539C343 531 340 520 340 508C339 479 338 450 337 421C337 413 334 405 333 397C331 382 328 367 327 352C326 345 328 338 328 331C328 329 329 328 331 328C336 327 336 324 335 320C332 300 329 280 330 260C330 258 329 256 331 254C334 257 335 260 337 263C340 267 341 270 346 265C348 268 350 270 352 273ZM324 178L400 221C397 229 400 236 404 243C392 251 381 259 369 267C366 263 363 259 360 256C360 254 359 253 361 252C364 250 362 248 360 246C354 239 347 232 341 225C336 218 329 215 322 212C316 209 310 207 304 204C303 203 298 203 300 199C304 199 317 193 324 178Z"
              fill="black"
            />
            <Path
              id="Ellipse 7"
              d="M194 212C198 220 195 213 216 212C226 211 242 197 242 188C242 178 224 151 200 188C194 211 188 206 194 212Z M301 179C296 181 347 201 360 210C367 213 380 218 395 218C401 220 405 219 400 215C405 215 404 215 404 212C400 211 386 190 362 185C353 183 330 179 316 178C315 177 339 184 337 184C335 184 311 177 309 178C307 179 338 191 336 191C333 191 303 178 301 179Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 5 && (
          <>
            <Path
              id="Rectangle 6"
              d="M350 192L364 199L362 205L347 198L350 192Z M187 199L200 190L204 196L190 205L187 199Z"
              fill="#D3D3D3"
            />
            <Path
              id="6"
              d="M233 266C230 269 227 272 225 275C221 280 216 281 212 277C199 263 195 245 186 231C179 223 172 217 171 205C171 203 171 202 172 201C178 196 184 192 191 193C195 194 197 203 199 203L272 163C253 175 240 106 267 128C269 116 270 111 271 106C274 95 275 91 281 81C289 73 293 67 315 65C329 64 337 65 357 79C366 86 375 93 375 113C374 120 370 146 364 157C360 166 350 192 342 197C340 198 326 208 320 208C321 210 324 210 325 211C329 212 326 209 336 214C343 223 351 233 358 243C360 245 358 247 355 249C354 250 356 250 356 252C356 252 357 241 358 240C359 233 360 228 361 225C358 220 347 215 352 197C355 191 355 187 366 191C370 192 376 193 378 197C379 205 379 208 376 217C373 218 372 221 371 224C370 239 372 259 367 279C363 286 357 284 353 277C349 271 346 266 342 259C336 263 336 262 333 254C331 259 331 279 331 283C330 297 331 308 332 322C332 326 334 328 329 328C326 328 325 330 325 334C323 355 329 376 333 397C336 415 337 434 338 452C339 473 339 494 340 515C341 522 342 529 348 534C351 536 353 539 355 541C358 545 357 548 353 550C344 552 336 549 331 542C330 540 329 538 328 537C325 534 325 532 326 529C332 517 328 504 327 492C326 472 324 452 322 432C321 424 319 416 317 408C313 394 308 379 305 364C303 360 302 359 298 360C294 361 290 362 286 361C283 360 282 362 281 364C277 381 273 398 268 415C264 427 264 440 263 453C261 474 259 495 258 515C257 520 260 523 261 528C262 531 262 534 259 537C258 538 257 540 256 542C251 549 244 552 235 550C229 549 228 545 232 541C233 540 233 539 234 538C244 531 247 520 247 508C248 479 249 450 250 421C250 412 253 404 254 396C256 381 258 366 260 351C261 344 262 335 262 328C262 326 260 325 259 325C254 324 250 324 250 320C254 300 255 280 254 259C254 258 254 252 254 250C251 253 249 256 247 259C245 263 244 263 240 258C238 261 235 263 233 266ZM272 163L199 203C202 211 199 218 195 225C205 238 208 244 218 259C221 255 224 254 226 250C227 249 227 248 226 247C223 244 225 242 227 240C233 233 244 226 250 218C255 212 258 212 265 209C271 207 281 200 289 200C291 200 290 200 290 195C286 190 277 177 272 163Z"
              fill="black"
            />
            <Path
              id="Ellipse 6"
              d="M352 197C349 206 351 199 331 203C320 205 302 195 300 186C297 176 308 147 342 176C352 196 357 188 352 197Z M243 190C236 197 219 202 205 200C200 201 196 200 200 194C195 196 195 193 194 191C200 189 207 166 227 161C242 157 256 174 243 190Z"
              fill="#BC6833"
            />
          </>
        )}

        {stage === 4 && (
          <>
            <Path
              id="Rectangle 5"
              d="M173 215L185 204L190 209L178 220L173 215Z"
              fill="#D3D3D3"
            />
            <Path
              id="5"
              d="M235 272C232 276 230 279 228 282C224 286 219 287 215 284C201 273 182 261 170 248C163 240 156 233 155 221C155 220 155 218 156 217C162 213 168 209 175 210C179 210 181 220 183 220L261 162C245 176 220 111 249 127C248 108 247 103 249 92C251 76 253 67 270 57C281 51 300 45 316 52C328 56 342 65 345 78C351 92 350 121 349 133C348 140 342 164 336 176C332 185 326 191 318 196C316 198 311 199 305 199C305 203 307 202 309 203C319 207 328 213 338 218C339 219 340 220 341 221C348 231 355 240 362 250C363 252 364 254 362 256C360 256 359 258 360 259C362 262 363 266 366 268C368 267 369 266 370 264C376 257 383 249 389 241C391 239 392 238 390 235C388 230 388 224 389 218C394 210 398 202 407 208C411 209 415 213 418 217C418 218 418 219 418 220C415 227 413 235 406 239C403 241 402 244 401 246C392 261 382 274 372 287C368 294 361 294 357 287C353 280 349 274 345 267C342 268 340 270 337 267C336 271 335 275 335 280C335 294 334 308 334 322C334 326 334 328 329 328C326 328 325 330 325 334C323 355 329 376 333 396C336 415 337 433 338 452C339 473 339 494 340 515C341 522 342 529 348 534C351 536 353 538 355 541C358 545 357 548 353 549C344 552 336 549 331 542C330 540 329 538 328 536C325 534 325 531 326 529C332 516 328 504 327 492C326 472 324 452 322 432C321 424 319 416 317 408C313 393 308 379 305 364C303 360 302 359 298 360C294 361 290 362 286 360C283 360 282 362 281 364C277 381 273 398 268 415C264 427 264 440 263 453C261 474 259 494 258 515C257 520 260 523 261 527C262 531 262 534 259 536C258 538 257 540 256 542C251 549 244 552 235 550C229 548 228 545 232 540C233 540 233 539 234 538C244 531 247 520 247 508C248 479 249 449 250 420C250 412 253 404 254 396C256 381 258 366 260 351C261 344 259 337 259 330C259 328 257 328 256 327C251 326 251 324 252 320C255 300 258 279 257 259C257 257 258 255 256 253C253 256 252 259 250 262C247 266 246 269 241 264C239 267 237 270 235 272ZM261 162L183 220C186 228 183 234 179 241C191 249 206 258 218 266C221 262 224 259 226 255C227 254 227 252 226 251C223 249 225 247 227 245C233 238 240 231 246 224C251 218 258 214 265 211C271 208 280 205 286 203C287 202 288 197 288 193C284 190 269 176 261 162Z"
              fill="black"
            />
            <Path
              id="Ellipse 5"
              d="M394 211C389 220 392 212 371 211C360 210 345 196 345 187C345 177 361 151 388 187C393 208 401 204 394 211Z M212 215C206 219 200 220 187 218C182 220 178 218 182 213C177 215 176 212 176 209C182 208 174 185 194 179C209 179 223 203 212 215Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 3 && (
          <>
            <Path
              id="Rectangle 4"
              d="M173 215L185 204L190 210L178 220L173 215Z"
              fill="#D3D3D3"
            />
            <Path
              id="4"
              d="M235 273C232 276 230 279 228 282C224 286 219 288 215 284C201 273 182 261 170 248C163 240 156 233 155 222C155 220 155 219 156 218C162 213 168 209 175 210C179 211 181 220 183 220L256 178C254 170 247 160 246 153C242 131 239 111 246 86C251 72 261 63 275 59C293 54 310 54 326 64C337 72 345 82 346 95C346 107 347 119 346 131C352 127 361 129 359 136C359 143 355 155 348 161C338 171 334 165 333 164C332 161 330 170 326 173C320 181 314 188 306 192C304 194 303 195 305 199C305 202 307 202 309 203C319 207 328 213 338 218C339 219 340 220 341 221C348 231 355 241 362 250C363 252 364 254 362 256C360 257 359 258 360 259C362 262 363 266 366 268C368 268 369 266 370 265C376 257 383 249 389 241C391 239 392 238 390 235C388 230 388 224 389 218C394 210 398 202 407 208C411 209 415 213 418 217C418 218 418 219 418 220C415 227 413 235 406 239C403 241 402 244 401 246C392 261 382 274 372 287C368 294 361 294 357 287C353 281 349 274 345 268C342 268 340 271 337 267C336 271 335 276 335 280C335 294 334 308 334 322C334 326 334 328 329 328C326 328 325 330 325 334C323 355 329 376 333 397C336 415 337 434 338 452C339 473 339 494 340 515C341 522 342 529 348 534C351 536 353 539 355 541C358 545 357 548 353 549C344 552 336 549 331 542C330 540 329 538 328 537C325 534 325 531 326 529C332 517 328 504 327 492C326 472 324 452 322 432C321 424 319 416 317 408C313 394 308 379 305 364C303 360 302 359 298 360C294 361 290 362 286 361C283 360 282 362 281 364C277 381 273 398 268 415C264 427 264 440 263 453C261 474 259 495 258 515C257 520 260 523 261 528C262 531 262 534 259 537C258 538 257 540 256 542C251 549 244 552 235 550C229 548 228 545 232 541C233 540 233 539 234 538C244 531 247 520 247 508C248 479 249 450 250 420C250 412 253 404 254 396C256 381 258 366 260 351C261 344 259 337 259 331C259 329 257 328 256 328C251 327 251 324 252 320C255 300 258 280 257 259C257 257 258 256 256 254C253 256 252 260 250 263C247 266 246 270 241 264C239 267 237 270 235 273ZM256 178L183 220C186 228 183 235 179 242C191 250 206 259 218 267C221 262 224 259 226 255C227 254 227 253 226 252C223 249 225 247 227 245C233 238 240 232 246 224C251 218 258 214 265 211C271 209 277 206 283 204C284 203 286 202 285 198C280 198 263 192 256 178Z"
              fill="black"
            />
            <Path
              id="Ellipse 4"
              d="M394 211C389 220 392 212 371 211C360 210 345 197 345 187C345 177 361 151 388 187C393 208 401 204 394 211Z M212 215C206 220 200 220 187 218C182 220 178 219 182 213C177 215 176 212 176 209C182 208 174 185 194 179C209 179 223 203 212 215Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 2 && (
          <>
            <Path
              id="Rectangle 3"
              d="M390 203L403 213L399 218L386 209L390 203Z M175 215L189 208L192 214L178 221L175 215Z"
              fill="#D3D3D3"
            />
            <Path
              id="3"
              d="M235 272C232 275 230 278 228 281C224 286 219 287 215 284C201 273 186 264 174 251C167 243 160 233 159 221C159 219 159 218 160 217C166 213 172 209 179 210C183 210 185 220 187 220L263 177C260 170 258 163 257 155C254 129 254 103 263 78C269 64 278 57 292 53C311 48 328 49 344 61C355 69 360 80 361 94C361 106 359 117 356 128C356 130 356 132 355 134C356 134 357 134 358 134C365 133 369 137 367 144C365 151 361 157 357 163C354 168 351 169 346 170C345 171 343 171 342 171C336 168 333 172 329 176C323 182 315 188 307 193C305 195 305 197 305 199C305 202 307 202 309 203C319 207 328 213 338 218C339 218 340 220 341 221C348 230 355 240 362 250C363 252 364 254 362 255C360 256 359 257 360 259C362 262 363 265 366 268C368 267 369 265 370 264C376 256 383 249 389 241C391 239 392 237 390 235C388 229 388 223 389 218C394 210 398 202 407 208C411 209 415 212 418 217C418 218 418 219 418 219C415 226 413 235 406 239C403 241 402 244 401 246C392 260 382 273 372 287C368 294 361 293 357 286C353 280 349 274 345 267C342 268 340 270 337 266C336 271 335 275 335 279C335 293 334 307 334 321C334 325 334 328 329 328C326 328 325 330 325 333C323 355 329 375 333 396C336 415 337 433 338 452C339 473 339 494 340 515C341 522 342 529 348 534C351 536 353 538 355 541C358 544 357 548 353 549C344 552 336 549 331 541C330 539 329 538 328 536C325 534 325 531 326 528C332 516 328 504 327 491C326 471 324 451 322 431C321 423 319 416 317 408C313 393 308 379 305 364C303 360 302 359 298 360C294 361 290 361 286 360C283 359 282 361 281 364C277 381 273 398 268 414C264 427 264 440 263 453C261 473 259 494 258 515C257 519 260 523 261 527C262 531 262 533 259 536C258 538 257 540 256 541C251 549 244 551 235 549C229 548 228 545 232 540C233 539 233 538 234 538C244 530 247 519 247 507C248 478 249 449 250 420C250 412 253 404 254 396C256 381 258 366 260 351C261 344 259 337 259 330C259 328 257 327 256 327C251 326 251 323 252 319C255 299 258 279 257 259C257 257 258 255 256 253C253 256 252 259 250 262C247 266 246 269 241 264C239 267 237 269 235 272ZM263 177L187 220C190 228 187 235 183 242C195 250 206 258 218 266C221 262 224 258 226 255C227 253 227 252 226 251C223 249 225 247 227 245C233 238 240 231 246 224C251 217 258 214 265 211C271 208 277 206 283 203C284 202 289 202 287 198C283 198 270 192 263 177Z"
              fill="black"
            />
            <Path
              id="Ellipse 3"
              d="M394 211C389 220 392 212 371 211C360 210 345 196 345 187C345 177 361 151 388 187C393 208 401 204 394 211Z M286 178C291 180 240 200 227 209C220 212 207 217 192 217C186 219 182 218 187 214C182 214 183 214 183 211C187 210 201 189 225 184C234 182 256 178 271 177C272 176 248 183 250 183C252 183 276 176 278 177C280 178 249 190 251 190C254 190 284 177 286 178Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 1 && (
          <>
            <Path
              id="Rectangle 2"
              d="M400 198L387 189L383 195L396 204L400 198Z M238 191L223 197L225 204L240 198L238 191Z"
              fill="#D3D3D3"
            />
            <Path
              id="2"
              d="M354 265C356 268 360 271 362 274C365 279 371 280 375 276C388 262 392 244 401 230C408 222 415 216 416 204C416 202 416 201 414 200C409 195 403 191 396 192C392 193 390 202 388 202L314 162C333 174 347 105 319 127C318 115 317 110 315 105C312 94 312 90 305 80C298 72 294 66 271 64C258 63 249 64 230 78C221 85 212 92 212 112C212 119 217 145 222 156C227 165 236 191 244 196C247 197 261 207 267 207C265 209 263 209 261 210C258 211 261 208 251 213C244 222 235 232 228 242C227 244 229 246 231 248C233 249 231 249 230 251C230 251 230 240 228 239C228 232 227 227 226 224C229 219 239 214 235 196C231 190 231 186 220 190C217 191 211 192 208 196C208 204 208 207 211 216C214 217 215 220 216 223C217 238 215 258 219 278C224 285 229 283 234 276C238 270 241 265 244 258C251 262 251 261 254 253C256 258 256 278 256 282C257 296 255 307 255 321C255 325 253 327 258 327C261 327 261 329 262 333C264 354 258 375 254 396C251 414 250 433 249 451C248 472 248 493 246 514C246 521 244 528 239 533C236 535 234 538 231 540C228 544 229 547 234 549C242 551 251 548 256 541C257 539 258 537 259 536C261 533 262 531 261 528C255 516 259 503 259 491C261 471 263 451 265 431C265 423 268 415 270 407C274 393 278 378 282 363C283 359 285 358 289 359C293 360 297 361 301 360C304 359 305 361 306 363C310 380 314 397 319 414C323 426 322 439 324 452C326 473 327 494 329 514C330 519 327 522 326 527C325 530 325 533 328 536C329 537 330 539 331 541C336 548 343 551 352 549C357 548 359 544 355 540C354 539 354 538 353 537C342 530 340 519 339 507C339 478 338 449 337 420C337 411 334 403 333 395C331 380 328 365 327 350C326 343 325 334 325 327C325 325 326 324 328 324C333 323 337 323 336 319C333 299 332 279 333 258C333 257 333 251 333 249C336 252 337 255 339 258C342 262 343 262 347 257C349 260 352 262 354 265ZM314 162L388 202C385 210 388 217 392 224C381 237 378 243 368 258C365 254 363 253 360 249C359 248 359 247 361 246C364 243 362 241 360 239C354 232 343 225 337 217C332 211 329 211 321 208C316 206 306 199 297 199C296 199 296 199 296 194C300 189 309 176 314 162Z"
              fill="black"
            />
            <Path
              id="Ellipse 2"
              d="M235 195C237 205 235 198 256 202C266 204 285 194 287 185C289 175 279 146 245 175C235 195 230 187 235 195Z M343 189C351 196 368 201 382 199C387 200 391 199 387 193C392 195 392 192 393 190C387 188 379 165 360 160C345 156 330 173 343 189Z"
              fill="#BC6833"
            />
          </>
        )}
        {stage === 0 && (
          <>
            <Path
              id="Rectangle 1"
              d="M189 218L202 208L197 203L185 213L189 218Z M414 215L402 204L397 209L409 220L414 215Z"
              fill="#D3D3D3"
            />
            <Path
              id="1"
              d="M352 272C355 276 357 279 359 282C362 286 368 287 372 284C386 273 405 261 417 248C424 240 431 233 432 221C432 220 432 218 431 217C425 213 419 209 412 210C408 210 406 220 404 220L326 162C342 176 367 111 338 127C339 108 339 103 338 92C336 76 334 67 317 57C306 51 287 45 271 52C259 56 245 65 242 78C236 92 237 121 238 133C239 140 245 164 251 176C255 185 261 191 269 196C271 198 276 199 282 199C282 203 280 202 278 203C268 207 259 213 249 218C248 219 247 220 246 221C239 231 232 240 225 250C224 252 223 254 225 256C226 256 227 258 227 259C225 262 224 266 221 268C219 267 218 266 217 264C210 257 204 249 197 241C196 239 195 238 196 235C199 230 199 224 198 218C193 210 189 202 180 208C176 209 172 213 169 217C169 218 169 219 169 220C172 227 174 235 181 239C184 241 185 244 186 246C195 261 205 274 215 287C219 294 226 294 230 287C234 280 238 274 242 267C245 268 247 270 250 267C251 271 251 275 252 280C252 294 253 308 253 322C252 326 253 328 258 328C261 328 262 330 262 334C264 355 258 376 254 396C251 415 250 433 249 452C248 473 248 494 247 515C246 522 244 529 239 534C236 536 234 538 231 541C229 545 230 548 234 549C243 552 251 549 256 542C257 540 258 538 259 536C261 534 262 531 261 529C255 516 259 504 260 492C261 472 263 452 265 432C266 424 268 416 270 408C274 393 278 379 282 364C283 360 285 359 289 360C293 361 297 362 301 360C304 360 305 362 306 364C310 381 314 398 319 415C323 427 323 440 324 453C326 474 327 494 329 515C330 520 327 523 326 527C325 531 325 534 328 536C329 538 330 540 331 542C336 549 343 552 352 550C358 548 359 545 355 540C354 540 354 539 353 538C343 531 340 520 340 508C339 479 338 449 337 420C337 412 334 404 333 396C331 381 328 366 327 351C326 344 328 337 328 330C328 328 329 328 331 327C336 326 336 324 335 320C332 300 329 279 330 259C330 257 329 255 331 253C334 256 335 259 337 262C340 266 341 269 346 264C348 267 350 270 352 272ZM326 162L404 220C401 228 404 234 408 241C396 249 381 258 369 266C366 262 363 259 360 255C360 254 359 252 361 251C364 249 362 247 360 245C354 238 347 231 341 224C336 218 329 214 322 211C316 208 307 205 301 203C300 202 299 197 299 193C303 190 318 176 326 162Z"
              fill="black"
            />
            <Path
              id="Ellipse 1"
              d="M194 211C199 220 195 212 216 211C226 210 242 196 242 187C242 177 226 151 199 187C194 208 187 204 194 211Z M375 215C381 219 387 220 400 218C405 220 409 218 405 213C410 215 411 212 411 209C405 208 413 185 393 179C378 179 364 203 375 215Z"
              fill="#BC6833"
            />
          </>
        )}
      </Svg>
    </View>
  );
};
