import Persona from "../models/Persona";
import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import config from '../config';
import Institucion from "../models/Institucion";
import Tafil from "../models/Tafil";
import Pais from "../models/Pais";
const Op = Sequelize.Op;

async function insertPersonaTitutalrProfile(req, res) {
    console.log(req.file);
    return await res.send({
        'message': 'Fichero subido satisfactoriamente!!!'
    });
}
async function insertPersonaTitutars(req, res) {
    let t_ident = (req.body.tipo_documento == 'CI') ? 1 : ((req.body.tipo_documento == 'PAS') ? 3 : ((req.body.tipo_documento == 'CNA') ? 5 : 6));
    return await Persona.create({
        nombres: req.body.apellidos_nombres,
        t_iden: t_ident,
        nro_id: req.body.numero_documento,
        ext_id: req.body.docexp,
        dpto_id: req.body.depart,
        fecha_nac: req.body.fecha_nacimiento,
        pais_nac: req.body.pais,
        sexo: req.body.sexo,
        e_civil: req.body.estadcivil,
        direccion: req.body.direccion,
        tel_dom: req.body.telcel,
        grup_san: req.body.grupsanguin,
        obser: req.body.observaciones,
        nro_ruc: req.body.nit,
        nua: req.body.matricula,
        tit_ben: 'T',
        //fecha_afil: req.body.fechafil,
        fecha_baja: req.body.fechacad,
        fecha_cadu: req.body.fechavig,
        tipo_afil: req.body.tipoafiliado,
        cod_inst: req.body.institucion,
        cod_tper: req.body.tipopersona,
        cod_tcon: req.body.tipocontrato,
        cod_prof: req.body.profesion,
        estado: req.body.estado,
        imagen: '',
        usuario: 777
    }).then((data) => {
        //res.io.emit("userregister", { data });
        res.json({
            data,
            "state": 1
        });
    }).catch(err => {
        console.log("err : \n", err);
        res.json({
            err,
            "state": 0
        });
    });

}
async function vigenciasPersona(req, res) {
    let fecha = new Date(req.body.fechaafil); console.log(req.body.fechaafil);
    return await Persona.findOne({
        where: {
            fecha_soli: req.body.fechaafil
        }
    }).then(data => {
        console.log(data);
        return res.json(data);
    }).catch(function (err) {
        console.log(err);
        res.json({ "error": err, "state": -1, "token": null });
    });
}
async function findviewAllCI(req, res) {
    console.log(req.params);
    return await Persona.findAll({
        include: [{
            model: Institucion
        }],
        where: {
            nro_id: req.params.ci,
        }
    }).then(data => {
        return res.json({
            data,
            "state": 1
        });
    }).catch(err => {
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', err);
        return res.json({
            "data": err,
            "state": 0
        });
    });
}
async function findviewOne(req, res) {
    return await Persona.findOne({
        include: [{
            model: Institucion
        }],
        where: {
            cod_pers: req.params.idpers,
        }
    }).then(data => {
        return res.json({
            data,
            "state": 1
        });
    }).catch(err => {
        return res.json({
            "data": err,
            "state": 0
        });
    });
}
async function loginPersona(req, res) {
    let token = "";
    return await Persona.findOne({
        include: [{
            model: Institucion
        }],
        where: {
            cod_pers: req.body.cod_pers,
            nro_id: req.body.nro_id
        }
    }).then(data => { //console.log(data);
        if (data) {
            token = jwt.sign({
                Persona: data,
                iat: Math.floor(Date.now() / 1000) - 300,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, config.llave);

            let results = data.dataValues;
            res.io.username = data.dataValues;
            /*res.io.emit('pacientconnected', {
                results : 'Otros resultados!!!;'
            });*/
            res.json({
                "data": data.dataValues,
                "state": 1,
                "token": token
            });
        } else {
            res.json({ "data": "error", "state": 0, "token": "" });
        }
    }).catch(function (err) {
        console.log(err);
        res.json({ "error": err, "state": -1, "token": null });
    });
}
async function searchRegistOfPersonaTitsCI(req, res) {
    return await Persona.findAll({
        include: [{
            model: Institucion
        }, {
            model: Tafil
        }, {
            model: Pais
        }],
        where: {
            nro_id: req.body.ci
        }
    }).then(datos => {
        res.json({
            datos: datos
        });
    }).catch(function (err) {
        res.json({ error: err });
    });
}
async function searchRegistOfPersonaNombres(req, res) {
    return await Persona.findAll({
        where: {
            nombres: {
                [Op.like]: '%' + req.body.nombres + '%'
            }
        }
    }).then(datos => {
        res.json({
            datos: datos
        });
    }).catch(function (err) {
        res.json({ error: err });
    });
}
async function registersOfTitulares(req, res) {
    return await Persona.findAndCountAll({
        fecha_cadu: { type: Sequelize.DATE },
        attributes: [],
        include: [{
            model: Institucion,
            where: {
                cod_categ: 1
            },
            //attributes: []
        }],
        where: {
            estado: {
                [Op.eq]: 'A',
            },
            tit_ben: 'T'
        }
    }).then(data => {
        res.json({ data, estate: 1 })
    }).catch(err => {
        res.json({
            err,
            estate: 0
        });
    });
}
async function registersOfBeneficiarios(req, res) {
    return await Persona.findAndCountAll({
        fecha_cadu: { type: Sequelize.DATE },
        attributes: [],
        include: [{
            model: Institucion,
            where: {
                cod_categ: 1
            },
            attributes: []
        }],
        where: {
            estado: {
                [Op.eq]: 'A',
            },
            tit_ben: 'B'
        }
    }).then(data => {
        res.json({ data, estate: 1 })
    }).catch(err => {
        res.json({
            err,
            estate: 0
        });
    });
}
async function registersasegurads(req, res) {
    return await Persona.findAndCountAll({
        fecha_cadu: { type: Sequelize.DATE },
        attributes: [],
        include: [
            {
                model: Institucion,
                where: {
                    cod_categ: 1
                },
                attributes: []
            },
        ],
        where: {
            estado: {
                [Op.eq]: 'A',
            }
        }
    }).then(data => {
        res.json({ data, estate: 1 })
    }).catch(err => {
        res.json({
            err,
            estate: 0
        });
    });
}
export default {
    findviewOne,
    findviewAllCI,
    loginPersona,
    searchRegistOfPersonaTitsCI,
    searchRegistOfPersonaNombres,
    vigenciasPersona,
    registersOfTitulares,
    registersOfBeneficiarios,
    registersasegurads,
    insertPersonaTitutars,
    insertPersonaTitutalrProfile
};