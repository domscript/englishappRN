import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';
import type {RootState} from './store';

if (!mmkv.contains('help')) {
  mmkv.set('help', true);
}

const initialState: {isEasy: boolean} = {
  isEasy: mmkv.getBoolean('help') || true,
};

const helpSlice = createSlice({
  name: 'help',
  initialState: initialState,
  reducers: {
    easyGame: state => {
      const help = true;
      state.isEasy = help;

      mmkv.set('help', help);
    },
    normalGame: state => {
      const help = false;
      state.isEasy = help;

      mmkv.set('help', help);
    },
  },
});

export const selectLevel = (state: RootState) => {
  return state.help;
};

export const {easyGame, normalGame} = helpSlice.actions;

export default helpSlice.reducer;
