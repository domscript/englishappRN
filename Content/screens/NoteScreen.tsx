import {View, Text, StyleSheet} from 'react-native';

import React from 'react';

import {useSelector} from 'react-redux';
import Svg, {Circle, Line, Path, G, Ellipse} from 'react-native-svg';

import Colors from '../constants/Colors';
import {RootState} from '../redux-store/store';
import {BoyFace} from '../components/MyIcons/SVG/BoyFace';
import {ManFace} from '../components/MyIcons/SVG/ManFace';
import {OldFace} from '../components/MyIcons/SVG/OldFace';
import {VerbForms} from '../components/MyIcons/SVG/VerbForms';

function NoteScreen({route}) {
  const [note, tenseNoteIndex, verb] = route.params.note;
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const showArr = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];

  const show = showArr[tenseNoteIndex];

  const data = Object.values(note).map(el => el.join(' '));

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: isDarkTheme ? Colors.gray70 : Colors.gray20,
        padding: 4,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        {verb}
      </Text>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <View
              style={[
                {
                  flex: 0.049,
                },
              ]}>
              <Text>{''}</Text>
            </View>

            <Div active={show[1] === '1'} style={{flex: 0.317}}>
              {'past'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.317}}>
              {'present'}
            </Div>
            <Div active={show[1] === '3'} style={{flex: 0.317}}>
              {'future'}
            </Div>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '1'} style={{flex: 0.049}}>
              {'0'}
            </Div>
            <Button active={show === '11'} style={{flex: 0.317}}>
              {data[0]}
            </Button>
            <Button active={show === '12'} style={{flex: 0.317}}>
              {data[1]}
            </Button>
            <Button active={show === '13'} style={{flex: 0.317}}>
              {data[2]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '2'} style={{flex: 0.049}}>
              {'3'}
            </Div>
            <Button active={show === '21'} style={{flex: 0.317}}>
              {data[3]}
            </Button>
            <Button active={show === '22'} style={{flex: 0.317}}>
              {data[4]}
            </Button>
            <Button active={show === '23'} style={{flex: 0.317}}>
              {data[5]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '3'} style={{flex: 0.049}}>
              {'6'}
            </Div>
            <Button active={show === '31'} style={{flex: 0.317}}>
              {data[6]}
            </Button>

            <Button active={show === '32'} style={{flex: 0.317}}>
              {data[7]}
            </Button>

            <Button active={show === '33'} style={{flex: 0.317}}>
              {data[8]}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default NoteScreen;

interface ButtonProps {
  children: string;
  active: boolean;
  style?: {flex: number};
}

function Button({children, active = false, style}: ButtonProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        {
          backgroundColor: active
            ? isDarkTheme
              ? Colors.green70
              : Colors.green30
            : isDarkTheme
            ? Colors.gray60
            : Colors.gray5,
          borderRadius: 8,
          overflow: 'hidden',
          padding: 4,
          margin: 1,
        },
        style,
      ]}>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          fontSize: 12,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </Text>
    </View>
  );
}

interface DivProps {
  children: string;
  active?: boolean;
  style?: {flex: number};
}

function Div({children, active = false, style}: DivProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={[
        {
          flex: 2,
          borderRadius: 8,
          // overflow: 'hidden',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: active
            ? isDarkTheme
              ? Colors.green60
              : Colors.green20
            : isDarkTheme
            ? Colors.gray60
            : Colors.gray10,
        },
        style,
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {(['past', 'present', 'future'].includes(children) && (
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              {children + ' '}
            </Text>
            <Svg width="35" height="35">
              {children === 'past' ? (
                <BoyFace />
              ) : children === 'present' ? (
                <ManFace />
              ) : children === 'future' ? (
                <OldFace />
              ) : null}
            </Svg>
          </>
        )) || (
          <Svg width="20" height="20">
            <VerbForms tense={Number(children)} />
          </Svg>
        )}
      </View>
    </View>
  );
}
