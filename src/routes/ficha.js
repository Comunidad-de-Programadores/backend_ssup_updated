import { Router } from 'express';
import fichaController from '../controllers/ficha.controller';

const router = Router();

router.get('/medics/:idficha', fichaController.findOneMedicals);
router.get('/analis/:idficha', fichaController.findOneAnalisis);
router.post('/disposicions', fichaController.findAllDispositions);
router.post('/disposicion', fichaController.findAllDisposition);
router.post('/verificarAll', fichaController.verifyAllDisposition);
router.post('/verificarOne', fichaController.verifyOneDisposition);
router.post('/registrar', fichaController.registerTicket);
//router.post('/register', fichaController.createRegistrFicha)
export default router;