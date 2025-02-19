
const { DataTypes } = require('sequelize')
const sequelize = require('../db/Connection')

const Pedidos = sequelize.define('pedidos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'pedidos',
        timestamps: false
    }

)

module.exports=Pedidos;