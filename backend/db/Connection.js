const {Sequelize} =require('sequelize')

const sequelize = new Sequelize(
    'ecommerce_restaurante',
    'root',
    'Puchito201524',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=>console.log('Conexion establecidda Correctamente'))
    .catch(err=> console.log("Error en la conexion" + err))

module.exports= sequelize