import Institucion from '../models/Institucion';
import Sequelize from 'sequelize';
import moment from 'moment';

async function findOne(req, res) {
  return await Institucion.findOne({
    where: {
      cod_inst: req.params.idinstitucion
    }
  }).then(data => {
    res.json({ "data": data, "estado": 1 });
  }).catch(err => {
    console.log(err);
    res.json({ "data": err, "estado": 0 });
  });
}
async function findAll(req, res) {
  return await Institucion.findAll({
    estado: 'A'
  })
    .then(data => {
      res.json({
        data,
        state: 1
      })
    })
    .catch(err => {
      console.log(err);
      res.json({
        err,
        state: 0
      });
    })
};
async function viewdate(req, res) {
  console.log(m.locale('es'));
  res.json(m.locale('es'));
  res.json(m);
  return await Institucion.findOne({
    where: {
      fecha_afi: m.format() + "T00:00:00.000Z"
    }
  }).then(data => {
    console.log(data.dataValues);
    res.json({ "data": data, "estado": 1 });
  }).catch(err => {
    console.log("eeeeerror");
    console.log(err);
    res.json({ "data": err, "estado": 0 });
  });
}
export default {
  findOne,
  findAll,
  viewsearchdate: viewdate
}