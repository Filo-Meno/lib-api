const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  const usuarios = await pool.query("SELECT * FROM Usuario");
  //console.log(usuarios);
  res.send(usuarios);
});

router.post('/add', async (req, res) => {
  //console.log(req.body);
  const { nombres, apellidos, edad, correo } = req.body;
  const newUser = {
    nombres,
    apellidos,
    edad,
    correo
  };
  await pool.query('INSERT INTO Usuario set ?', [newUser]);
  res.send('Enviado');
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, edad, correo } = req.body;
  const newUser = {
    nombres,
    apellidos,
    edad,
    correo
  };
  await pool.query('UPDATE Usuario set ? WHERE idUsuario = ?', [newUser, id]);
  res.send('Modiicado');
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM Usuario WHERE idUsuario = ?", [id]);
  res.send('Eliminado');
});

module.exports = router;
