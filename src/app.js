
import express from 'express';
import contactosRoutes from './routes/contacto.routes.js'; // ¡Ojo con la extensión!

const app = express();
app.use(express.json());

app.use('/contactos', contactosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
