import { Router } from 'express';
import Tafil from '../controllers/tafil.controller';

const router = Router();

router.get('/', Tafil.findAllTafils);

export default router;