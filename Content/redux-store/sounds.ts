import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';
import type {RootState} from './store';

if (!mmkv.contains('sounds')) {
  mmkv.set('sounds', true);
}

const initialState: {isSound: boolean} = {
  isSound: mmkv.getBoolean('sounds') || true,
};

const soundSlice = createSlice({
  name: 'sounds',
  initialState: initialState,
  reducers: {
    setSounds: state => {
      const sounds = !state.isSound;
      state.isSound = sounds;

      mmkv.set('sounds', sounds);
    },
    // lightsound: state => {
    //   const sounds = false;
    //   state.isSound = sounds;

    //   // mmkv.set('sounds', sounds);
    // },
  },
});

export const toggleSounds = (state: RootState) => {
  return state.sounds;
};

export const {setSounds} = soundSlice.actions;

export default soundSlice.reducer;
