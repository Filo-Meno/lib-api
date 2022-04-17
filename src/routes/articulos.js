const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulo');
const Tag = require('../models/tag');
const Materia = require('../models/materia');
const Publicador = require('../models/publicador');
const extPub = require('../middleware/extractorPublicador');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  const articulos = await Articulo.findAll({
    include: [
      {
        model: Tag,
        as: "tags",
        //attributes: ["nombre"],
      },
    ],
    order: [
      ['numFav', 'DESC'],
    ],
  });
  res.send(articulos);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const articulo = await Articulo.findByPk(id, {
    include: [
      {
        model: Publicador,
        as: "publicador",
        attributes: { exclude: ['contraseña'] }
      },
      {
        model: Materia,
        as: "materia",
      }
    ],
  });
  res.send(articulo);
});

router.get('/filtro/:filtro', async (req, res) => {
  const { filtro } = req.params;
  const articulos = await Articulo.findAll({
    where: {
      tema: {
        [Op.substring]: filtro,
      },
    },
    order: [
      ['numFav', 'DESC'],
    ],
  });
  res.send(articulos);
});

router.get('/materia/:id', async (req, res) => {
  const { id } = req.params;
  const articulos = await Articulo.findAll({
    where: {
      idMateria: id,
    },
    order: [
      ['numFav', 'DESC'],
    ],
  });
  res.send(articulos);
});

router.get('/tags', async (req, res) => {
  const { tags } = req.body;
  const articulos = await Articulo.findAll(); 
});

router.post('/add', extPub, async (req, res) => {
  const { tema, enlace, tipo, idMateria } = req.body;
  const { idPublicador } = req;
  const nuevoArticulo = await Articulo.create({
    tema,
    enlace,
    tipo,
    idMateria,
    idPublicador,
    numFav: 0,
  });
  res.send(nuevoArticulo);
});

router.put('/edit/:id', extPub, async (req, res) => {
  const { id } = req.params;
  const { tema, enlace, tipo, idMateria } = req.body;
  const { idPublicador } = req;
  await Articulo.update(
    {
      tema,
      enlace,
      tipo,
      idMateria,
      idPublicador,
    },
    {
      where: {
        [Op.and]: [{ idArticulo: id }, { idPublicador }],
      },
    }
  );
});

router.delete('/delete/:id', extPub, async (req, res) => {
  const { id } = req.params;
  const { idPublicador } = req;
  await Articulo.destroy({
    where: {
      [Op.and]: [{ idArticulo: id }, { idPublicador }],
    },
  });
});

module.exports = router;
