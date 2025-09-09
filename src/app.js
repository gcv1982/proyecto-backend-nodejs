
import express from 'express';
import cors from 'cors';
import contactoRoutes from './routes/contacto.routes.js'; // ¡Ojo con la extensión!

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', contactoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');

});
