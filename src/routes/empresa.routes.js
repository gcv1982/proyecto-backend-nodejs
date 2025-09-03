
import { Router } from 'express';
import { getAll } from '../controllers/empresa.controller.js';

const router = Router();
router.get('/', getAll);
export default router;
