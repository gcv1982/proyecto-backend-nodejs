
import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Servidor activo'));
app.listen(3000, () => console.log('Ping OK en puerto 3000'));