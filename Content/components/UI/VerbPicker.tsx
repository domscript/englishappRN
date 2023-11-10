import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';

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
      <Text
        style={[
          styles.text,
          {
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          },
        ]}>
        {item}
      </Text>
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
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '60%',
    marginTop: '25%',
    marginHorizontal: 'auto',
    marginBottom: '20%',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc2',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {textAlign: 'center', fontSize: 17, fontWeight: 'bold'},
});
