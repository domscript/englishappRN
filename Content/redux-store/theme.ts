import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';
import type {RootState} from './store';

if (!mmkv.contains('theme')) {
  mmkv.set('theme', false);
}

const initialState = {
  isDarkTheme: mmkv.getBoolean('theme') || false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    darkTheme: state => {
      const theme = true;
      state.isDarkTheme = theme;

      mmkv.set('theme', theme);
    },
    lightTheme: state => {
      const theme = false;
      state.isDarkTheme = theme;

      mmkv.set('theme', theme);
    },
  },
});

export const selectTheme = (state: RootState) => {
  return state.theme;
};

export const {darkTheme, lightTheme} = themeSlice.actions;

export default themeSlice.reducer;
