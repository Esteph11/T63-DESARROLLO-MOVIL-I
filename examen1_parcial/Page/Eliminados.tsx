import React, { useContext } from 'react';  
import { View, Text, FlatList } from 'react-native';  
import { ContextPedidos } from '../Context/ContextPedidos';

export default function Eliminados() {  
    const { pedidos } = useContext(ContextPedidos);  

    return (  
        <View>  
            <Text>Historial de platos eliminados:</Text>  
            <FlatList  
                data={pedidos.filter(pedido => pedido.eliminado)}  
                renderItem={({ item }) => (  
                    <Text>{item.nombre} - ${item.precio}</Text>  
                )}  
                keyExtractor={item => item.id.toString()}  
            />  
        </View>  
    );  
};

