const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  const items = await pool.query("SELECT * FROM Item");
  //console.log(items);
  res.send(items);
});

router.post('/add', async (req, res) => {
  //console.log(req.body);
  const { idArticulo } = req.body;
  const newItem = {
    idArticulo,
  };
  await pool.query('INSERT INTO Item set ?', [newItem]);
  res.send('Enviado');
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { idArticulo } = req.body;
  const newItem = {
    idArticulo,
  };
  await pool.query("UPDATE Item set ? WHERE idItem = ?", [newItem, id]);
  res.send("Modiicado");
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE idItem = ?", [id]);
  res.send('Eliminado');
});

module.exports = router;
