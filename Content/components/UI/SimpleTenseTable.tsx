import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {RootState} from '../../redux-store/store';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  style?: {flex: number};
}

function Button({children, onClick, active = false, style}: ButtonProps) {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        {
          backgroundColor: active
            ? isDarkTheme
              ? Colors.green70
              : Colors.green30
            : isDarkTheme
            ? Colors.gray60
            : Colors.gray10,
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
          fontSize: 11,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
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
          overflow: 'hidden',
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
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 16,
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          {children}
        </Text>
      </View>
    </View>
  );
}

type ShowType =
  | ''
  | '11'
  | '12'
  | '13'
  | '21'
  | '22'
  | '23'
  | '31'
  | '32'
  | '33';

export function SimpleTenseTable() {
  const {isDarkTheme} = useSelector((state: RootState) => state.theme);

  const [show, setShow] = useState<ShowType>('');
  const [contraction, setContraction] = useState(false);
  const [ex, setEx] = useState(0);

  const showExample = (num: ShowType) => {
    setShow(num);
    setEx(prev => {
      if (prev < 1) return prev + 1;
      return 0;
    });
  };

  const contractionF = () => {
    setContraction(prev => !prev);
    setShow('');
    setEx(0);
  };

  const data = [
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          I
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          You
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          We
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          They{' '}
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          He
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          She
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          It
        </Text>
      </View>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>d</Text>
          </View>
        </View>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          I
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          You
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          We
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          They{' '}
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          He
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          She
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          It
        </Text>
      </View>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{fontSize: 16}}>dance</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{color: 'red', fontSize: 16}}>s</Text>
          </View>
        </View>
      </View>
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>&apos;ll</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>will</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>didn&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>did not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>don&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>doesn&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>do not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>

            <Text style={{color: 'red', fontSize: 16}}>does not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
          </View>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>won&apos;t</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              I
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              You
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              We
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              They{' '}
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              He
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              She
            </Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}>
              It
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text style={{color: 'red', fontSize: 16}}>will not</Text>
            <Text style={{fontSize: 16}}>dance</Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
            <Text
              style={{
                color: isDarkTheme ? Colors.gray5 : Colors.gray95,
              }}></Text>
          </View>
        </View>
      )}
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{color: 'red', fontSize: 16}}>Did</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          I
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          You
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          We
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          They{' '}
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          He
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          She
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          It
        </Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{color: 'red', fontSize: 16}}>Do</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{color: 'red', fontSize: 16}}>Does</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          I
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          You
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          We
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          They{' '}
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          He
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          She
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          It
        </Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
      </View>
    </View>,
    <View style={{flexDirection: 'row', width: '50%'}}>
      <View style={{flex: 0.2}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{color: 'red', fontSize: 16}}>Will</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          I
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          You
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          We
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          They{' '}
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          He
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          She
        </Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}>
          It
        </Text>
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text style={{fontSize: 16}}>dance?</Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
        <Text
          style={{
            color: isDarkTheme ? Colors.gray5 : Colors.gray95,
          }}></Text>
      </View>
    </View>,
  ];

  const examples = [
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        You danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        He danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        She danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        It danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        We danced
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        They danced
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        He dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        She dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        It dances
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        They dance
      </Text>
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We&apos;ll dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They&apos;ll dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We will dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They will dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We didn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They didn&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We did not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They did not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It doesn&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We don&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They don&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It does not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We do not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They do not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      {contraction ? (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We won&apos;t dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They won&apos;t dance
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            I will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            You will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            He will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            She will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            It will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            We will not dance
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.gray5 : Colors.gray95,
            }}>
            They will not dance
          </Text>
        </View>
      )}
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Did They dance
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Does It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Do They dance
      </Text>
    </View>,
    <View>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will I dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will You dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will He dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will She dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will It dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will We dance
      </Text>
      <Text
        style={{
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        Will They dance
      </Text>
    </View>,
  ];

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: isDarkTheme ? Colors.gray70 : Colors.gray20,
        borderRadius: 8,
        padding: 4,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: isDarkTheme ? Colors.gray5 : Colors.gray95,
        }}>
        dance
      </Text>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Button
              onClick={contractionF}
              active={contraction}
              style={{flex: 0.04}}>
              {contraction ? '<>' : '><'}
            </Button>
            <Div active={show[1] === '1'} style={{flex: 0.317}}>
              {'past 👶'}
            </Div>
            <Div active={show[1] === '2'} style={{flex: 0.317}}>
              {'present 🧑'}
            </Div>
            <Div active={show[1] === '3'} style={{flex: 0.317}}>
              {'future 🧓'}
            </Div>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '1'} style={{flex: 0.049}}>
              {'✅'}
            </Div>
            <Button
              onClick={() => showExample('11')}
              active={show === '11'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '11' ? examples[0] : '-') : data[0]}
            </Button>
            <Button
              onClick={() => showExample('12')}
              active={show === '12'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '12' ? examples[1] : '-') : data[1]}
            </Button>
            <Button
              onClick={() => showExample('13')}
              active={show === '13'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '13' ? examples[2] : '-') : data[2]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '2'} style={{flex: 0.049}}>
              {'❌'}
            </Div>
            <Button
              onClick={() => showExample('21')}
              active={show === '21'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '21' ? examples[3] : '-') : data[3]}
            </Button>
            <Button
              onClick={() => showExample('22')}
              active={show === '22'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '22' ? examples[4] : '-') : data[4]}
            </Button>
            <Button
              onClick={() => showExample('23')}
              active={show === '23'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '23' ? examples[5] : '-') : data[5]}
            </Button>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',

              borderRadius: 8,
              marginTop: 8,
            }}>
            <Div active={show[0] === '3'} style={{flex: 0.049}}>
              {'❓'}
            </Div>
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '31' ? examples[6] : '-') : data[6]}
            </Button>

            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '32' ? examples[7] : '-') : data[7]}
            </Button>

            <Button
              onClick={() => showExample('33')}
              active={show === '33'}
              style={{flex: 0.317}}>
              {ex === 1 ? (show === '33' ? examples[8] : '-') : data[8]}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
