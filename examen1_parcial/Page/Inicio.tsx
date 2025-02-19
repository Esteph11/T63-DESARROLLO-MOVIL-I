import React, { useEffect } from 'react';  
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';  
import { useContextPedidos } from '../Provider/PedidosProvider';  
import { useNavigation } from '@react-navigation/native';  

type Pedidos = {  
    id: number;  
    nombre: string;  
    precio: number;  
};   

const pedidosDisponible: Pedidos[] = [   
    { id: 1, nombre: 'Plato 1', precio: 100 },  
    { id: 2, nombre: 'Plato 2', precio: 150 },  
    { id: 3, nombre: 'Plato 3', precio: 200 },  
];  

export default function Inicio() {  
    const navigation = useNavigation();  
    const { agregarPedidos, pedidos } = useContextPedidos();  

    const handleAgregarPedidos = (pedidos: Pedidos) => {  
        agregarPedidos(pedidos);  
        Alert.alert('Pedido agregado', `${pedidos.nombre} ha sido agregado al pedido.`);  
    };   
      
    return (  
        <View style={styles.container}>  
            <Text style={styles.titulo}>Lista de Platos Disponibles</Text>  
            <FlatList  
                data={pedidosDisponible}   
                renderItem={({ item }) => (  
                    <View style={styles.pedidosContainer}>  
                        <Text style={styles.pedidos}>{item.nombre} - ${item.precio}</Text>  
                        <Button title="Agregar al Pedido" onPress={() => handleAgregarPedidos(item)} />  
                    </View>  
                )}  
                keyExtractor={item => item.id.toString()}  
            />  
            <Button  
                title="Ir a Mis Pedidos"  
                onPress={() => navigation.navigate('Ver Pedidos')}
            />  
        </View>  
    );  
}  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20,  
        alignItems: 'center'  
    },  
    titulo: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        marginBottom: 20  
    },  
    pedidosContainer: {  
        width: '100%',  
        padding: 10,  
        borderBottomWidth: 1,  
        borderColor: 'black',  
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        alignItems: 'center'  
    },  
    pedidos: {  
        fontSize: 18,  
        flex: 1  
    }  
});
