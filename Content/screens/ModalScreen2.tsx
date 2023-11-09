import React from 'react';
import {View, Modal} from 'react-native';
import {Alert, StyleSheet, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux-store/store';
import Colors from '../constants/Colors';
import {LessonDone} from '../components/LessonDone';
import {hideModal} from '../redux-store/lessons';

export const ModalScreen2 = () => {
  const {isDarkTheme, modal} = useSelector((state: RootState) => ({
    isDarkTheme: state.theme.isDarkTheme,
    modal: state.lessons.modal,
  }));
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      transparent={true}
      visible={modal}
      animationType="slide"
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: isDarkTheme ? Colors.gray80 : Colors.gray10,
            },
          ]}>
          <LessonDone onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
