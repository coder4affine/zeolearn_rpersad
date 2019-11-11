import React from 'react';

import {createAppContainer} from 'react-navigation';
import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import TestScreen from './screens/testScreen/TestScreen';

const AppNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      path: 'zeolearn_rpersad/login',
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Login',
        headerTitleAlign: 'left',
        headerRight: <Text>Header Right</Text>,
        headerLeft: <Text>Header left</Text>,
      }),
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Login',
        headerTitleAlign: 'left',
      }),
    },
    Test: TestScreen,
  },
  {
    initialRouteParams: {
      test: 'sample data',
    },
    defaultNavigationOptions: ({navigation}) => ({
      headerTintColor: 'red',
    }),
  },
);

export default createAppContainer(AppNavigation);
