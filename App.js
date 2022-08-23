import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from './Components/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './Components/Details';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
      
   
  )
}

export default App

const styles = StyleSheet.create({})