import React from 'react';  
import EstudiantesProvider from '../Context/EstudiantesContext'; // Corrige la importación  
import ListaEstudiantesComponents from '../Components/ListaEstudiantesComponents';  

const ProviderComponent = () => {  
  return (  
    <EstudiantesProvider>  
      <ListaEstudiantesComponents />  
    </EstudiantesProvider>  
  );  
};  

export default ProviderComponent;  
