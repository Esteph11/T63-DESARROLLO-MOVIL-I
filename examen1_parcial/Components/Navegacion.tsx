import { View, Text } from 'react-native';  
import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { NavigationContainer } from '@react-navigation/native';  
import Inicio from '../Page/Inicio';  
import Realizados from '../Page/Realizados';  
import Eliminados from '../Page/Eliminados';  

const Tab = createBottomTabNavigator();

export default function Navegacion() {    

  return (  
    <NavigationContainer>  
      <Tab.Navigator>  
        <Tab.Screen name='Inicio' component={Inicio} />  
        <Tab.Screen name='Realizar Pedido' component={Realizados} />  
        <Tab.Screen name='Eliminados' component={Eliminados} />  
      </Tab.Navigator>  
    </NavigationContainer>  
  );  
}