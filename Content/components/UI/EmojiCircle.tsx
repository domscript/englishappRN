import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../constants/Colors';

export const EmojiCircle = ({
  active,
  children,
}: {
  active: boolean;
  children: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: active ? Colors.green50 : Colors.green5,
      }}>
      <Text
        style={{
          fontSize: 20,
          opacity: active ? 1 : 0.2,
        }}>
        {children}
      </Text>
    </View>
  );
};
