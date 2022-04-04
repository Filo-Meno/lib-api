const { Sequelize } = require('sequelize');
const { host, user, password, database } = require("./keys");

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion establecida satisfactoriamente");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos");
  });

module.exports = sequelize;

/*const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("DATABASE CONNECTION WAS CLOSED");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("DATABASE HAS TO MANY CONNECTIONS");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("DATABASE CONNECTION WAS REFUSED");
    }
  }
  if (connection) connection.release();
  if (!err) {
    console.log("DB is Connected");
  }
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;*/
