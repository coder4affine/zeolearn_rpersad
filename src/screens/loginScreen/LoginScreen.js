import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation: {getParam, navigate}}) => {
  console.warn('test', getParam('test', 'no data availble'));
  return (
    <View>
      <Text>Hello from Login Page</Text>
      <Button title="Home" onPress={() => navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
