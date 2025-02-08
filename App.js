import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import Mainscreen from './Screens/Main'; // Adjust the path as needed
import Home from './Screens/Home'; // Adjust the path as needed
import Profile from './Screens/Profile'; // Adjust the path as needed
import BMICalculator from './Screens/BMICalculator'; // Adjust the path as needed
import CurrencyConverter from './Screens/CurrencyConverter'; // Adjust the path as needed
import AgeCalculator from './Screens/AgeCalculator'; // Adjust the path as needed
import TimeConverter from './Screens/TimeConverter'; // Adjust the path as needed
import LoanCalculator from './Screens/LoanCalculator'; // Adjust the path as needed
import GSTCalculator from './Screens/GSTCalculator'; // Adjust the path as needed
import DiscountCalculator from './Screens/DiscountCalculator'; // Adjust the path as needed

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="white" backgroundColor="black" />
      <Stack.Navigator initialRouteName='Mainscreen'>
        <Stack.Screen options={{ headerShown: false }} name='Mainscreen' component={Mainscreen} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Profile' component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name='BMICalculator' component={BMICalculator} />
        <Stack.Screen options={{ headerShown: false }} name='CurrencyConverter' component={CurrencyConverter} />
        <Stack.Screen options={{ headerShown: false }} name='AgeCalculator' component={AgeCalculator} />
     <Stack.Screen options={{ headerShown: false }} name='TimeConverter' component={TimeConverter} />
        <Stack.Screen options={{ headerShown: false }} name='LoanCalculator' component={LoanCalculator} />
        <Stack.Screen options={{ headerShown: false }} name='GSTCalculator' component={GSTCalculator} />
        <Stack.Screen options={{ headerShown: false }} name='DiscountCalculator' component={DiscountCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
