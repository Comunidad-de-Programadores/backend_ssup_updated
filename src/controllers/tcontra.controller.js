import Tcontra from '../models/Tcontra';
import { Op } from 'sequelize';

const op = Op;
async function findAll(req, res) {
    return await Tcontra.findAll({
        /*order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['cod_tcon', 'ASC'],
        ]*/
    })
        .then(data => {
            res.json(data);
        }).catch(function (err) {
            console.log("ERROR .......:", err);
            res.json(err);
        });
}
export default {
    findAll,
}