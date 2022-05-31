import { Router } from 'express';
import Pais from '../controllers/pais.controller';

const router = Router();

router.get('/', Pais.findAllpaises);

export default router;