const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Tag = sequelize.define('Tag', {
	idTag: { 
		type: DataTypes.INTEGER, 
		primaryKey: true 
	},
	idArticulo: { 
		type: DataTypes.INTEGER, 
		primaryKey: true 
	},
	nombre: { type: DataTypes.STRING },
}, {
	tableName: 'Tag',
	timestamps: false
});

module.exports = Tag;
