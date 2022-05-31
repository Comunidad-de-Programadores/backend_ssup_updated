import { Router } from 'express';
import VistareportehorariosController from '../controllers/vistareportehorarios.controller';

const router = Router();

router.get('/reportehorarios',VistareportehorariosController.fnVistareportehorarios);
router.get('/pareportehorarios',VistareportehorariosController.fnCallSPVistareportehorarios);

export default router;