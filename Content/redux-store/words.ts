import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';

import {words} from '../data/words';

type WordsType = typeof words;

const allWords = new Map<string, number>();

const UserName = 'Hero';

function generateWordsIndex(wordsObj: WordsType, prefix = 'Hero'): void {
  for (const key in wordsObj) {
    const subWords = wordsObj[key as keyof WordsType];
    if (typeof subWords === 'object') {
      generateWordsIndex(subWords, `${prefix};${key}`);
    } else if (typeof subWords === 'string') {
      allWords.set(`${prefix};${key}`, 0);
    }
  }
}

generateWordsIndex(words, UserName);

const allW: {key: string; value: number}[] = [];

for (const [key, value] of allWords.entries()) {
  if (key.split(';')[0] === 'Hero') {
    if (!mmkv.contains(key)) {
      mmkv.set(key, 0);
      if (key.split(';')[0] === 'Hero') {
        allW.push({key: key.slice(key.indexOf(';') + 1), value: 0});
      }
    } else {
      const v = mmkv.getNumber(key)!;
      allW.push({key: key.slice(key.indexOf(';') + 1), value: v});
    }
  }
}

type WordsState = {
  [lessonId: string]: {
    words: {
      [wordGroup: string]: {
        [word: string]: [string, number, string];
      };
    };
    progress: number;
    nextStudyWord: never[];
  };
};
type WordState = {
  words: {
    [wordGroup: string]: {
      [word: string]: [string, number, string];
    };
  };
};

function createInitialState(
  allW: {key: string; value: number}[],
  words: WordsType,
): any {
  const initialState: WordsState = {};

  for (const item of allW) {
    const [prefix, category, subKey] = item.key.split(';');

    if (!initialState[prefix]) {
      initialState[prefix] = {
        words: {},
        progress: 0,
        nextStudyWord: [],
      };
    }

    if (!initialState[prefix].words[category]) {
      initialState[prefix].words[category] = {};
    }

    initialState[prefix].words[category][subKey] = [
      subKey,
      item.value,
      words[prefix][category][subKey],
    ];
  }

  return initialState;
}

const initialState = createInitialState(allW, words);
const calculateProgress = (state: WordsState, lessonId: string): number => {
  const {words} = state[lessonId];
  let totalStages = 0;
  let totalWords = 0;

  Object.keys(words).forEach(key => {
    Object.values(words[key]).forEach(([_, stage]) => {
      totalStages += stage < 4 ? stage : 3;
      totalWords++;
    });
  });

  return Math.round((totalStages / (totalWords * 3)) * 100 * 100) / 100;
};

const chooceNewWord = (words: {
  [wordGroup: string]: {[word: string]: [string, number, string]};
}):
  | [
      [string, number, string],
      [string, string, string, string, string, string],
      string,
    ]
  | [] => {
  const lists = Object.entries(words).map(([listName, list]) => ({
    name: listName,
    data: Object.entries(list)
      .filter(([_, [__, stage]]) => {
        return stage < 3;
      })
      .map(([el]) => el),
  }));

  const nonEmptyLists = lists.filter(list => list.data.length > 0);

  if (nonEmptyLists.length === 0) {
    return [];
  }

  const selectedList =
    nonEmptyLists[Math.floor(Math.random() * nonEmptyLists.length)];
  const word =
    selectedList.data[Math.floor(Math.random() * selectedList.data.length)];

  const dataAll = Object.values(words[selectedList.name]).flatMap(([_]) => _);

  const getRandomItems = (
    array: string[],
    count: number,
  ): [string, string, string, string, string, string] => {
    array.splice(array.indexOf(word), 1);
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    const newData = shuffled.slice(0, count);
    newData.splice(3, 0, word);
    newData.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random());
    return newData as [string, string, string, string, string, string];
  };

  const dataNew = getRandomItems(dataAll, 5);
  return [words[selectedList.name][word], dataNew, selectedList.name];
};

Object.keys(initialState).forEach(lessonId => {
  initialState[lessonId].progress = calculateProgress(initialState, lessonId);
  initialState[lessonId].nextStudyWord = chooceNewWord(
    initialState[lessonId].words,
  );
});

function clearWordsProgressLesson(obj: {
  [wordGroup: string]: {[word: string]: [string, number, string]};
}): {[wordGroup: string]: {[word: string]: [string, number, string]}} {
  const newObj: {
    [wordGroup: string]: {[word: string]: [string, number, string]};
  } = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = {};
    Object.entries(obj[key]).forEach(([subKey, [_, __, subValue]]) => {
      newObj[key][subKey] = [subKey, 0, subValue];
    });
  });

  return newObj;
}

const updateStateAndChooseNewWord = (
  state: typeof initialState,
  lessonId: string,
) => {
  state[lessonId].progress = calculateProgress(state, lessonId);
  state[lessonId].nextStudyWord = chooceNewWord(state[lessonId].words);
};

export const ACTIONS = {
  SET: 1,
  RESET: 0,
  CLEAR: 2,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    setWordsLesson: (state, action) => {
      const {lessonId, word, listName, action: newAction} = action.payload;
      switch (newAction) {
        case ACTIONS.SET:
          state[lessonId].words[listName][word][1] += 1;
          break;
        case ACTIONS.RESET:
          state[lessonId].words[listName][word][1] = 0;
          break;
        default:
          state;
          break;
      }
      mmkv.set(
        `${UserName};${[lessonId]};${listName};${word}`,
        state[lessonId].words[listName][word][1],
      );

      updateStateAndChooseNewWord(state, lessonId);
    },
    clearWordsProgress: (state, action) => {
      const {lessonId} = action.payload;

      allW.forEach(({key}) => {
        mmkv.set(`${UserName};${key}`, 0);
      });
      state[lessonId].words = clearWordsProgressLesson(state[lessonId].words);
      updateStateAndChooseNewWord(state, lessonId);
    },
  },
});

export const {setWordsLesson, clearWordsProgress} = wordsSlice.actions;

export default wordsSlice.reducer;
