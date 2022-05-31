import Tafil from '../models/Tafil';
import { Op } from 'sequelize';

const op = Op;
async function findAllTafils(req, res) {
    return await Tafil.findAll({
        order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['des_tafi', 'ASC'],
        ]
    })
        .then(data => {
            let result = "-------------------------------";
            res.io.emit("userconnected", { result });
            res.json(data);
        }).catch(function (err) {
            console.log("ERROR .......:", err);
            res.json(err);
        });
}
export default {
    findAllTafils,
}