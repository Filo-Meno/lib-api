const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router(); 
const Usuario = require('../models/usuario');
const Publicador = require('../models/publicador');

router.post('/', async ( req, res ) => {
	const { body } = req;
	const { correo, contraseña, esPublicador } = body;
  console.log(body);
	if (!esPublicador) {
    const usuario = await Usuario.findOne({ where: { correo } });
    const contraseñaValida =
      usuario === null
        ? false
        : await bcrypt.compare(contraseña, usuario.contraseña);

    if (!(usuario && contraseñaValida)) {
      res.status(401).json({
        error: "Usuario o contraseña no validos",
      });
    } else {
      const usuarioParaToken = {
        idUsuario: usuario.idUsuario,
        correo: usuario.correo,
      };

      const token = jwt.sign(usuarioParaToken, "uwu");

      res.send({
        nombres: usuario.nombres,
        correo: usuario.correo,
        esPub: false,
        token,
      });
    }
  } else {
    const publicador = await Publicador.findOne({ where: { correo } });
    const contraseñaValida =
      publicador === null
        ? false
        : await bcrypt.compare(contraseña, publicador.contraseña);

    if (!(publicador && contraseñaValida)) {
      res.status(401).json({
        error: "Usuario o contraseña no validos",
      });
    } else {
      const usuarioParaToken = {
        idPublicador: publicador.idPublicador,
        correo: publicador.correo,
      };

      const token = jwt.sign(usuarioParaToken, "uwu");

      res.send({
        nombre: publicador.nombre,
        correo: publicador.correo,
        esPub: true,
        token,
      });
    }
  }
});

module.exports = router;
