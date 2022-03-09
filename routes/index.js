const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  const usuarios = await pool.query("SELECT * FROM usuarios");
  console.log(usuarios);
  res.send(usuarios);
});


module.exports = router;
