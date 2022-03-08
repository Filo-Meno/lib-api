const express = require('express');
const mysql = require('mysql');
const { promisify } = require('util')
const app = express();
const port = 4000;

database = {
		host: 'awa-de-ewe-sabor-a-uwu.mysql.database.azure.com',
		user: 'accelerator@awa-de-ewe-sabor-a-uwu',
		password: 'qwerQWER1234',
		database: 'libreria'
}

const pool = mysql.createPool(database)

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

app.get("/", async (req, res) => {
  const usuarios = await pool.query("SELECT * FROM usuarios");
  console.log(usuarios);
  res.send(usuarios);
});


app.listen(port, () => {
	console.log(`Api listening on port ${port}`)
})
