import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';
import type {RootState} from './store';

if (!mmkv.contains('sounds')) {
  mmkv.set('sounds', true);
}

const initialState: {isSound: boolean} = {
  isSound: mmkv.getBoolean('sounds') === false ? false : true,
};

const soundSlice = createSlice({
  name: 'sounds',
  initialState: initialState,
  reducers: {
    turnSounds: state => {
      const sounds = true;
      state.isSound = sounds;

      mmkv.set('sounds', sounds);
    },
    turnoffSounds: state => {
      const sounds = false;
      state.isSound = sounds;

      mmkv.set('sounds', sounds);
    },
  },
});

export const toggleSounds = (state: RootState) => {
  return state.sounds;
};

export const {turnSounds, turnoffSounds} = soundSlice.actions;

export default soundSlice.reducer;
