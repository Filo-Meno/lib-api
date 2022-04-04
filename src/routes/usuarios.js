const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.send(usuarios);
});

router.post('/add', async (req, res) => {
  const { nombreUsuario, contraseña, nombres, apellidos, edad, correo } = req.body;
  
  const saltRounds = 10;
  const contraHash = await bcrypt.hash(contraseña, saltRounds);

  const nuevoUsuario = await Usuario.create({
    nombreUsuario,
    contraseña: contraHash,
    nombres,
    apellidos,
    edad,
    correo
  });
  res.send(nuevoUsuario);
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, edad, correo } = req.body;
  await Usuario.update({
    nombres,
    apellidos,
    edad,
    correo
  }, { where: {idUsuario: id} });
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Usuario.destroy({ where: { idUsuario: id } })
});

module.exports = router;

/*const express = require('express');
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

module.exports = router;*/
