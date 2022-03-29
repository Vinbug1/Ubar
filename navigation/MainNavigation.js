import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 import HomeScreen from '../components/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';
import LaundryScreen from '../screens/LaundryScreen';
import CleaningScreen from '../screens/CleaningScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen   name ="HomeScreen"   component={HomeScreen} options={{headerShown: false}}  />
        <Stack.Screen   name ="MapScreen"   component={MapScreen} options={{headerShown: false}}  />
        <Stack.Screen   name ="EatsScreen"   component={EatsScreen} options={{headerShown: false}}  />
        <Stack.Screen   name ="LaundryScreen"   component={LaundryScreen} options={{headerShown: false}}  />
        <Stack.Screen   name ="CleaningScreen"   component={CleaningScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    );
}

export default MainNavigator;