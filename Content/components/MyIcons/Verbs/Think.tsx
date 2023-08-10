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

export default class Think extends React.Component<VerbProps> {
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
          <Path
            id="body"
            d="M418 310C418 310 419 324 420 326C423 330 424 334 424 338C424 339 424 339 424 340C423 342 422 344 421 346C422 347 423 349 425 350C425 349 426 349 427 348C430 345 433 346 433 347C433 347 434 347 435 348C435 349 434 349 434 349C432 352 430 354 428 357C427 357 427 358 426 358C425 361 423 362 420 362C415 363 411 358 410 354C409 351 409 348 409 343C408 342 409 340 407 340C408 344 408 347 408 350C408 351 408 353 407 354C406 358 406 362 406 366C406 387 407 409 407 430C407 466 407 501 407 536C407 538 407 540 409 541C409 541 410 543 410 544C409 548 412 550 414 553C415 555 417 556 419 558C420 559 422 561 423 562C425 565 425 568 421 569C416 570 411 570 406 568C405 568 403 567 403 566C400 562 397 558 395 555C393 553 394 551 394 549C395 546 396 544 396 541C397 541 397 541 398 540C398 532 397 525 397 517C396 504 395 491 395 478C394 465 393 452 392 439C392 430 390 422 389 414C388 402 386 390 385 377C385 375 384 374 384 372C379 372 374 373 368 373C368 374 368 375 367 376C365 396 362 417 359 438C358 445 358 453 358 461C356 481 355 501 354 521C353 527 353 534 353 541C355 541 355 542 355 544C355 545 355 546 356 547C358 551 358 554 354 557C352 560 351 562 349 565C347 567 345 569 343 569C339 570 335 570 331 569C326 568 325 565 328 561C331 559 334 556 336 554C338 552 339 550 341 548C341 547 341 546 341 546C341 543 342 541 343 540C344 539 343 538 343 537C344 511 344 486 344 461C345 429 345 397 346 365C346 363 346 361 345 359C344 356 344 354 343 351C343 348 343 344 343 341C342 340 340 340 338 339C339 335 339 331 340 327C341 312 343 297 343 282C342 272 340 258 338 248C338 242 339 232 341 228C342 228 343 228 344 227C350 224 357 222 363 219C365 218 367 216 370 215C371 215 370 214 370 213C370 211 370 209 370 207L385 205C386 208 386 211 386 213C387 215 387 216 388 216C394 216 398 219 402 221C405 222 408 224 411 225C415 227 418 230 421 233C430 241 439 249 447 257C448 257 448 258 449 259C448 260 447 261 445 263C446 264 446 264 447 265C451 270 456 276 460 281C464 286 463 292 458 296C457 296 421 323 418 322C418 322 416 311 415 311C417 309 441 289 445 287C444 286 435 275 434 274C432 276 431 277 429 278C427 275 424 272 422 268C421 268 421 267 420 267C420 267 420 268 420 269C420 271 420 274 420 276C420 277 420 277 420 278C420 284 419 290 419 296C419 299 418 303 418 307C418 307 418 310 418 310Z"
            fill="black"
          />
          {stage > 2 && (
            <Path
              id="1+1"
              d="M161 161C158 161 151 160 151 160C139 158 130 152 123 143C121 140 119 137 119 133C118 128 119 123 120 118C121 116 121 115 123 115C120 113 119 111 117 108C109 91 116 72 133 62C135 60 140 59 140 59C142 59 143 58 143 56C145 50 149 46 154 43C158 41 161 40 165 38C170 36 175 35 181 35C185 36 188 36 192 37C194 38 195 37 197 36C198 36 200 35 201 34C207 31 212 30 218 30C224 30 231 31 237 31C247 33 255 38 262 46C266 50 270 56 272 62C272 63 273 65 275 65C275 65 276 65 277 66C281 68 285 70 288 74C292 79 295 85 297 91C299 96 300 102 299 107C296 117 291 126 282 131C281 133 280 134 280 135C278 144 273 150 266 155C258 159 250 162 242 162C235 162 228 161 221 161C221 163 218 165 217 165C213 169 207 170 202 171C196 172 191 171 186 170C181 170 177 167 173 164C172 164 172 163 172 161C168 161 165 161 161 161ZM210 114C210 104 210 95 210 85C210 84 211 83 210 82C210 81 209 80 208 80C207 81 206 81 206 82C202 85 198 89 195 93C194 94 194 95 194 96C195 96 196 97 197 97C198 96 199 95 200 94C202 92 203 90 206 88C206 90 206 91 206 92C206 100 206 107 206 114C206 117 207 118 208 118C209 118 210 117 210 114ZM132 81C128 85 124 89 120 93C119 94 119 95 120 96C120 96 122 97 123 96C124 96 125 94 126 93C127 92 129 90 131 88C131 90 131 91 131 92C131 100 131 107 131 114C131 115 131 116 131 116C131 117 132 118 133 118C134 118 135 117 136 116C136 116 136 115 136 115C136 104 136 94 136 83C136 81 135 81 132 81ZM277 100C279 98 281 96 282 94C284 90 284 87 281 84C277 79 269 80 266 86C265 87 265 88 266 89C267 90 268 90 270 88C271 87 272 86 273 86C275 85 277 85 278 87C279 88 279 90 278 91C278 92 277 93 277 93C275 95 274 96 272 98C270 101 269 105 271 108C272 109 274 109 275 109C277 108 276 107 276 105C275 104 275 102 277 100ZM163 101C162 102 161 102 160 102C159 102 158 102 157 102C155 102 154 104 154 105C154 107 156 107 157 107C159 107 161 107 164 107C164 110 164 114 164 117C167 117 167 116 168 113C168 111 168 109 168 107C169 107 170 107 171 107C172 107 173 107 174 107C175 106 177 106 176 104C176 102 175 102 173 102C172 102 170 102 168 102C168 99 168 97 168 95C168 94 168 92 166 92C165 92 164 93 164 94C164 95 164 96 164 96C163 98 163 99 163 101ZM245 106C247 106 249 106 251 106C253 106 253 106 253 103C247 103 241 103 235 103C233 103 233 103 233 106C237 106 241 106 245 106ZM242 93C240 93 238 93 236 93C234 93 234 94 233 96C234 96 235 97 235 97C240 97 246 97 251 97C253 97 253 96 253 93C249 93 246 93 242 93ZM275 114C275 114 274 114 274 114C272 115 271 115 272 117C272 119 273 120 274 120C276 120 277 119 277 117C277 116 277 115 275 114ZM275 165C268 165 259 176 268 187C297 188 290 169 275 165Z"
              fill="black"
            />
          )}
          <Path
            id="face"
            d="M385 206C387 205 388 205 389 204C390 204 391 203 392 203C402 197 412 191 421 183C423 187 427 187 431 186C435 185 438 183 441 181C446 176 450 170 453 164C453 164 454 163 454 162C456 156 453 152 446 153C446 153 445 153 444 153C443 153 443 153 442 153C443 153 443 152 443 152C443 151 443 151 444 150C448 138 452 126 453 113C454 103 453 94 448 87C446 83 443 80 440 78C432 70 423 65 413 64C402 63 392 63 381 67C374 69 369 73 364 79C361 84 358 90 355 96C348 115 345 136 344 156C344 157 344 158 344 159C344 159 344 160 344 161C344 161 344 160 344 160V163C344 163 344 163 344 163C344 164 344 165 345 167C345 169 345 171 345 173C347 182 350 190 355 197C358 202 363 205 370 207C373 207 378 208 385 206Z"
            fill="black"
          />
          {stage === 8 && (
            <Path
              id="think-8"
              d="M347 176C347 175 346 173 344 172C342 171 339 168 337 167C335 166 332 166 329 166C327 166 325 173 324 175C323 177 324 184 325 189C326 194 328 198 329 203C330 204 330 205 331 207C329 208 322 211 321 212C308 220 296 229 284 237C280 243 280 250 287 251C293 252 305 249 309 249C309 250 309 256 309 255C312 256 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 311 226 311 228L309 241C310 240 311 238 312 237C313 236 316 232 317 231C322 227 336 217 340 213C344 208 342 205 340 203C343 199 346 188 337 181L339 176C340 176 345 179 345 179C347 178 347 177 347 176Z"
              fill="black"
            />
          )}
          {stage === 7 && (
            <Path
              id="think-7"
              d="M344 163L345 161C345 160 342 160 342 160C341 159 340 159 340 159C338 157 336 156 334 155L334 155C331 153 329 153 326 153C324 153 323 154 322 156C320 161 318 166 320 171C322 176 324 181 326 186C326 187 327 189 327 190C328 191 328 192 328 192C328 192 328 193 328 193C327 194 326 194 325 195C324 196 322 197 320 198C308 206 295 215 283 223C282 224 281 225 280 226C277 232 278 236 285 237C287 238 288 238 289 238C290 238 291 238 292 238C293 239 294 239 295 239C299 239 303 240 307 240C307 242 306 248 306 247C310 248 336 250 342 250C347 245 345 231 344 229C343 228 313 220 312 219C312 220 309 224 309 225L306 225L306 225C307 224 308 223 310 222C311 220 319 214 320 213C325 209 332 204 336 200C340 197 340 194 337 190C341 181 341 174 332 167L334 163C335 163 336 164 337 164C339 165 342 165 344 163Z"
              fill="black"
            />
          )}
          {stage === 6 && (
            <Path
              id="think-6"
              d="M344 166C344 164 343 163 341 162C339 161 339 160 337 159C335 158 333 158 330 159C328 159 325 166 324 167C324 175 327 187 328 192C329 194 330 198 331 199C318 207 297 221 285 229C280 234 279 241 286 243C294 246 302 244 307 245C307 246 307 249 307 251C311 252 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 314 221 313 223L309 241C310 240 311 238 312 237C313 236 315 226 317 225C321 221 337 209 340 206C343 203 343 199 340 196C344 185 344 180 337 174L339 169C340 169 344 171 344 171C346 170 344 167 344 166Z"
              fill="black"
            />
          )}
          {stage === 5 && (
            <Path
              id="think-5"
              d="M347 171C347 170 346 170 344 169C342 167 342 166 340 165C338 165 336 164 334 165C332 165 328 172 327 174C326 177 326 178 327 183C327 188 328 200 330 205C321 209 296 230 284 240C280 246 281 251 288 253C294 253 306 250 310 250C310 251 309 255 310 256C313 257 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 311 227 311 229L309 241C310 240 311 238 312 237C313 236 316 232 317 231C322 227 337 213 339 211C340 209 340 207 339 204C342 199 347 191 339 180L342 176C343 176 345 179 346 179C348 178 347 173 347 171Z"
              fill="black"
            />
          )}
          {stage === 4 && (
            <Path
              id="think-4"
              d="M347 171C347 170 346 168 344 167C342 166 343 166 341 165C339 164 338 164 335 165C333 165 329 172 328 174C328 177 328 178 328 184C328 189 330 200 332 205C330 206 322 210 320 211C308 220 295 228 283 236C280 242 280 247 287 249C293 250 305 248 308 248C308 250 308 253 309 254C312 255 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 311 226 311 228L309 241C310 240 311 238 312 237C313 236 315 232 316 230C321 227 336 216 339 212C343 209 343 206 341 202C344 197 349 188 341 180L343 176C344 176 346 176 346 177C349 176 347 173 347 171Z"
              fill="black"
            />
          )}
          {stage === 3 && (
            <Path
              id="think-3"
              d="M344 166C344 164 343 163 341 162C339 161 339 160 337 159C335 158 333 158 330 159C328 159 325 166 324 167C324 175 327 187 328 192C329 194 330 198 331 199C318 207 297 221 285 229C280 234 279 241 286 243C294 246 302 244 307 245C307 246 307 249 307 251C311 252 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 314 221 313 223L309 241C310 240 311 238 312 237C313 236 315 226 317 225C321 221 337 209 340 206C343 203 343 199 340 196C344 185 344 180 337 174L339 169C340 169 344 171 344 171C346 170 344 167 344 166Z"
              fill="black"
            />
          )}
          {stage === 2 && (
            <Path
              id="think-2"
              d="M344 166C344 164 343 163 341 162C339 161 333 159 332 157C329 157 328 157 325 157C323 158 321 165 321 166C320 169 321 172 322 176C323 182 327 187 328 192C329 194 330 196 331 197C318 205 297 219 285 227C281 232 278 239 285 241C293 244 302 242 307 243C307 245 307 247 307 250C310 250 341 248 346 248C351 244 349 229 347 227C347 225 343 228 342 228C341 228 314 221 313 223L309 241C310 240 311 238 312 237C313 236 313 226 314 225C319 221 336 208 340 203C344 199 342 196 339 194C343 185 343 179 334 172L335 167C336 167 341 168 342 169C344 168 344 167 344 166Z"
              fill="black"
            />
          )}
          {stage === 1 && (
            <Path
              id="think-1"
              d="M349 182L349 178C348 177 348 177 346 177C345 176 340 172 338 171C336 170 335 170 332 170C330 171 327 177 326 178C325 181 326 184 326 188C328 193 328 198 329 203C330 204 331 207 332 209C332 209 330 211 329 211C327 212 325 213 324 215C311 223 299 231 287 240C286 241 284 242 283 243C279 249 283 255 288 255C295 256 306 252 310 252C310 253 311 259 311 258C315 259 341 247 346 247C351 243 349 229 347 227C347 225 343 228 342 228C341 228 311 226 311 228L310 241C311 240 312 239 313 238C315 237 323 231 324 230C329 226 335 221 339 217C343 212 341 211 340 208C346 198 347 192 338 186L341 181C342 181 343 182 344 183C346 183 347 184 349 182Z"
              fill="black"
            />
          )}
        </Svg>
      </View>
    );
  }
}
