import Svg, {Circle, G, Path, Rect} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

const paths = ['', '', '', '', '', '', '', '', ''];

export const Play = ({positive, frame}: VerbProps) => {
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
          id="1"
          d="M137 303C139 303 141 304 142 303C145 303 146 304 148 306C156 319 163 331 175 341C176 341 177 342 177 343C178 346 172 356 169 357C162 360 155 362 148 365C142 367 139 371 138 376C136 388 134 400 132 412C131 415 131 418 135 419C137 419 138 420 138 422C138 423 138 424 138 425C136 440 139 455 143 469C147 483 161 507 164 509C168 512 188 515 204 513C214 509 224 511 241 498C247 496 283 486 290 484C298 487 320 497 327 501C341 508 355 514 369 521C375 523 379 528 383 532C387 535 390 537 395 535C396 535 397 535 398 535C408 535 414 531 418 523C418 523 419 522 420 521C425 528 430 524 435 521C440 517 445 514 450 512C455 510 458 506 461 501C463 497 462 495 457 495C453 496 449 498 446 500C442 501 439 503 436 504C432 506 429 505 425 503C389 488 356 465 322 447C318 445 315 445 311 446C291 452 271 457 251 462C249 463 247 462 246 460C241 453 255 456 251 449C248 442 231 425 232 418C232 418 232 417 233 417C239 417 238 412 238 409C237 399 237 389 237 379C236 373 233 369 227 368C217 366 209 361 200 358C196 356 196 353 195 350C195 346 198 347 201 346C212 342 220 334 227 325C239 307 245 286 249 265C251 253 252 241 250 229C248 216 242 205 230 198C211 187 191 182 170 190C156 195 147 203 142 216C138 227 136 238 136 250C136 254 136 257 135 261C133 262 132 261 131 260C125 259 120 261 120 266C120 279 123 291 133 301C134 302 136 302 137 303ZM364 487C380 495 395 503 412 511C410 512 410 513 409 513C397 518 386 517 375 511C362 504 350 497 338 491C326 484 313 477 300 470C309 465 316 462 325 468C337 475 350 481 364 487Z"
          fill="black"
        />

        <G rotation={stage < 4 ? -1 : 0} translate={stage < 4 ? -5 : 0}>
          <Path
            id="hand-10"
            d="M237 441C243 432 272 427 276 425C280 424 284 422 286 418C286 415 286 409 287 407C288 404 292 400 294 397C297 395 299 393 303 395C305 396 308 395 310 393L313 391C315 388 320 396 322 400L326 411C326 413 325 417 321 419C317 421 314 423 310 425C305 426 301 427 297 427C294 427 292 428 290 430C285 435 273 442 262 449C262 451 247 458 245 459C243 458 240 459 237 459C234 458 232 456 232 452C233 448 234 445 237 441Z"
            fill="black"
          />
          <Path
            id="joystick"
            d="M255 413C248 425 239 432 234 430C228 427 228 413 234 399C241 385 251 376 257 379C259 380 260 382 261 384C265 383 269 382 274 382C279 382 283 383 287 384C288 382 289 380 291 379C297 376 307 385 314 399C320 413 321 427 314 430C309 432 300 425 293 413C288 416 281 418 274 418C267 418 260 416 255 413Z"
            fill="#DEFF15"
          />
          <Path
            id="hand-10_2"
            d="M201 421C197 421 156 421 149 428C144 431 143 434 143 438C142 441 143 444 146 445C148 447 151 447 154 447C155 447 171 443 173 442C184 437 208 431 213 428C215 427 218 427 220 427C225 427 229 426 234 427C239 427 242 424 247 423C250 423 252 420 252 416C252 412 252 408 251 405C251 401 248 392 245 394C243 394 242 396 241 397C238 397 236 398 233 396C230 394 227 395 225 397C222 399 216 403 216 405C215 407 212 413 212 415C209 419 205 420 201 421Z"
            fill="black"
          />
        </G>

        <Path
          id="Intersect"
          d="M523.61 100H360V350H595.852C598.58 333.74 600 317.036 600 300C600 223.165 571.115 153.076 523.61 100Z"
          fill="black"
        />
        <Path
          id="Intersect_2"
          d="M527.987 105H365V345H596.647C598.855 330.321 600 315.294 600 300C600 225.554 572.883 157.441 527.987 105Z"
          fill="#B3F1FF"
        />

        {(stage < 3 || stage > 7) && (
          <G id="?" x={-72 + (-3 + stage) ** 2 * 6}>
            <Rect
              id="Rectangle 3"
              x="461.5"
              y="149.5"
              width="46"
              height="46"
              rx="5.5"
              fill={stage < 3 ? '#777' : '#FFD66C'}
              stroke="black"
            />
            {stage > 3 && (
              <Path
                d="M483 178V178C483 176 483 175 483 174C483 173 484 172 484 171C485 171 486 170 487 170C487 169 488 169 488 169C489 168 489 168 489 167C489 166 490 166 490 165C490 164 489 163 489 163C489 162 488 162 487 161C487 161 486 161 485 161C484 161 484 161 483 161C482 162 482 162 481 163C481 163 480 164 480 165H477C477 164 477 162 478 161C479 160 480 159 481 159C482 158 484 158 485 158C487 158 488 158 489 159C490 160 491 160 492 162C492 163 493 164 493 165C493 166 493 167 492 168C492 169 492 169 491 170C490 171 490 171 489 172C488 172 488 173 487 173C487 174 486 174 486 175C486 176 486 177 486 178V178H483ZM484 186C484 186 483 186 483 185C482 185 482 184 482 184C482 183 482 182 483 182C483 181 484 181 484 181C485 181 485 181 486 182C486 182 487 183 487 184C487 184 487 184 486 185C486 185 486 185 485 186C485 186 485 186 484 186Z"
                fill="#9F7E29"
              />
            )}
          </G>
        )}

        <G id="block" translateX={195 - stage * 25}>
          <Rect
            id="Rectangle 4"
            x="365"
            y="295"
            width="50"
            height="50"
            fill="#CA6E3B"
          />
          <Path
            d="M391 299V311H411V314H403V326H411V329H391V341H388V329H369V326H376V314H369V311H388V299H391ZM379 326H400V314H379V326Z M365 295H415V345H365V295ZM368 298V342H412V298H368Z"
            fill="#595959"
          />
        </G>

        <G id="mario" translateX={55} translateY={-1 * (4 - stage) ** 2 * 4}>
          <Path
            id="Rectangle 9"
            d="M430 273H432V283H422V285H416V287H408V285H402V287H400V281H404V279H406V277H402V275H400V273H402V271H412V269H408V263H410V261H424V263H426V261H432V267H430V269H428V271H426V277H430V273Z"
            fill="#99812A"
          />
          <Path
            id="Rectangle 5"
            d="M408 283H410V281H408V277H412V279H414V277H416V273H414V271H416V273H418V275H424V273H422V271H424V273H426V277H428V283H422V285H416V287H408V283Z"
            fill="#E73223"
          />
          <Path
            id="Rectangle 6"
            d="M410 259H412V257H422V259H428V261H410V259Z"
            fill="#E53223"
          />
          <Rect
            id="Rectangle 7"
            x="418"
            y="277"
            width="2"
            height="2"
            fill="#F5C443"
          />
          <Rect
            id="Rectangle 8"
            x="424"
            y="277"
            width="2"
            height="2"
            fill="#F5C443"
          />
          <Path
            id="Rectangle 10"
            d="M426 255H432V261H428V259H426V255Z"
            fill="#F6C443"
          />
          <Path
            id="Rectangle 11"
            d="M410 263H412V271H426V269H420V267H422V265H424V267H430V265H426V263H424V261H422V265H420V261H416V263H414V265H416V267H412H410V263Z"
            fill="#F5C443"
          />
          <Rect
            id="Rectangle 12"
            x="420"
            y="261"
            width="2"
            height="4"
            fill="black"
          />
          <Path
            id="Rectangle 13"
            d="M398 275H404V279H402V281H400V279H398V275Z"
            fill="#F5C443"
          />
        </G>

        {stage === 7 && <Path id="7" d="" fill="black" />}
      </Svg>
    </View>
  );
};
