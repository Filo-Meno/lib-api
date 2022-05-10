CREATE TABLE Usuario(
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
	contraseña VARCHAR(200),
	nombres VARCHAR(50),
	apellidos VARCHAR(50),
	edad INT,
	correo VARCHAR(50)
);

CREATE TABLE Publicador(
	idPublicador INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	correo VARCHAR(50),
	contraseña VARCHAR(200)
);

CREATE TABLE Materia(
	idMateria INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	nivel VARCHAR(20)
);

CREATE TABLE Articulo(
	idArticulo INT AUTO_INCREMENT PRIMARY KEY,
	tema VARCHAR(100),
	descripcion TEXT,
	enlace VARCHAR(300),
	tipo VARCHAR(20),
	numFav INT,
	idMateria INT,
	idPublicador INT,
	FOREIGN KEY (idMateria) REFERENCES Materia(idMateria),
	FOREIGN KEY (idPublicador) REFERENCES Publicador (idPublicador)
);

CREATE TABLE Favorito(
	idFavorito INT AUTO_INCREMENT,
	idArticulo INT,
	idUsuario INT,
	PRIMARY KEY(idFavorito, idUsuario, idArticulo),
	FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
	FOREIGN KEY (idArticulo) REFERENCES Articulo(idArticulo)
);

CREATE TABLE Tag(
	idTag INT AUTO_INCREMENT,
	idArticulo INT,
	nombre VARCHAR(40),
	PRIMARY KEY (idTag, idArticulo),
	FOREIGN KEY (idArticulo) REFERENCES Articulo (idArticulo)
);
