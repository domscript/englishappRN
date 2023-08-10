import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ThreeEmojiText = ({
  timeQ,
  noteQ,
}: {
  timeQ: string;
  noteQ: string;
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 20}}>
          {'' + `${'🦖' === timeQ ? noteQ : ''}`}
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20}}>
          {'     ' + `${'🙋' === timeQ ? noteQ : ''}`}
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20}}>
          {'     ' + `${'🤖' === timeQ ? noteQ : ''}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0.2, flexDirection: 'row', textAlign: 'left'},
});
