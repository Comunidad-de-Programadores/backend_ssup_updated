import { Router } from 'express';
import DocumentoController from '../controllers/documento.controller';

const router = Router();

router.get('/:idparams', DocumentoController.findOne);
router.get('/docsuseres/:idparamsusuario', DocumentoController.porUsuarios);

export default router;
