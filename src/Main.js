import React from 'react';
import {View, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import TextInput from './textInput/TextInput';

export const Main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/group-21.png')}
        resizeMode="cover"
        style={{height: 220}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginHorizontal: 30,
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: '#fff'}}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 24,
            }}>
            Tan Tock Sagh Hospital
          </Text>
        </View>
      </ImageBackground>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1, margin: 15}}>
        <View style={{flex: 1.5, justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15, fontWeight: '500', color: '#333333'}}>
            Welcome to Tan Tock Seng Hospital
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              lineHeight: 27,
              color: 'rgba(0, 0, 0, 0.84)',
            }}>
            Provide a nickname for your profile and press submit when you're
            done.
          </Text>
        </View>
        <View style={{flex: 4, justifyContent: 'space-around'}}>
          <TextInput label="Username" />
          <TextInput label="Password" />
        </View>
        <View style={{flex: 3, justifyContent: 'flex-end', marginBottom: 20}}>
          <Text>Login Page</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
