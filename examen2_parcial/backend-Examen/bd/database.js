const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('logApp','root','Puchito201524',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;