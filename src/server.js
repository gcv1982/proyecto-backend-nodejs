import express from 'express';
import { Sequelize } from 'sequelize';
import contactosRouter from './routes/contacto.routes.js'; // Incluí la extensión .js
import provinciasRouter from './routes/provincias.routes.js';
import empresaRouter from './routes/empresa.routes.js';
import paisRouter from './routes/pais.routes.js';
import localidadRouter from './routes/localidad.routes.js';
import verificarToken from './middleware/verificarToken.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('agenda_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
});

app.use(express.json());

app.use('/api/contactos', contactosRouter);
app.use('/api/provincias', provinciasRouter);
app.use('/api/empresas', empresaRouter);
app.use('/api/paises', paisRouter);
app.use('/api/localidades', localidadRouter);


import Provincia from './models/provincia.model.js';
import Empresa from './models/empresa.model.js';
import Pais from './models/pais.model.js';
import Localidad from './models/localidad.model.js';
import Contacto from './models/contacto.model.js';
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await Empresa.sync();
await Pais.sync();
await Provincia.sync(); // Ya lo tenías
await Localidad.sync();
await Contacto.sync();

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
app.post('/api/auth/login', (req, res) => {
  console.log('Body recibido:' , req.body);
  const { usuario, contraseña } = req.body;

  // Validación básica (podés conectar con tu DB si querés)
  if (usuario === 'admin' && contraseña === '1234') {
    const payload = { usuario };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Credenciales inválidas' });
});
 
app.get('/api/protegida', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', usuario: req.usuario });
});

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

startServer();
