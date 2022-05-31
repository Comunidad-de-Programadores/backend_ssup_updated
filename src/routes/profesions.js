import { Router } from 'express';
import Profesion from '../controllers/profesion.controller';

const router = Router();

router.get('/', Profesion.findAll);

export default router;