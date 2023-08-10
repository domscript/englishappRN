import {createSlice} from '@reduxjs/toolkit';
import {mmkv} from '../../App';

const patternString = createPatternString();

if (!mmkv.contains('lessons')) {
  mmkv.set('lessons', patternString);
}

const initialState = {
  user1: mmkv.getString('lessons') || patternString,
};

export const ACTIONS = {
  SETDATA1: true,
  SETDATA0: false,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: initialState,
  reducers: {
    setLessonData: (state, action) => {
      const {lessonId, action: newAction} = action.payload;
      const progress = move3Forward(state['user1'], lessonId, newAction);
      state['user1'] = progress;

      mmkv.set('lessons', progress);
    },
  },
});

// export const selectTheme = (state: RootState) => {
//   return state.lessons;
// };

export const {setLessonData} = lessonsSlice.actions;

export default lessonsSlice.reducer;

function move3Forward(
  patternString: string,
  targetChar: string,
  correct = false,
) {
  const [onePart, twoPart] = patternString.split(targetChar);

  const modify = twoPart.slice(0, 100);
  const rest = twoPart.slice(100);
  let indexOf3 = modify.indexOf('3');
  if (indexOf3 === -1) {
    indexOf3 = modify.indexOf('4');
  }

  if (indexOf3 === 99) {
    let three = '3';
    let num = '0';
    if (modify[0] === '2') three = '4';
    if (correct) num = '1';

    return (
      onePart +
      targetChar +
      three +
      modify.slice(1, 99) +
      num +
      rest
    ).trimEnd();
  }
  let three = '3';
  let num = '0';
  if (modify[indexOf3 + 1] === '2') three = '4';
  if (correct) num = '1';
  return (
    onePart +
    targetChar +
    modify.slice(0, indexOf3) +
    num +
    three +
    modify.slice(indexOf3 + 2) +
    rest
  ).trimEnd();
}

export function createPatternString() {
  const lessons = 'ABCDEFGHIJKLMNOP';
  let patternString = '';

  for (let i = 0; i < lessons.length; i++) {
    const letter = lessons[i];
    patternString += `${letter}4`.padEnd(101, '2');
  }

  return patternString;
}
