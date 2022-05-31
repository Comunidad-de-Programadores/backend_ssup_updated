import Pais from '../models/Pais';
async function findAllpaises(req, res) {
    return await Pais.findAll({
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
export default {
    findAllpaises
}