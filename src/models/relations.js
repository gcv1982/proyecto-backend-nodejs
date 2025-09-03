
import Contacto from './models/contacto.model.js';
import Empresa from './models/empresa.model.js';
import Provincia from './models/provincia.model.js';
import Pais from './models/pais.model.js';
import Localidad from './models/localidad.model.js';

// Relaciones
Contacto.belongsTo(Empresa);
Empresa.hasMany(Contacto);

Contacto.belongsTo(Pais);
Pais.hasMany(Contacto);

Contacto.belongsTo(Provincia);
Provincia.hasMany(Contacto);

Contacto.belongsTo(Localidad);
Localidad.hasMany(Contacto);