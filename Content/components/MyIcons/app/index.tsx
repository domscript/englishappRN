import React, {ComponentType} from 'react';
import {View} from 'react-native';

import {List} from './List';
import {Test} from './Test';
import {Gear} from './Gear';
import {Info} from './Info';
import {Star} from './Star';
import {Sound} from './Sound';
import {StarO} from './StarO';
import {Study} from './Study';
import {Level2} from './Level2';
import {LevelF} from './LevelF';
import {Delete} from './Delete';
import {Rocket} from './Rocket';
import {Refresh} from './Refresh';
import {Youtube} from './Youtube';
import {SoundOff} from './SoundOff';
import {OpenBook} from './OpenBook';
import {ArrowLeft} from './ArrowLeft';
import {ArrowRight} from './ArrowRight';
import {FolderGear} from './FolderGear';
import {PizzaSlice} from './PizzaSlice';
import {ListCheck} from './ListCheck';
import {RocketLaunch} from './RocketLaunch';
import {LightbulbOn} from './LightbulbOn';

export interface IconProps {
  color: string;
  size: number;
}

interface IconMainProps {
  name:
    | 'star'
    | 'star-o'
    | 'list'
    | 'list-check'
    | 'rocket'
    | 'rocket-launch'
    | 'test'
    | 'gear'
    | 'study'
    | 'youtube'
    | 'info-circle'
    | 'delete'
    | 'open-book'
    | 'lightbulb-on'
    | 'folder-gear'
    | 'refresh'
    | 'arrow-left'
    | 'arrow-right'
    | 'sound'
    | 'sound-off'
    | 'level-2'
    | 'level-f'
    | 'pizza-slice';
  color?: string;
  size: number;
}

const iconComponents: {[key: string]: ComponentType<any>} = {
  star: Star,
  'star-o': StarO,
  list: List,
  'list-check': ListCheck,
  rocket: Rocket,
  'rocket-launch': RocketLaunch,
  test: Test,
  gear: Gear,
  study: Study,
  youtube: Youtube,
  'info-circle': Info,
  delete: Delete,
  'open-book': OpenBook,
  'lightbulb-on': LightbulbOn,
  'folder-gear': FolderGear,
  refresh: Refresh,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  sound: Sound,
  'level-2': Level2,
  'level-f': LevelF,
  'sound-off': SoundOff,
  'pizza-slice': PizzaSlice,
};

export const MyIcon = ({
  name = 'rocket',
  color = '#000',
  size = 10,
}: IconMainProps) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null; // Handle unknown verbs if needed
  }

  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          margin: 5,
        },
      ]}>
      <IconComponent color={color} size={size} />
    </View>
  );
};
