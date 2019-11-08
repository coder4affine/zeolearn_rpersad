import React from 'react';
import {View, Text, TextInput as RNTextInput} from 'react-native';

const TextInput = ({label}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '500',
          color: '#9b9b9b',
          marginBottom: 10,
        }}>
        {label}
      </Text>
      <RNTextInput
        style={{
          height: 44,
          borderRadius: 4,
          borderWidth: 1,
          paddingHorizontal: 8,
          borderColor: '#e8e8e8',
          backgroundColor: '#f4f2fb',
          fontSize: 15,
          fontWeight: '500',
          color: '#4a4a4a',
        }}
        onChangeText={() => {}}
        value="yagnesh"
      />
    </View>
  );
};

export default TextInput;
