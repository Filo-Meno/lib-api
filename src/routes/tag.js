const express = require('express');
const router = express.Router();
const Tag = require('../models/materia');

router.get('/', async (req, res) => {
  const tags = await Tag.findAll();
  res.send(tags);
});

router.post('/add', async (req, res) => {
  const { idArticulo, nombre } = req.body;
  const nuevoTag = await Tag.create({
		idArticulo,
    nombre
  });
  res.send(nuevoTag);
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { idArticulo, nombre } = req.body;
  await Tag.update({
		idArticulo,
    nombre
  }, { where: {idTag: id} });
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Tag.destroy({ where: { idTag: id } })
});

module.exports = router;
