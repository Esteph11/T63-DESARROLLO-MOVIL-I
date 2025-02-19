import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import React from 'react'; 
import Navegacion from '../Components/Navegacion';   
import Home from '../Pages/Home/Home';  
import AddTodo from '../Pages/AddTodo/AddTodo';  

const Tab = createBottomTabNavigator();  

export default function NavegacionTab() {  
  return (  
    <Tab.Navigator>  
      <Tab.Screen name='Home' component={Home}></Tab.Screen>  
      <Tab.Screen name='Add Task' component={AddTodo}></Tab.Screen>
    </Tab.Navigator>  
  );  
}  
