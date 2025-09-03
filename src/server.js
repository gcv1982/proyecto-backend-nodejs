import express from 'express';
import { Sequelize } from 'sequelize';
import contactosRouter from './routes/contacto.routes.js'; // Incluí la extensión .js
import provinciasRouter from './routes/provincias.routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('agenda_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
});

app.use(express.json());

app.use('/api/contactos', contactosRouter);
app.use('/api/provincias', provinciasRouter);

import Provincia from './models/provincia.model.js';
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await Provincia.sync();
    const existentes = await Provincia.count();
if (existentes === 0) {
  await Provincia.bulkCreate([
    { nombre: 'Córdoba' },
    { nombre: 'Santa Fe' },
    { nombre: 'Buenos Aires' },
    { nombre: 'Mendoza' },
    { nombre: 'Tucumán' }
  ]);
  console.log('Provincias de prueba insertadas.');
}

 
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

startServer();
