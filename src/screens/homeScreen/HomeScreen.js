import React from 'react';
import {Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {StackActions} from 'react-navigation';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello From Home Page</Text>
      <Button title="Test" onPress={() => navigation.navigate('Test1')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
