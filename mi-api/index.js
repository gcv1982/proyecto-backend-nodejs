
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.js'; // asegurate que el archivo se llame auth.js
import verificarToken from '../middleware/verificarToken.js'; // ajustá según ubicación real

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/api/protegida', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', usuario: req.usuario });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});