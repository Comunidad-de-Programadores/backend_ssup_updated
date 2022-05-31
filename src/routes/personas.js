import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import personaController from '../controllers/persona.controller';

import multipart from 'connect-multiparty';
//import multer from 'multer';

const multiPartMiddleware = multipart({
    uploadDir: 'src/uploaded/profiles'
});
import upload from '../libs/storage';

const router = Router();
import storage from '../libs/storage';

//app.use(multipart({uploadDir: '../uploadeds' }))

function verificar(req, res, next) {
    let p = jwt.verify(req.headers['token'], config.llave, (err, dtoken) => {
        if (err) {
            res.json({ estado: 0, error: err.message, data: null });
        } else {
            req.body.usuario = dtoken.usuario;
            next();
        }
    });

}
console.log('ruta persona');
router.post('/searchnameregisters', personaController.searchRegistOfPersonaNombres);
router.post('/searchciregisterstits', personaController.searchRegistOfPersonaTitsCI);
router.post('/login', personaController.loginPersona);
router.get('/findviewone/:idpers', personaController.findviewOne);
router.get('/findviewallci/:ci', personaController.findviewAllCI);
router.post('/searchFat', personaController.vigenciasPersona);
router.get('/titulares', personaController.registersOfTitulares);
router.get('/beneficiarios', personaController.registersOfBeneficiarios);
router.get('/registersasegurads', personaController.registersasegurads);

router.post('/register', personaController.insertPersonaTitutars);
router.post('/registerProfile', upload.single('images'), personaController.insertPersonaTitutalrProfile);

export default router;