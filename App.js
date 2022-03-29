import React from 'react';
import { store } from "./store";
import { Provider } from "react-redux";
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        >
          <AppNavigator />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaProvider>
  );
}



// import React from 'react';
// import { Provider } from 'react-redux';
// import { KeyboardAvoidingView } from 'react-native';
// // import HomeScreen from './screens/HomeScreen';
// import { store } from './store';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import tw from 'tailwind-react-native-classnames';
// import { Platform } from 'react-native';
// import AppNavigator from './navigation/AppNavigator';



// export default function App() {
//   // const Stack = createNativeStackNavigator();
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//        <SafeAreaProvider>
//          <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style={tw`flex-1`} keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
//            <AppNavigator />
//          </KeyboardAvoidingView>
//         </SafeAreaProvider>
//       </NavigationContainer>      
//     </Provider>
 
//   );
// }

