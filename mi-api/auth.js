const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Ruta POST para login
router.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  // Validación mínima (podés conectar con tu DB acá)
  if (usuario === 'admin' && contraseña === '1234') {
    const payload = { usuario };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Credenciales inválidas' });
});

module.exports = router;