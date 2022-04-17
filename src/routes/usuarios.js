const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.send(usuarios);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  res.send(usuario);
});

router.post('/add', async (req, res) => {
  const { contraseña, nombres, apellidos, edad, correo } = req.body;
  
  const saltRounds = 10;
  const contraHash = await bcrypt.hash(contraseña, saltRounds);

  const nuevoUsuario = await Usuario.create({
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
