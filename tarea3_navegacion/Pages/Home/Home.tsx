import React, { useContext } from 'react';  
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';  
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
    <View style={styles.container}>
      <Text style={styles.title}><h2>Lista de Tareas</h2></Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item.title}</Text>}
      />
      <View style={styles.buttonContainer}>
        <Button title="Agregar nueva tarea" onPress={() => navigation.navigate('AddTodo')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    buttonContainer: {
      marginHorizontal: 20,
    },
  });