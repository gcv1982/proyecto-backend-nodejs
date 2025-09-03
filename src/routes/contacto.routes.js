import express from 'express';
import { getAll, getOne, create, update, remove } from '../controllers/contacto.controller.js';
import { verificarToken } from '../middlewares/auth.js';


const router = express.Router();


router.get('/', verificarToken, getAll);
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
