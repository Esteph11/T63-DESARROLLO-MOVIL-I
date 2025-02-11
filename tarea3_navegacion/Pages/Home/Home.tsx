import React, { useContext } from 'react';  
import { View, Text, Button, FlatList } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  
import { TaskContext } from '../../Context/ContextTask';  

export default function Home() {  
    
  const navigation = useNavigation();  
  const contextTask = useContext(TaskContext);  

  if (!contextTask) {  
    return null; // Manejar el error apropiadamente  
  }  

  const { todos } = contextTask;  

  return (  
    <View>  
      <Text>Lista de Tareas</Text>  
      <FlatList  
        data={todos}  
        keyExtractor={(item) => item.id.toString()}  
        renderItem={({ item }) => <Text>{item.title}</Text>}  
      />  
      <Button title='Agregar tarea' onPress={() => navigation.navigate('AddTodo')} />  
    </View>  
  );  
}  
