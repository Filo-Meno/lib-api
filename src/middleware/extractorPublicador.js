const jwt = require('jsonwebtoken');

const extPub = (req, res, next) => {
	const authorization = req.get('authorization');
	let token = ''

	if (authorization && authorization.toLowerCase().startsWith('bearer')) {
		token = authorization.substring(7);
	}

	const decodedToken = jwt.verify(token, 'uwu');
	console.log(decodedToken);

	if (!token || !decodedToken.idPublicador) {
		return res.status(401).json({error: 'Falta token o es invalido'})
	}

	const { idPublicador } = decodedToken;

	req.idPublicador = idPublicador;

	next();
}

module.exports = extPub;
