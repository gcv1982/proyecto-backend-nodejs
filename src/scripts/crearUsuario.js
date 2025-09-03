
import Usuario from '../models/usuario.model.js';
import sequelize from '../config/sequelize.js';
import bcrypt from 'bcrypt';

async function crearUsuario() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión establecida.');

    await Usuario.sync();

    const existe = await Usuario.findOne({ where: { email: 'admin@agenda.com' } });
    if (existe) {
      console.log('⚠️ El usuario ya existe.');
      process.exit(0);
    }

    const passwordEncriptada = await bcrypt.hash('admin123', 10);

    await Usuario.create({
      nombre: 'Administrador',
      email: 'admin@agenda.com',
      password: passwordEncriptada
    });

    console.log('✅ Usuario creado: admin@agenda.com / admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
    process.exit(1);
  }
}

crearUsuario();