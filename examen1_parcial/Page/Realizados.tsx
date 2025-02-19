import React, { useContext, useState } from 'react';  
import { View, Text, Button, TextInput, FlatList, Alert, StyleSheet } from 'react-native';  
import { useContextPedidos } from '../Provider/PedidosProvider';  

export default function Realizados() {  
    const { pedidos, deletePedidos } = useContextPedidos();  
    const [nombre, setNombre] = useState('');  

    const handleConfirmar = () => {  
        const total = pedidos.reduce((suma, pedido) => suma + pedido.precio, 0);  
        Alert.alert('Compra realizada correctamente', `Nombre: ${nombre}\nTotal a pagar: $${total}`);  
    };  

    return (  
        <View style={styles.container}>  
            <Text>Ingrese su nombre y apellido:</Text>  
            <TextInput   
                style={styles.input}   
                value={nombre}   
                onChangeText={setNombre}   
                placeholder="Nombre y Apellido"  
            />  
            <FlatList  
                data={pedidos}  
                renderItem={({ item }) => (  
                    <View style={styles.pedidoContainer}>  
                        <Text style={styles.pedidoText}>{item.nombre} - ${item.precio}</Text>  
                        <Button title="Eliminar" onPress={() => deletePedidos(item.id)} />  {/* Asegúrate de usar item.id */}  
                    </View>  
                )}  
                keyExtractor={item => item.id.toString()}  
            />  
            <Button title="Confirmar Compra" onPress={handleConfirmar} />  
        </View>  
    );  
}  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20  
    },  
    input: {  
        borderWidth: 1,  
        borderColor: 'gray',  
        padding: 10,  
        marginBottom: 20  
    },  
    pedidoContainer: {  
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
        padding: 10,  
        borderBottomWidth: 1,  
        borderColor: 'lightgray'  
    },  
    pedidoText: {  
        fontSize: 18  
    }  
});