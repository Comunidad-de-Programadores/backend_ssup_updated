import Ficha from '../models/Ficha';
import Persona from "../models/Persona";
import { Op } from 'sequelize';
import Receta from '../models/Receta';
import Analisis from '../models/Analisis';
import Transferencia from '../models/Transferencia';

const op = Op;
function registerTicket(req, res) { //REGISTRO DE FICHAS
    let dia = new Date();
    let fechact = new Date(req.body.fechasoli);
    dia.setDate(dia.getDate() + 1);
    fechact.setDate(fechact.getDate() - 1);
    fechact.setUTCHours(fechact.getUTCHours() - 4);
    Ficha.create({
        cod_med: req.body.codmed,
        cod_esp: req.body.codesp,
        cod_serv: req.body.codserv,
        dia: dia.getDay(),
        periodo: req.body.periodo,
        cod_con: req.body.codcon,
        cod_tit: req.body.codtit,
        cod_pac: req.body.codpac,
        fecha_soli: req.body.fechasoli,
        hora_soli: fechact,
        nro_ficha: req.body.nroficha,
        hora_pres: req.body.horapres,
        hora_aten: req.body.horaaten,
        estado: 'E',
        cod_usu: 999,
        est_cons: ''
    })
        .then((data) => {
            res.io.emit('bloqueardisposicion', {
                "nroficha": req.body.nroficha,
                "codmed": req.body.codmed,
                "codesp": req.body.codesp,
                "fecha": req.body.fechasoli
            });
            res.json({ data, state: true });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
}
async function verifyOneDisposition(req, res) {
    let fechamasundia = new Date(req.body.fechpresent);
    fechamasundia.setDate(fechamasundia.getDate() + 1);
    await Ficha.findOne({
        where: {
            [op.and]: [{
                [op.and]: [
                    { fecha_soli: req.body.fechpresent },
                    { cod_med: req.body.codmed }
                ],
            }, {
                [op.and]: [{
                    estado: { [Op.ne]: ['B'] }
                }, {
                    //cod_esp: { [op.ne]: 10 }
                    cod_esp: req.body.codesp
                }]
            }],
            nro_ficha: req.body.nroficha
        }
    })
        .then(data => {
            if (data.length > 0) { //SI EXISTE UN REGISTRO O MAS DE LA FICHA ESTA OCUPADA
                res.json({
                    state: false
                }
                );
            } else { //NO EXISTE UN REGISTRO, LA FICHA ESTA OCUPADA
                res.json({
                    state: true
                });
            }
        })
        .catch(err => {
            res.json(err);
        });
}
async function verifyAllDisposition(req, res) { //VERIFICACION DE DISPOSICIÓN POR FECHA_SOLI, COD_MED ESTADO !='B' && COD_ESP!=10 && NRO_FICHA=NROFICHA
    let fechamasundia = new Date(req.body.fechpresent);
    fechamasundia.setDate(fechamasundia.getDate() + 1);
    await Ficha.findAll({
        where: {
            [op.and]: [{
                [op.and]: [{
                    fecha_soli: fechamasundia,
                    cod_med: req.body.codmed
                }],
            }, {
                [op.and]: [{
                    estado: { [Op.ne]: ['B'] },
                    cod_esp: { [op.ne]: 10 }
                }]
            }],
            nro_ficha: req.body.nroficha
        }
    })
        .then(data => {
            if (data.length > 0) { //SI EXISTE UN REGISTRO O MAS DE LA FICHA ESTA OCUPADA
                res.json({
                    state: false
                }
                );
            } else { //NO EXISTE UN REGISTRO, LA FICHA ESTA OCUPADA
                res.json({
                    state: true
                });
            }
        })
        .catch(err => {
            res.json(err);
        });
}
async function findAllDisposition(req, res) {
    let fechamasundia = new Date(req.body.fechpresent);
    fechamasundia.setDate(fechamasundia.getDate() + 1);
    await Ficha.findAll({
        where: {
            [op.and]: [{
                [op.and]: [{
                    fecha_soli: fechamasundia,
                    cod_med: req.body.codmed
                }],
            }, {
                [op.and]: [{
                    estado: { [Op.ne]: ['B'] },
                    cod_esp: { [op.ne]: 10 }
                }]
            }],
            nro_ficha: req.body.nroficha
        }
    })
        .then(data => {
            if (data.length > 0) {
                console.log("ficha reservada : ");
                res.json({
                    data,
                    state: 0
                });
            } else {
                console.log("ficha Libre : ");
                res.json({
                    data,
                    state: 1
                });
            }
        })
        .catch(err => {
            res.json(err);
        });
}
function findAllDispositions(req, res) {
    let fechamasundia = new Date(req.body.fechsol_citud);
    fechamasundia.setDate(fechamasundia.getDate() + 1);
    Ficha.findAll({
        where: {
            [op.and]: [{
                fecha_soli: fechamasundia
            }, {
                cod_med: req.body.codmed
            }],
            cod_tit: req.body.codtit
        }
    })
        .then(data => {
            console.log('data :... ', data[0].cod_med);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
}
function findOneMedicals(req, res) {
    Ficha.findOne({
        include: [{
            model: Receta,
        }, {
            model: Analisis
        }, {
            model: Transferencia
        }],
        where: {
            id_ficha: req.params.idficha
        }
    })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
}
function findOneAnalisis(req, res) {
    Ficha.findOne({
        include: [{
            model: Analisis
        }],
        where: {
            id_ficha: req.params.idficha
        }
    })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
}


/*async function createRegistrFicha(req, res) {
    console.log(req.body);
    const query = 'Ent_Ficha_A :param1, :param2, :param3, :param4, param5, :param6, :param7, :param8, param9, :param10, :param11, :param12, param13, :param14, :param15, param16';
    await Ficha.sequelize.query(query, {
        replacements: {
            param1: req.body.codmed,
            param2: req.body.codesp,
            param3: req.body.codserv,
            param4: req.body.dia,
            param5: req.body.periodo,
            param6: req.body.codcon,
            param7: req.body.codtit,
            param8: req.body.codpac,
            param9: req.body.fechasoli,
            param10: req.body.horasoli,
            param11: req.body.nroficha,
            param12: req.body.horapres,
            param13: req.body.horaaten,
            param14: req.body.estado,
            param15: req.body.codusu,
            param16: req.body.estcons,
        },
        type: Ficha.sequelize.QueryTypes.SELECT
    })
        .then((dat) => {
            //console.log(dat);
            res.json(dat);
        })
        .catch((err) => {
            console.log('ERROR', err);
            res.json(err)
        });
}*/
export default {
    registerTicket,
    verifyAllDisposition,
    verifyOneDisposition,
    findOneMedicals,
    findOneAnalisis,
    findAllDispositions,
    findAllDisposition,
    //createRegistrFicha
}