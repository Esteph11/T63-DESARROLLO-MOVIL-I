import React, { createContext, useState, useEffect } from 'react';  

export const EstudiantesContext = createContext({
    estudiantes: [],
    setStudents: () => {}
  });  
  
const EstudiantesProvider = ({ children }) => {  
  const [estudiantes, setStudents] = useState([]);  

  useEffect(() => {  
    // lista de estudiantes
    const initialStudents = [  
      { id: '1', name: 'Juan' },  
      { id: '2', name: 'María' },  
      { id: '3', name: 'Carlos' },  
      { id: '4', name: 'Mario' },  
      { id: '5', name: 'Emilio' },  
      { id: '6', name: 'Alejandra' },   
      { id: '7', name: 'Luis' },  
      { id: '8', name: 'Jennifer' },  
      { id: '9', name: 'Rachel' },  
      { id: '10', name: 'Daniel' },  
    ];  

    setStudents(initialStudents);  
 
    const interval = setInterval(() => {  
      setStudents((prevStudents) => {  
        const newStudent = { id: String(prevStudents.length + 1), name: `Nuevo Estudiante ${prevStudents.length + 1}` };
        return [...prevStudents, newStudent];  
      });  
    }, 5000);  

    return () => clearInterval(interval);  
  }, []);  

  return (  
    <EstudiantesContext.Provider value={{ estudiantes, setStudents }}>
      {children}  
    </EstudiantesContext.Provider>  
  );  
};  

export default EstudiantesProvider;  
