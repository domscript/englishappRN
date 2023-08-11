import React from 'react';
import {View} from 'react-native';
import Colors from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const Statistics = ({data, flex}: {data: string; flex: number}) => {
  return (
    <View style={[styles.iconBottom, {flex: flex}]}>
      <ProgressLine data={data.slice(0, data.length / 4)} />
      <ProgressLine data={data.slice(data.length / 4, data.length / 2)} />
      <ProgressLine data={data.slice(data.length / 2, (data.length / 4) * 3)} />
      <ProgressLine data={data.slice((data.length / 4) * 3, data.length)} />
    </View>
  );
};

const ProgressLine = ({data}: {data: string}) => {
  return (
    <View style={styles.line}>
      {data.split('').map((e, i) => (
        <View
          key={i}
          style={[
            styles.lineFill,
            {
              flex: 0.05,
              backgroundColor:
                e === '0'
                  ? Colors.red60
                  : e === '1'
                  ? Colors.green60
                  : e === '3' || e === '4'
                  ? Colors.amber50
                  : Colors.gray50,
            },
          ]}></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flex: 1,
    gap: 2,
    flexDirection: 'row',
  },
  lineFill: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  iconBottom: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    gap: 2,
    marginBottom: 2,
  },
});
