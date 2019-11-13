import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerComponent = ({items, navigation: {navigate, closeDrawer}}) => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{top: 'always', horizontal: 'never'}}>
        {items.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                closeDrawer();
                navigate(item.routeName);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                {/* <Icon name={item.params.iconName} size={24} /> */}
                <Text style={{marginHorizontal: 10}}>
                  {item.params
                    ? item.params.name || item.routeName
                    : item.routeName}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default DrawerComponent;
