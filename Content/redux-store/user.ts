import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';
import {v4 as uuidv4} from 'uuid';

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import type {RootState} from './store';

if (!mmkv.contains('theme')) {
  mmkv.set('theme', false);
}

// const initialState = {
//   isDarkTheme: mmkv.getBoolean('theme') || false,
// };

interface User {
  id: string;
  name: string;
  progress: number;
  studyWordsProgress: [string, number, string][];
}

type WordsState = {
  users: Record<string, User>;
  // ...
};

const initialState: WordsState = {
  users: {},
  // ...
};

const wordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const {id} = action.payload;
      state.users[id] = action.payload;
    },
    // ... other reducers
  },
});
