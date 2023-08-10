import React, {ComponentType} from 'react';

import Run from './Run';
import Walk from './Walk';
import Love from './Love';
import Think from './Think';
import Dance from './Dance';
import Eat from './Eat';
import Sit from './Sit';
import Stand from './Stand';
import Open from './Open';
import Close from './Close';
import Sleep from './Sleep';
import Drink from './Drink';
import Ask from './Ask';
import Read from './Read';

export type Stages = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface VerbProps {
  stage: Stages;
  positive: number;
}

interface VerbMainProps {
  positive: number;
  stage: Stages;
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
};

export const Verb = ({positive, stage, verb}: VerbMainProps) => {
  const VerbComponent = verbComponents[verb];

  if (!VerbComponent) {
    return null; // Handle unknown verbs if needed
  }

  return <VerbComponent positive={positive} stage={stage} />;
};
