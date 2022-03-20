/*
	BASICS
 */

CREATE TABLE Usuario(
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
	nombres VARCHAR(50),
	apellidos VARCHAR(50),
	edad INT,
	correo VARCHAR(50),
);

/*CREATE TABLE ListaPrivada(
	idUsuario INT,
);*/

CREATE TABLE Item(
	idArticulo INT,
	idUsuario INT,
	primary KEY(idUsuario, idArticulo),
	foreign key (idUsuario) references Usuario(idUsuario),
	foreign key (idArticulo) references Articulo(idArticulo)
);

CREATE TABLE Articulo(
	idArticulo INT auto_increment primary key,
	tema VARCHAR(100),
	enlace VARCHAR(300),
	tipo VARCHAR(20),
	idMateria INT,
	foreign key (idMateria) references Materia(idMateria)
);

CREATE TABLE Materia(
	idMateria INT auto_increment primary KEY,
	nombre VARCHAR(50),
	nivel VARCHAR(20)
);

/*
	ADMIN
*/

CREATE TABLE Admin(
	idAdmin INT AUTO_INCREMENT,
	nombres VARCHAR(50),
	apellidos VARCHAR(50),
	dni VARCHAR(9)
);
