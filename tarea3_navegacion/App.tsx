import { NavigationContainer } from '@react-navigation/native';  
import React from 'react';  
import NavegacionTab from './Components/NavegacionTab';  
import { TaskProvider } from './Context/ContextTask';  

export default function App() {  
  return (  
    <NavigationContainer>  
      <TaskProvider>  
        <NavegacionTab />  
      </TaskProvider>  
    </NavigationContainer>  
  );  
}  
