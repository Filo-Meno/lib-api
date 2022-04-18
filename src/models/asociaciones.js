const Articulo = require('./articulo');
const Tag = require('./tag'); 
const Publicador = require('./publicador');
const Materia = require('./materia');
const Favorito = require('./favorito');

Articulo.hasMany(Tag, {
	as: "tags",
  foreignKey: "idArticulo"
});
Tag.belongsTo(Articulo, {
	as: "articulo",
  foreignKey: "idArticulo"
});

Publicador.hasMany(Articulo, {
  as: "articulos",
  foreignKey: "idPublicador"
});
Articulo.belongsTo(Publicador, {
  as: "publicador",
  foreignKey: "idPublicador"
});

Materia.hasMany(Articulo, {
  as: "articulos",
  foreignKey: "idMateria"
});
Articulo.belongsTo(Materia, {
  as: "materia",
  foreignKey: "idMateria"
});

Articulo.hasMany(Favorito, {
  as: "favoritos",
  foreignKey: "idArticulo"
});

Favorito.belongsTo(Articulo, {
  as: "articulo",
  foreignKey: "idArticulo"
});
