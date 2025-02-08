import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import Mainscreen from '../Screens/Main';
import Home from '../Screens/Home'; // Adjust the path as needed
import Profile from '../Screens/Profile'; // Adjust the path as needed
import BMICalculator from '../Screens/BMICalculator'; // Adjust the path as needed
import CurrencyConverter from '../Screens/CurrencyConverter'; // Adjust the path as needed

const Stack = createNativeStackNavigator ();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Mainscreen' component={Mainscreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='BMICalculator' component={BMICalculator} />
        <Stack.Screen name='CurrencyConverter' component={CurrencyConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;