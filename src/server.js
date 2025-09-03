import express from 'express';
import { Sequelize } from 'sequelize';
import contactosRouter from './routes/contacto.routes.js'; // Incluí la extensión .js

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('agenda_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
});

app.use(express.json());
app.use('/api/contactos', contactosRouter);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

startServer();
