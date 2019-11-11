import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackActions} from 'react-navigation';

const TestScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello from test page</Text>
      <Button
        title="Go To Top"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};

export default TestScreen;
