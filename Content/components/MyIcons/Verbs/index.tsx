import React, {ComponentType, useState, useEffect} from 'react';

import {Run} from './Run';
import {Walk} from './Walk';
import {Love} from './Love';
import {Think} from './Think';
import {Dance} from './Dance';
import {Eat} from './Eat';
import {Sit} from './Sit';
import {Stand} from './Stand';
import {Open} from './Open';
import {Close} from './Close';
import {Sleep} from './Sleep';
import {Drink} from './Drink';
import {Ask} from './Ask';
import {Read} from './Read';
import {Want} from './Want';
import {Like} from './Like';
import {Study} from './Study';
import {Jump} from './Jump';
import {Give} from './Give';
import {Bring} from './Bring';
import {Forget} from './Forget';
import {Help} from './Help';
import {Pay} from './Pay';
import {Lose} from './Lose';
import {Buy} from './Buy';
import {Fall} from './Fall';
import {Grow} from './Grow';
import {Travel} from './Travel';
import {Come} from './Come';
import {Break} from './Break';
import {Hear} from './Hear';
import {Speak} from './Speak';
import {Tell} from './Tell';
import {Say} from './Say';
import {Turn} from './Turn';
import {Meet} from './Meet';
import {Begin} from './Begin';
import {Write} from './Write';
import {Start} from './Start';
import {See} from './See';
import {Send} from './Send';
import {Understand} from './Understand';
import {Talk} from './Talk';
import {Fly} from './Fly';
import {Look} from './Look';
import {Have} from './Have';
import {Know} from './Know';
import {Work} from './Work';
import {Make} from './Make';

export interface VerbProps {
  frame: number;
  positive: number;
}

interface VerbMainProps {
  positive: number;
  verb: string;
}

const verbComponents: {[key: string]: ComponentType<any>} = {
  run: Run,
  walk: Walk,
  love: Love,
  think: Think,
  dance: Dance,
  sit: Sit,
  stand: Stand,
  open: Open,
  close: Close,
  sleep: Sleep,
  drink: Drink,
  ask: Ask,
  eat: Eat,
  read: Read,
  want: Want,
  like: Like,
  study: Study,
  jump: Jump,
  give: Give,
  bring: Bring,
  forget: Forget,
  help: Help,
  pay: Pay,
  lose: Lose,
  buy: Buy,
  fall: Fall,
  grow: Grow,
  travel: Travel,
  come: Come,
  break: Break,
  hear: Hear,
  speak: Speak,
  tell: Tell,
  say: Say,
  turn: Turn,
  meet: Meet,
  begin: Begin,
  write: Write,
  start: Start,
  see: See,
  send: Send,
  understand: Understand,
  talk: Talk,
  fly: Fly,
  look: Look,
  have: Have,
  know: Know,
  work: Work,
  make: Make,
};

export const Verb = React.memo(({positive, verb}: VerbMainProps) => {
  const [frame, setFrame] = useState(0);

  const VerbComponent = verbComponents[verb];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFrame(prevFrame => {
        if (prevFrame > 100_000_000) return 1;
        return prevFrame + 1;
      });
    }, 125);
    return () => clearTimeout(timeoutId);
  }, [frame]);

  if (!VerbComponent) {
    return null; // Handle unknown verbs if needed
  }

  return <VerbComponent positive={positive} frame={frame} />;
});
