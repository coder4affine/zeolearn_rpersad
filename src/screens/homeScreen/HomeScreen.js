import React from 'react';
import PropTypes from 'prop-types';

import {Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello From Home Page</Text>
      <Button title="Test" onPress={() => navigation.navigate('Test1')} />
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
