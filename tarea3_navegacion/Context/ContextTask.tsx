import React, { createContext, useState, ReactNode } from 'react';  

interface Task {  
  id: number;  
  title: string;  
}  

interface TaskContextType {  
  todos: Task[];  
  addTodo: (task: Task) => void;  
}  

export const TaskContext = createContext<TaskContextType | undefined>(undefined);  

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {  
  const [todos, setTodos] = useState<Task[]>([]);  

  const addTodo = (task: Task) => {  
    setTodos((prev) => [...prev, task]);  
  };  

  return (  
    <TaskContext.Provider value={{ todos, addTodo }}>  
      {children}  
    </TaskContext.Provider>  
  );  
};  
