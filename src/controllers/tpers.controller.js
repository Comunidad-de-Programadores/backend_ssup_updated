import Tpers from '../models/Tpers';
import { Op } from 'sequelize';

const op = Op;
async function findAll(req, res) {
    return await Tpers.findAll({
        order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['des_tper', 'ASC'],
        ]
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