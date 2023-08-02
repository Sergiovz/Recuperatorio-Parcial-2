// TODO: Crear modelo de datos de Reserva


const Reserva = sequelize.define('ReservaCine', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombrePelicula: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaSalida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sala: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    haciento:{
        type: DataTypes.STRING(50), 
        allowNull: false
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservasCine'
});

Reserva.sync({force: false}).then(() => {
    console.log('La Tabla de Reservas fue creada con éxito')
});