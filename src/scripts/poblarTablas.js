
import Empresa from '../models/empresa.model.js';
import Pais from '../models/pais.model.js';
import Localidad from '../models/localidad.model.js';
import sequelize from '../config/sequelize.js';

async function poblarTablas() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión establecida.');

    await Empresa.sync();
    await Pais.sync();
    await Localidad.sync();

    const empresasExistentes = await Empresa.count();
    if (empresasExistentes === 0) {
      await Empresa.bulkCreate([
        { nombre: 'Tech Solutions' },
        { nombre: 'AgroCorp' },
        { nombre: 'Logística Express' },
        { nombre: 'Educativa Global' },
        { nombre: 'Salud Vital' }
      ]);
      console.log('📦 Empresas insertadas.');
    }

    const paisesExistentes = await Pais.count();
    if (paisesExistentes === 0) {
      await Pais.bulkCreate([
        { nombre: 'Argentina' },
        { nombre: 'Brasil' },
        { nombre: 'Chile' },
        { nombre: 'Uruguay' },
        { nombre: 'Paraguay' }
      ]);
      console.log('🌎 Países insertados.');
    }

    const localidadesExistentes = await Localidad.count();
    if (localidadesExistentes === 0) {
      await Localidad.bulkCreate([
        { nombre: 'Las Varillas' },
        { nombre: 'Villa María' },
        { nombre: 'Río Cuarto' },
        { nombre: 'San Francisco' },
        { nombre: 'Córdoba Capital' }
      ]);
      console.log('🏙 Localidades insertadas.');
    }

    console.log('✅ Población de tablas completada.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al poblar tablas:', error);
    process.exit(1);
  }
}

poblarTablas();
