import React from 'react';
import PropTypes from 'prop-types';

import {Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const LoginScreen = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Hello from Login Page</Text>
      <Button title="Home" onPress={() => navigate('Dashboard')} />
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
