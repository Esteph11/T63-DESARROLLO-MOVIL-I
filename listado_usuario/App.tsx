import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudiantesProvider from './Provider/EstudiantesProvider';
import ListaEstudiantesComponents from './Components/ListaEstudiantesComponents';
import { EstudiantesContext }  from './Context/EstudiantesContext';

const App = () => {
  return (
    <View style={styles.container}>
      <EstudiantesProvider>
        
      </EstudiantesProvider>
    </View>

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

export default App;
