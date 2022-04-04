const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router(); 
const Usuario = require('../models/usuario');

router.post('/', async ( req, res ) => {
	const { body } = req;
	const { nombreUsuario, contraseña } = body;

	const usuario = await Usuario.findOne({ where: { nombreUsuario } })

	const contraseñaValida = usuario === null
		? false
		: await bcrypt.compare(contraseña, usuario.contraseña);

	if (!( usuario && contraseñaValida )) {
		res.status(401).json({
			error: 'Usuario o contraseña no validos'
		});
	}

	const usuarioParaToken = { 
		idUsuario: usuario.idUsuario,
		nombreUsuario: usuario.nombreUsuario
	};

	const token = jwt.sign(
		usuarioParaToken,
		'uwu'
	);

	res.send({
		nombres: usuario.nombres,
		nombreUsuario: usuario.nombreUsuario,
		token
	});
});

module.exports = router;
