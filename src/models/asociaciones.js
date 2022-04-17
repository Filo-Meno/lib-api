const Articulo = require('./articulo');
const Tag = require('./tag'); 
const Publicador = require('./publicador');
const Materia = require('./materia');

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

