import { Router } from 'express';
import institucionController from '../controllers/institucion.controller';

const router = Router();

router.get('/:idinstitucion', institucionController.findOne);
router.get('/', institucionController.findAll);
//router.get('/', institucionController.viewsearchdate);

export default router;
