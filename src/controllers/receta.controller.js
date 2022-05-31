import { Receta } from '../models/Receta';
import Sequelize from 'sequelize';

async function findAllofOneFicha (req, res) {
    return await Receta.findAll()
      .then(data => {
        res.json(data);
      })
      .catch((err) => {
          res.json(err);
      });
}
export default {
  findAllofOneFicha
}