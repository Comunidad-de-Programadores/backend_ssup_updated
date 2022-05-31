import { Router } from 'express';
import medicosturnoController from '../controllers/medicosturno.controller';

const router = Router();

router.get('/:idcateg', medicosturnoController.viewAreasToDay);
router.get('/:idcateg/:idmedic', medicosturnoController.viewDetaillToDay);
export default router;