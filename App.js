import React from 'react';
import {View, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import TextInput from './src/textInput/TextInput';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{top: 'never', bottom: 'always'}}>
        <ImageBackground
          source={require('./assets/images/group-21.png')}
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
          <View style={{flex: 3, justifyContent: 'flex-end'}}>
            <Text>Login Page</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StatusBar,
//   SafeAreaView,
//   TouchableHighlight,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   TouchableNativeFeedback,
//   ImageBackground,
//   Platform,
//   StyleSheet,
// } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'space-between',
//   },
//   box: {
//     backgroundColor: 'yellow',
//     ...Platform.select({
//       ios: {
//         height: 100,
//         width: 100,
//       },
//       android: {
//         height: 80,
//         width: 80,
//       },
//     }),
//   },
//   flex: {
//     flex: 1,
//   },
//   spaceAround: {
//     justifyContent: 'space-around',
//   },
// });

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={[styles.flex, styles.spaceAround]}>
//         <View style={styles.box} />
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <Image
//             source={require('./assets/images/dashboard.png')}
//             resizeMode="contain"
//             style={{
//               height: 100,
//               width: 100,
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             color: '#fff',
//             fontSize: 36,
//             fontWeight: '800',
//             textAlign: 'center',
//           }}>
//           Announcement Training
//         </View>
//         {Platform.os !== 'ios' && (
//           <TouchableNativeFeedback
//             onPress={() => {
//               alert('hello');
//             }}>
//             <View
//               style={{
//                 backgroundColor: 'rgb(255,159,0)',
//                 height: 44,
//                 marginHorizontal: 20,
//                 borderRadius: 4,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
//                 Submit
//               </Text>
//             </View>
//           </TouchableNativeFeedback>
//         )}
//       </View>
//       <Text
//         style={{
//           fontSize: 13,
//           lineHeight: 22,
//           color: 'rgb(155,155,155)',
//           textAlign: 'center',
//         }}>
//         VisionarySchoolman
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default App;
