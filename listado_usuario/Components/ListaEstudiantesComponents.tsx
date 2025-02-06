import React, { useContext } from 'react';  
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';  
import { EstudiantesContext } from '../Context/EstudiantesContext';  

const ListaEstudiantesComponents = () => {  
  const { estudiantes } = useContext(EstudiantesContext);  

  return (  
    <SafeAreaView style={styles.container}>  
      <FlatList  
        data={estudiantes}  
        keyExtractor={(item) => item.id}  
        renderItem={({ item }) => (  
          <Text style={styles.studentItem}>{item.name}</Text>  
        )}  
      />  
    </SafeAreaView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  studentItem: {  
    fontSize: 18,  
    padding: 10,  
    textAlign: 'center',  
  },  
});  

export default ListaEstudiantesComponents; 
