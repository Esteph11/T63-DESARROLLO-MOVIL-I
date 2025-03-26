// src/Page/Logs.tsx  
import { Text } from '@react-navigation/elements';  
import { StyleSheet, View, FlatList } from 'react-native';  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

const API_URL = 'http://localhost:5000/logs';  

interface Log {  
  id: number;  
  timestamp: string;  
  posicionX: number;  
  posicionY: number;  
  posicionZ: number;  
}  

export function Logs() {  
  const [logs, setLogs] = useState<Log[]>([]);  

  useEffect(() => {  
    const fetchLogs = async () => {  
      try {  
        const response = await axios.get(API_URL);  
        setLogs(response.data);  
      } catch (error) {  
        console.error('Error al obtener logs:', error);  
      }  
    };  

    fetchLogs();  
  }, []);  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Lista de Logs</Text>  
      <FlatList  
        data={logs}  
        keyExtractor={(item) => item.id.toString()}  
        renderItem={({ item }) => (  
          <View style={styles.logItem}>  
            <Text>{`X: ${item.posicionX}, Y: ${item.posicionY}, Z: ${item.posicionZ}`}</Text>  
            <Text>{`Fecha: ${new Date(item.timestamp).toLocaleString()}`}</Text>  
          </View>  
        )}  
      />  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'flex-start',  
    alignItems: 'center',  
    padding: 20,  
  },  
  title: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginBottom: 10,  
  },  
  logItem: {  
    padding: 10,  
    borderBottomWidth: 1,  
    borderBottomColor: '#ccc',  
    width: '100%',  
  },  
});  

/*import { Text } from '@react-navigation/elements';
import { StaticScreenProps } from '@react-navigation/native';
import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/logs';

interface Log {
  id: number;
  timestamp: string;
  posicionX: number;
  posicionY: number;
  posicionZ: number;
}

type Props = StaticScreenProps<{}>;

export function Logs({}: Props) {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(API_URL);
        setLogs(response.data);
      } catch (error) {
        console.error('Error al obtener logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Logs</Text>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>{`X: ${item.posicionX}, Y: ${item.posicionY}, Z: ${item.posicionZ}`}</Text>
            <Text>{`Fecha: ${new Date(item.timestamp).toLocaleString()}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});


/*import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/logs';

export default function LogsScreen() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();

    // Actualizar cada 5 segundos
    const interval = setInterval(fetchLogs, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get(API_URL);
      setLogs(response.data);
    } catch (error) {
      console.error('Error obteniendo logs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Logs</Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={logs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.logItem}>
              <Text style={styles.logText}>🕒 {new Date(item.timestamp).toLocaleString()}</Text>
              <Text style={styles.logText}>📍 X: {item.posicionX.toFixed(2)}, Y: {item.posicionY.toFixed(2)}, Z: {item.posicionZ.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  logItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logText: {
    fontSize: 16,
  },
});



/*
import React from 'react';  
import { View, Text, StyleSheet, ScrollView } from 'react-native';  

const Logs = ({ route }) => {  
  const { logs } = route.params;  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Lista de Logs</Text>  
      <ScrollView>  
        {logs.map((log, index) => (  
          <View key={index} style={styles.logEntry}>  
            <Text>X: {log.x.toFixed(2)}</Text>  
            <Text>Y: {log.y.toFixed(2)}</Text>  
            <Text>Z: {log.z.toFixed(2)}</Text>  
            <Text>Color: {log.color}</Text>  
            <Text>Timestamp: {log.timestamp}</Text>  
          </View>  
        ))}  
      </ScrollView>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: { flex: 1, padding: 20 },  
  title: { fontSize: 24, fontWeight: 'bold' },  
  logEntry: { marginBottom: 14, padding: 10, borderWidth: 1, borderColor: '#ccc' },  
});  

export default Logs; 
*/
