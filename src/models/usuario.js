const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
	idUsuario: { 
		type: DataTypes.INTEGER, 
		primaryKey: true 
	},
	//nombreUsuario: { type: DataTypes.STRING },
	contraseña: { type: DataTypes.STRING },
	nombres: { type: DataTypes.STRING },
	apellidos: { type: DataTypes.STRING },
	edad: { type: DataTypes.INTEGER },
	correo: { type: DataTypes.STRING }
}, {
	tableName: 'Usuario',
	timestamps: false
});

module.exports = Usuario;
