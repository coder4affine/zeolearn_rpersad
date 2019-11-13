import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import TestScreen from './screens/testScreen/TestScreen';
import ModalScreen from './screens/modalScreen/ModalScreen';
import DetailsScreen from './screens/detailsScreen/DetailsScreen';
import DrawerComponent from './components/drawerComponent/DrawerComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}
            name="menu"
            size={30}
          />
        ),
      };
    },
  },
  Details: DetailsScreen,
});

const TestStack = createStackNavigator({
  Test1: {
    screen: TestScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}
            name="menu"
            size={30}
          />
        ),
      };
    },
  },
});

const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeStack,
    Test: TestStack,
    VisitedOrders: HomeStack,
  },
  {
    lazy: true,
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = '';
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Test':
            iconName = 'event-note';
            break;
          case 'VisitedOrders':
            iconName = 'bookmark-border';
            break;

          default:
            break;
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    navigationOptions: () => {
      return {
        header: null,
      };
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const RootNavigation = createStackNavigator(
  {
    App: TabNavigation,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppNavigation = createDrawerNavigator(
  {
    Root: RootNavigation,
  },
  {
    contentComponent: DrawerComponent,
  },
);

const App = createSwitchNavigator({
  Login: {screen: LoginStack},
  Dashboard: {screen: AppNavigation},
});

export default createAppContainer(App);

// const AppNavigation = createStackNavigator(
//   {
//     Login: {
//       screen: LoginScreen,
//       path: 'zeolearn_rpersad/login',
//       navigationOptions: ({navigation}) => ({
//         headerTitle: 'Login',
//         headerTitleAlign: 'left',
//         headerRight: <Text>Header Right</Text>,
//         headerLeft: <Text>Header left</Text>,
//       }),
//     },
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: ({navigation}) => ({
//         headerTitle: 'Login',
//         headerTitleAlign: 'left',
//       }),
//     },
//     Test: TestScreen,
//   },
//   {
//     initialRouteParams: {
//       test: 'sample data',
//     },
//     defaultNavigationOptions: ({navigation}) => ({
//       headerTintColor: 'red',
//     }),
//   },
// );
