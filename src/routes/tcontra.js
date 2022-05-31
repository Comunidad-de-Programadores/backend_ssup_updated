import { Router } from 'express';
import Tcontra from '../controllers/tcontra.controller';

const router = Router();

router.get('/', Tcontra.findAll);

export default router;