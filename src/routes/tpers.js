import { Router } from 'express';
import Tpers from '../controllers/tpers.controller';

const router = Router();

router.get('/', Tpers.findAll);

export default router;