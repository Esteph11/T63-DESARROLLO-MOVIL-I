import React, { useContext, useState } from 'react';  
import { View, TextInput, Button } from 'react-native';  
import { TaskContext } from '../../Context/ContextTask';  

export default function AddTodo() {  
  const [taskTitle, setTaskTitle] = useState('');  
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
    <View>  
      <TextInput  
        placeholder="Nueva tarea"  
        value={taskTitle}  
        onChangeText={setTaskTitle}  
      />  
      <Button title='Agregar' onPress={handleAddTodo} />  
    </View>  
  );  
}  
