const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Publicador = sequelize.define('Publicador', {
	idPublicador: { 
		type: DataTypes.INTEGER, 
		primaryKey: true 
	},
	contraseña: { type: DataTypes.STRING },
	nombre: { type: DataTypes.STRING },
	correo: { type: DataTypes.STRING }
}, {
	tableName: 'Publicador',
	timestamps: false
});

module.exports = Publicador;
