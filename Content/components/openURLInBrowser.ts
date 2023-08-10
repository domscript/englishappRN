import {Linking} from 'react-native';

const openURLInBrowser = (url: string): void => {
  Linking.openURL(url).catch(error => {
    console.error('Error opening URL: ', error);
  });
};

export default openURLInBrowser;
