import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';
import {Verb} from '../MyIcons/Verbs';

export const VerbPicker = ({
  data,
  chooceHandler,
  selectedValue,
}: {
  data: string[];
  chooceHandler: (item: string) => void;
  selectedValue: string;
}) => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {backgroundColor: isDarkTheme ? Colors.purpleop : Colors.purpleop},
        // {backgroundColor: isDarkTheme ? Colors.greenop : Colors.greenop},
      ]}
      onPress={() => {
        chooceHandler(item);
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.titleBox]}>
        <Text
          style={[
            styles.text,
            {
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            },
          ]}>
          {item}
        </Text>
      </View>
      <View style={[styles.lessonTitleV]}>
        <Verb positive={1} verb={item} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isDarkTheme ? Colors.gray60 : Colors.gray5},
        ]}
        onPress={() => setModalVisible(true)}>
        <Text
          style={[
            styles.text,
            {color: isDarkTheme ? Colors.gray5 : Colors.gray95},
          ]}>
          {selectedValue || 'Select a verb'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{flex: 1}}></Pressable>
        <View
          style={[
            styles.modalContainer,
            {backgroundColor: isDarkTheme ? '#333d' : '#eeed'},
          ]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item}
            style={{width: '100%'}}
          />
        </View>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{flex: 1}}></Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 'auto',
  },
  button: {
    width: '35%',
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '60%',
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc2',
    alignItems: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
  },
  titleBox: {flex: 3},
  text: {textAlign: 'center', fontSize: 17, fontWeight: 'bold'},
  lessonTitleV: {
    flex: 1,
    height: 30,
    width: 30,
    alignItems: 'flex-start',
  },
});
