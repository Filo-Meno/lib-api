const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Articulo = sequelize.define('Articulo', {
	idArticulo: { 
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	tema: { type: DataTypes.STRING },
	//descripcion: { type: DataTypes.TEXT },
	enlace: { type: DataTypes.STRING },
	tipo: { type: DataTypes.STRING },
	//numFav: { type: DataTypes.INTEGER },
	idMateria: { type: DataTypes.INTEGER }
}, {
	tableName: 'Articulo',
	timestamps: false
});

module.exports = Articulo;


/*const pool = require('../database');

const listarArticulos = async () => {
	await pool.qu
}*/
