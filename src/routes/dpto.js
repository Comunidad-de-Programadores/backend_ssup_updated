import { Router } from 'express';
import Dpto from '../controllers/dpto.controller';

const router = Router();

router.get('/', Dpto.findAlldptos);
router.get('/:idpais', Dpto.findAlldptosforContry);

export default router;