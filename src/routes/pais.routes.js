
import { Router } from 'express';
import { getAll } from '../controllers/pais.controller.js';

const router = Router();
router.get('/', getAll);
export default router;
