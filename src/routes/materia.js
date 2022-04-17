const express = require('express');
const router = express.Router();
const Materia = require('../models/materia');

router.get('/', async (req, res) => {
  const materias = await Materia.findAll();
  res.send(materias);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const materia = await Materia.findByPk(id);
  res.send(materia);
});

router.post('/add', async (req, res) => {
  const { nombre, nivel } = req.body;
  const nuevaMateria = await Materia.create({
    nombre,
    nivel
  });
  res.send(nuevaMateria);
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, nivel } = req.body;
  await Materia.update({
    nombre,
    nivel
  }, { where: {idMateria: id} });
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Materia.destroy({ where: { idMateria: id } })
});

module.exports = router;
