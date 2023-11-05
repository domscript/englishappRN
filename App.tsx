import {Provider} from 'react-redux';
import {MMKV} from 'react-native-mmkv';

export const mmkv = new MMKV();

import {store} from './Content/redux-store/store';
import {AppStore} from './Content/Navigation';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppStore />
    </Provider>
  );
}
