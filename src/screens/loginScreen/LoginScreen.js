import React from 'react';
import {View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const LoginScreen = ({navigation: {getParam, navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Hello from Login Page</Text>
      <Button title="Home" onPress={() => navigate('Dashboard')} />
    </SafeAreaView>
  );
};

export default LoginScreen;
