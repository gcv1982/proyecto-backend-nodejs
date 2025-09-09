

import Contacto from '../models/contacto.model.js';
import { Router } from 'express';
import {
  obtenerContactos,
  actualizarContacto,
  eliminarContacto
} from '../controllers/contacto.controller.js';

const router = Router();

router.post('/', async (req, res) => {
  try {

    console.log('Datos recibidos:', req.body);
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: 'Faltan datos' });
    }



    const nuevoContacto = await Contacto.create({ nombre, email, telefono });
    res.status(201).json({ message: 'Contacto guardado', data: nuevoContacto });
  } catch (error) {
    console.error('Error al crear contacto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }

});

router.get('/', obtenerContactos);
router.put('/:id', actualizarContacto);
router.delete('/:id', eliminarContacto);

export default router;