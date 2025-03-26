import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { NavigationContainer } from '@react-navigation/native';  
import { Image } from 'react-native';  

import Acelerometro from '../Page/Acelerometro';  
import Logs from '../Page/Logs';   
import newspaper from '../assets/newspaper.png';   
import acele from '../assets/acelerometro.png';   

const Tab = createBottomTabNavigator();  

export default function Navegacion() {  
  return (  
    <NavigationContainer>  
      <Tab.Navigator>  
        <Tab.Screen   
          name="Acelerometro"   
          component={Acelerometro}  
          options={{  
            tabBarIcon: ({ color, size }) => (  
              <Image   
                source={acele}   
                style={{ width: size, height: size, tintColor: color }}   
              />  
            ),  
          }}   
        />  
        
        <Tab.Screen   
          name="Logs"   
          component={Logs}  
          options={{  
            tabBarIcon: ({ color, size }) => (  
              <Image   
                source={newspaper}   
                style={{ width: size, height: size, tintColor: color }}   
              />  
            ),  
          }}   
        />  
      </Tab.Navigator>  
    </NavigationContainer>  
  );  
}  


