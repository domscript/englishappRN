import {configureStore} from '@reduxjs/toolkit';

import themeReducer from './theme';
import wordsReducer from './words';
import lessonsReducer from './lessons';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    words: wordsReducer,
    lessons: lessonsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: counterReducer}
export type AppDispatch = typeof store.dispatch;
