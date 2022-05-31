import Dpto from '../models/Dpto';
import { Op } from 'sequelize';

const op = Op;
async function findAlldptos(req, res) {
    return await Dpto.findAll({
        order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['cod_pais', 'ASC'],
        ]
    })
        .then(data => {
            res.json(data);
        }).catch(function (err) {
            console.log("ERROR .......:", err);
            res.json(err);
        });
}
async function findAlldptosforContry(req, res) { //console.log(req.params);
    return await Dpto.findAll({
        where: {
            [Op.or]: [{
                cod_pais: {
                    [Op.eq]: req.params.idpais
                },
            }, {
                cod_pais: {
                    [Op.eq]: 0
                },
            }]
        },
        order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['des_dpto', 'ASC'],
        ]
    })
        .then(data => {
            res.json(data);
        }).catch(function (err) {
            console.log("ERROR .......:\n", err.message);
            res.json(err);
        });
}
export default {
    findAlldptos,
    findAlldptosforContry
}