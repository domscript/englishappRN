import React, {useState} from 'react';
import {Switch, View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux-store/store';

interface SwitchButtonProps {
  label: string;
  initialValue: boolean;
  onValueChange: (value: boolean) => void;
}

const SwitchButton = ({
  label,
  initialValue,
  onValueChange,
}: SwitchButtonProps) => {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange(newValue);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? Colors.gray75 : Colors.greenop},
      ]}>
      <Text
        style={[
          styles.text,
          {color: isDarkTheme ? Colors.gray5 : Colors.gray95},
        ]}>
        {label}
      </Text>
      <Switch
        trackColor={{
          false: isDarkTheme ? Colors.gray50 : Colors.gray10,
          true: isDarkTheme ? Colors.green40 : Colors.green10,
        }}
        thumbColor={
          isEnabled
            ? isDarkTheme
              ? Colors.green70
              : Colors.green20
            : isDarkTheme
            ? Colors.gray30
            : Colors.gray40
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
  },
  text: {
    fontSize: 26,
    marginRight: 10,
  },
});

export default SwitchButton;
