const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  const articulos = await pool.query("SELECT * FROM Articulo");
  //console.log(articulos);
  res.send(articulos);
});

router.post('/add', async (req, res) => {
  //console.log(req.body);
  const { tema, enlace, tipo, idMateria } = req.body;
  const newArticulo = {
    tema,
    enlace,
    tipo,
    idMateria,
  };
  await pool.query('INSERT INTO Articulo set ?', [newArticulo]);
  res.send('Enviado');
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { tema, enlace, tipo, idMateria } = req.body;
  const newArticulo = {
    tema,
    enlace,
    tipo,
    idMateria,
  };newUser
  await pool.query("UPDATE Articulo set ? WHERE idArticulo = ?", [newArticulo, id]);
  res.send("Modiicado");
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE idArticulo = ?", [id]);
  res.send('Eliminado');
});

module.exports = router;
