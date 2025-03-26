
import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { NavigationContainer } from '@react-navigation/native';  
import { Image } from 'react-native';  

import Acelerometro from '../Page/Acelerometro';  
import Logs from '../Page/Logs';   
import newspaper from '../assets/newspaper.png'; 
import acele from '../assets/acelerometro.png';   


export default function Navegacion() {

  const tabNavigation= createBottomTabNavigator()

  return (
    <NavigationContainer>
        <tabNavigation.Navigator>
            <tabNavigation.Screen component={Acelerometro} name='Acelerometro'></tabNavigation.Screen>
            <tabNavigation.Screen component={Logs} name='Logs'></tabNavigation.Screen>
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}


/*const Tab = createBottomTabNavigator();  

const HomeTabs = () => {  
  return (  
    <Tab.Navigator>  
      <Tab.Screen   
        name="Acelerometro"   
        component={Acelerometro}   
        options={{  
          title: 'Acelerómetro',  
          tabBarIcon: ({ color, size }) => (  
            <Image  
              source={newspaper}  
              tintColor={color}  
              style={{ width: size, height: size }}  
            />  
          ),  
        }}   
      />  
      <Tab.Screen   
        name="Logs"   
        component={Logs}   
        options={{  
          title: 'Logs',  
          tabBarIcon: ({ color, size }) => (  
            <Image  
              source={acele}  
              tintColor={color}  
              style={{ width: size, height: size }}  
            />  
          ),  
        }}   
      />  
    </Tab.Navigator>  
  );  
};  

const Stack = createNativeStackNavigator();  

const Navigation = () => {  
  return (  
    <NavigationContainer>  
      <Stack.Navigator>  
        <Stack.Screen   
          name="HomeTabs"   
          component={HomeTabs}   
          options={{ headerShown: false }}   
        />  
      </Stack.Navigator>  
    </NavigationContainer>  
  );  
};  

export default Navigation;  

/*
import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { NavigationContainer } from '@react-navigation/native';  
import { Image } from 'react-native';  
import { HeaderButton, Text } from '@react-navigation/elements';  

import Acelerometro from '../Page/Acelerometro';  
import Logs from '../Page/Logs';  
import bell from '../assets/bell.png';  
import newspaper from '../assets/newspaper.png';  

const Tab = createBottomTabNavigator();  

const HomeTabs = () => {  
  return (  
    <Tab.Navigator>  
      <Tab.Screen   
        name="Acelerometro"   
        component={Acelerometro}   
        options={{  
          title: 'Acelerómetro',  
          tabBarIcon: ({ color, size }) => (  
            <Image  
              source={newspaper}  
              tintColor={color}  
              style={{ width: size, height: size }}  
            />  
          ),  
        }}   
      />  
      <Tab.Screen   
        name="Logs"   
        component={Logs}   
        options={{  
          title: 'Logs',  
          tabBarIcon: ({ color, size }) => (  
            <Image  
              source={bell}  
              tintColor={color}  
              style={{ width: size, height: size }}  
            />  
          ),  
        }}   
      />  
    </Tab.Navigator>  
  );  
};  

const Stack = createNativeStackNavigator();  

const Navigation = () => {  
  return (  
    <NavigationContainer>  
      <Stack.Navigator>  
        <Stack.Screen   
          name="HomeTabs"   
          component={HomeTabs}   
          options={{ headerShown: false }}   
         
        />  
      </Stack.Navigator>  
    </NavigationContainer>  
  );  
};  

export default Navigation;  

/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Acelerometro from './Page/Acelerometro';
import Logs from './Page/Logs';
import aceleIcon from '../assets/acelerometro.png';
import logIcon from '../assets/newspaper.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Acelerometro" 
        component={Acelerometro} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={aceleIcon} tintColor={color} style={{ width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen 
        name="Logs" 
        component={Logs} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={logIcon} tintColor={color} style={{ width: size, height: size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Acelerometro from '../Page/Acelerometro'
import Logs from '../Page/Logs'

export default function Navegacion() {

  const tabNavigation= createBottomTabNavigator()

  return (
    <NavigationContainer>
        <tabNavigation.Navigator>
            <tabNavigation.Screen component={Acelerometro} name='Acelerometro'></tabNavigation.Screen>
            <tabNavigation.Screen component={Logs} name='Logs'></tabNavigation.Screen>
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}
*/