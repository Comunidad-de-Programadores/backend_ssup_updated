import Medesp from '../models/Medesp';
import Usuario from '../models/Usuario';
import config from '../config';
import jwt from 'jsonwebtoken';

async function allUsuarios(req, res) {
    return await Usuario.findAll({
        include: [
            {
                model: Medesp
            }
        ]
    })
        .then((dat) => {
            console.log('data : ', dat);
            res.json(dat);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

async function loginUsuario(req, res) {
    let token = "";
    //console.log(req.body);
    return await Usuario.findOne({
        where: {
            cod_med: req.body.codmed,
            contraseña: req.body.password
        }
    })
        .then(data => {
            //console.log(data.dataValues);
            if (data) {
                token = jwt.sign({
                    Usuario: data,
                    iat: Math.floor(Date.now() / 1000) - 300,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                },
                    config.llave
                );
                let results = data.dataValues;
                res.io.emit('userconnected', {
                    results
                });
                console.log("DATOS");
                res.json({ "data": data.dataValues, "state": 1, "token": token });
            } else {
                res.json({ "data": "error", "state": 0, "token": "" });
            }
        })
        .catch(function (err) {
            console.log(err);
            res.json({ "error": err, "state": -1, "token": null });
        });
}

export default {
    allUsuarios,
    loginUsuario
}