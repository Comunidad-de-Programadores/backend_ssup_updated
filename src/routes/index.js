import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import documentoRouter from './documento';
import fichaRouter from './ficha';
import personaRouter from './personas';
import institucionRouter from './institucion';
import medicosTurnoRouter from './medicosturno';
import vistareportehorariosRouter from './vistareportehorarios';
import reportemedicosRouter from './reportemedicos';
import reportelaboratRouter from './reportelaboratorio';
import usuarioRouter from './usuario';
import paisesRouter from './pais';
import dptoRouter from './dpto';
import tafilRouter from './tafil';
import tpersRouter from './tpers';
import tcontratRouter from './tcontra';
import profesionsRouter from './profesions';

const router = Router();

function verificar(req,res,next) {
    let p=jwt.verify(req.headers['token'],config.llave,(err,dtoken)=>{
        if(err){
            res.json({estado:0, error:err.message, data:null});
        }else{
            req.body.usuario = dtoken.usuario;
            next();
        }
    });
    
}

router.use('/tcontrats', tcontratRouter);
router.use('/dptos', dptoRouter);
router.use('/tpers', tpersRouter);
router.use('/tafils', tafilRouter);
router.use('/paises', paisesRouter);
router.use('/profesions', profesionsRouter);
router.use('/documento', documentoRouter);
router.use('/ficha', fichaRouter);
router.use('/institucion', institucionRouter);
router.use('/persona', personaRouter);
router.use('/medicsturn', medicosTurnoRouter);
router.use('/vistareportehoraros', vistareportehorariosRouter);
router.use('/reportemeds', reportemedicosRouter);
router.use('/reportelabs', reportelaboratRouter);

router.use('/usuario', usuarioRouter);

export default router;