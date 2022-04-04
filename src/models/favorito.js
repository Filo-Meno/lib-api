const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Favorito = sequelize.define('Favorito', {
	idFavorito: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	idArticulo: { 
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	idUsuario: { 
		type: DataTypes.INTEGER,
		primaryKey: true
	}
}, {
	tableName: 'Favorito',
	timestamps: false
});

module.exports = Favorito;

