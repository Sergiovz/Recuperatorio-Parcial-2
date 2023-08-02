const { Sequelize, DataTypes } = require("sequelize");

//Instancia de conexión a la Base de Datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
})

const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Pudiste conectar la Base de Datos exitosamente');

    } catch (error) {
        console.log('ERROR DE CONEXIÓN A LA BASE DE DATOS: ', error)
    }
}

module.exports = {
    sequelize,
    DataTypes,
    conectarDB
}