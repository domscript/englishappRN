import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';
import {Intro} from '../components/Intro';

export const ModalScreen = () => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={closeModal}>
      <View
        style={{
          backgroundColor: isDarkTheme ? Colors.gray80 : Colors.gray10,
        }}>
        <Intro onPress={closeModal} />
      </View>
    </Modal>
  );
};
