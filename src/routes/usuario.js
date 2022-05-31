import { Router } from 'express';
import usuarioController from '../controllers/usuario.controller';

const router = Router();

router.get('/', usuarioController.allUsuarios);
router.post('/login', usuarioController.loginUsuario);

export default router;