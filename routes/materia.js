const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  const materias = await pool.query("SELECT * FROM Materia");
  //console.log(materias);
  res.send(materias);
});

router.post('/add', async (req, res) => {
  //console.log(req.body);
  const { nombre, nivel } = req.body;
  const newMateria = {
    nombre,
    nivel
  };
  await pool.query('INSERT INTO Materia set ?', [newMateria]);
  res.send('Enviado');
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, nivel } = req.body;
  const newMateria = {
    nombre,
    nivel
  };
  await pool.query("UPDATE Materia set ? WHERE idMateria = ?", [newUser, id]);
  res.send("Modiicado");
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE idMateria = ?", [id]);
  res.send('Eliminado');
});

module.exports = router;
