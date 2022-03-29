import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigation';


const AppNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <MainNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;