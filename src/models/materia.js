const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Materia = sequelize.define('Materia', {
	idMateria: { 
		type: DataTypes.INTEGER, 
		primaryKey: true 
	},
	nombre: { type: DataTypes.STRING },
	nivel: { type: DataTypes.STRING }
}, {
	tableName: 'Materia',
	timestamps: false
});

module.exports = Materia;
