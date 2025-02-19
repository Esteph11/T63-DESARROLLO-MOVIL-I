const express= require('express')
const Pedidos= require('./Models/Pedidos')
const { where } = require('sequelize')



const app = express()


app.use(express.json())


app.get('/pedidos',async (req,res)=>{

    try {
        //selec *from pedidos

        const pedidos = await Pedidos.findAll();

        (pedidos.length>0) 
                ? res.status(200).json(pedidos) 
                : res.status(400).json({'mensaje':'No existe informacion'})

    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})

app.post('/pedidos', async(req,res)=>{
        try {
            console.log(req.body)
            //insert into pedidos (1,'dasda')
            const pedidos = await Pedidos.create(req.body)
            res.status(200).json(pedidos)
            
        } catch (error) {
            res.status(500).json({'mensaje':'Ocurrio un error'})
        }
})

app.put('/pedidos/:id', async(req,res) =>{
    try {
        
        //update pedidos set descripcion='valr' where id=1
        const [updated]= await Pedidos.update(req.body,{
            where: {id: req.params.id}
        })

        if(updated) {
            res.status(200).json({'mensaje':'Actualizado Correctamente'})
        }
             
        else {
            res.status(400).json({'mensaje':'Registro no encontrado'})
        }
            
        
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error' + error})
    }
})

app.delete('/pedidos/:id', async(req,res)=>{
    try {
        
        //delete from pedidos where id=2
        
        const deleted= await Pedidos.destroy({
            where: {id: req.params.id}
        })

        if(deleted) {
            res.status(200).json({'mensaje':'Registro eliminado Correctamente'})
        }
             
        else {
            res.status(400).json({'mensaje':'Registro no encontrado'})
        }
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error' + error})   
    }
})

app.listen(5000, ()=>{
    console.log('Aplicación ejecuantando en puerto 5000')
})