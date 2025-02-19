import { createContext } from "react";
import { Pedidos } from "../Models/Pedidos";

export const ContextPedidos= createContext({
    pedidos: [] as Pedidos[],
    setPedidos: (pedidos: Pedidos[]) =>{},
    agregarPedidos: (texto:string) =>{},
    getPedidos: ()=>{},
    deletePedidos:(id:number)=>{},
    setEditingPedidos:(pedidos:Pedidos)=>{},
    texto:'',
    setTexto:(texto:string)=>{}

})

