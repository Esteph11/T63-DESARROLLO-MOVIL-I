import React, { ReactNode, useContext, useState } from 'react';  
import { ContextPedidos } from '../Context/ContextPedidos';  
import { Pedidos } from '../Models/Pedidos';  
import { Alert } from 'react-native';  

interface ViewRect {  
  children: ReactNode;  
}  

export default function PedidosProvider({ children }: ViewRect) {  
  const [pedidos, setPedidos] = useState<Pedidos[]>([]);  
  const [texto, setTexto] = useState('');  
  const [pedidosEditar, setPedidosEditar] = useState<Pedidos>({ id: 0, nombre: '', precio: 0 });  

  const agregarPedidos = (pedido: Pedidos) => {  
    if (!pedido.nombre.trim() || pedido.precio <= 0) {  
      Alert.alert('Error', 'El campo no puede quedar vacío y el precio debe ser mayor que cero');  
      return;  
    }  
  
    if (pedidosEditar.id !== 0) {   
      setPedidos(pedidos.map(p => (p.id === pedidosEditar.id ? pedido : p)));  
      Alert.alert('Pedido actualizado exitosamente');  
    } else {  
      setPedidos([...pedidos, { ...pedido, id: pedidos.length + 1 }]); 
      Alert.alert('Pedido agregado exitosamente');  
    }  

    setTexto('');  
    setPedidosEditar({ id: 0, nombre: '', precio: 0 });  
  };  

  const deletePedidos = (id: number) => {   
    const nuevosPedidos = pedidos.filter(pedido => pedido.id !== id);  
    setPedidos(nuevosPedidos);  
    Alert.alert('Pedido eliminado exitosamente');  
  };  

  const setEditingPedidos = (pedido: Pedidos) => {  
    setPedidosEditar(pedido);  
    setTexto(pedido.nombre); 
  };  

  return (  
    <ContextPedidos.Provider value={{ pedidos, agregarPedidos, deletePedidos, setEditingPedidos, texto, setTexto }}>  
      {children}  
    </ContextPedidos.Provider>  
  );  
}  

export const useContextPedidos = () => {  
  return useContext(ContextPedidos);  
}