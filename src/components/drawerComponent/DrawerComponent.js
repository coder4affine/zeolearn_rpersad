import React from 'react';
import PropTypes from 'prop-types';

import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const DrawerComponent = ({items, navigation: {navigate, closeDrawer}}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>
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
                  {item.params ? item.params.name || item.routeName : item.routeName}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

DrawerComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.shape([
    {
      routeName: PropTypes.string.isRequired,
    },
  ]).isRequired,
};

export default DrawerComponent;
