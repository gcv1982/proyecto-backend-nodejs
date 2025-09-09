
import { Router } from 'express';
import {
  obtenerContactos,
  crearContacto,
  actualizarContacto,
  eliminarContacto
} from '../controllers/contacto.controller.js';

const router = Router();

router.get('/', obtenerContactos);
router.post('/', crearContacto);
router.put('/:id', actualizarContacto);
router.delete('/:id', eliminarContacto);

export default router;