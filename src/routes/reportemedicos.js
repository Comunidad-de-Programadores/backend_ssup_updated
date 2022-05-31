import { Router } from 'express';
import ReportemedicsController from '../controllers/reportemedico.controller';

const router = Router();
router.get('/reportatncionemedico',
    ReportemedicsController.fnVistareportemedicos);
router.post('/pareportatencionemedico',
    ReportemedicsController.fnCallReportesAtencionsMedics);

export default router;