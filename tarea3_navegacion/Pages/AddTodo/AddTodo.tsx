import React, { useContext, useState } from 'react';  
import { View, TextInput, Button, StyleSheet } from 'react-native';  
import { TaskContext } from '../../Context/ContextTask';  

export default function AddTodo() {  
  const [taskTitle, setTaskTitle] = useState ('');  
  const taskContext = useContext(TaskContext);  

  if (!taskContext) {  
    return null; // Manejar el error apropiadamente  
  }  

  const { addTodo } = taskContext;  

  const handleAddTodo = () => {  
    if (taskTitle.trim()) {  
      const newTask = { id: Date.now(), title: taskTitle };  
      addTodo(newTask);  
      setTaskTitle('');  
      // Volver a Home después de agregar  
    }  
  };  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribir Nueva tarea"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <View style={styles.buttonContainer}>
        <Button title="Agregar Tarea" onPress={handleAddTodo} />
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
