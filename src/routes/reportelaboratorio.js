import { Router } from 'express';
import reporteLabsController from '../controllers/reportelaboratorio.controller';

const router = Router();

router.post('/resultads', reporteLabsController.fnCallReportesLaboratorios);
router.post('/resultadsinstitucions', reporteLabsController.fnCallReportesLaboratoriosInstitucions);

export default router;