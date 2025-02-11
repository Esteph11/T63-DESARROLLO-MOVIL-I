import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Pages/Home/Home'
import AddTodo from '../Pages/AddTodo/AddTodo'

export default function Navegacion() {

const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="AddTodo" component={AddTodo}></Stack.Screen>
    </Stack.Navigator>
  );
}
