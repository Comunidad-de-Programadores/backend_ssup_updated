import Profesion from '../models/Profesion';
async function findAll(req, res) {
    return await Profesion.findAll({
        /*order: [ // Will escape title and validate DESC against a list of valid direction parameters
            ['cod_prof', 'ASC'],
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
    findAll
}