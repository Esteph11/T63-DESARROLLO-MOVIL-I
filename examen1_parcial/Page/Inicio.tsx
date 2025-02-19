import React, { useEffect } from 'react';  
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';  
import { useContextPedidos } from '../Provider/PedidosProvider';  
import { useNavigation } from '@react-navigation/native';  

export default function Inicio() {  
    const navigation = useNavigation();  
    const { getPedidos, agregarPedidos } = useContextPedidos();  
    
    const pedidosDatos = [  
        { id: 1, nombre: 'Plato 1', precio: 100 },  
        { id: 2, nombre: 'Plato 2', precio: 150 },  
        { id: 3, nombre: 'Plato 3', precio: 200 },  
    ];   

    useEffect(() => {  
        getPedidos();  
    }, []);   

    const handleAgregarPedidos = (item) => {  
        agregarPedidos(item);  
        getPedidos();  
    }; 
      

    return (  
        <View style={styles.container}>  
            <FlatList  
                data={pedidosDatos}   
                renderItem={({ item }) => (  
                    <View style={styles.pedidosContainer}>  
                        <Text style={styles.pedidos}>{item.nombre} - ${item.precio}</Text>  
                        <Button title="Agregar Pedido" onPress={() => handleAgregarPedidos(item)} />  
                    </View>  
                )}  
                keyExtractor={item => item.id.toString()}  
            />  
            <Button  
                title="Realizar Pedido"  
                onPress={() => navigation.navigate('Realizar Pedido')}  
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
