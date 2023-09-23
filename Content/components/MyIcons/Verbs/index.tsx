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

export type Stages = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface VerbProps {
  stage: Stages;
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
};

export const Verb = React.memo(({positive, verb}: VerbMainProps) => {
  const [stage, setStage] = useState<Stages>(1);
  // const [stage, setStage] = useState(false);

  const VerbComponent = verbComponents[verb];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStage(prevStage => {
        if (stage < 8) return (prevStage + 1) as Stages;
        return 1 as Stages;
      });
    }, 125);
    return () => clearTimeout(timeoutId);
  }, [stage]);

  if (!VerbComponent) {
    return null; // Handle unknown verbs if needed
  }

  return <VerbComponent positive={positive} stage={stage} />;
});
