const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get("/", async (req, res) => {
  res.send({message: "Bienvenido a la API"});
});


module.exports = router;
