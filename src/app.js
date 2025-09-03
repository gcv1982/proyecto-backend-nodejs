const express = require('express');
const app = express();
const contactoRoutes = require('./routes/contacto.routes');

app.use(express.json());
app.use('/api/contactos', contactoRoutes);

module.exports = app;
