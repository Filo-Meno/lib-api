const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulo');
const extPub = require('../middleware/extractorPublicador');

router.get('/', async (req, res) => {
  const articulos = await Articulo.findAll();
  res.send(articulos);
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
