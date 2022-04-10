const express = require('express');
const router = express.Router();
const Publicador = require('../models/publicador');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const publicadores = await Publicador.findAll();
  res.send(publicadores);
});

router.post('/add', async (req, res) => {
  const { contraseña, nombre, correo } = req.body;
  
  const saltRounds = 10;
  const contraHash = await bcrypt.hash(contraseña, saltRounds);

  const nuevoPublicador = await Publicador.create({
    contraseña: contraHash,
    nombre,
    correo
  });
  res.send(nuevoPublicador);
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  await Publicador.update({
    nombre,
    correo
  }, { where: {idPublicador: id} });
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Publicador.destroy({ where: { idPublicador: id } })
});

module.exports = router;
