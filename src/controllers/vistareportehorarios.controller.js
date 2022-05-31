import Vistareportehorarios from '../models/Vistareportehorarios';
import Sequelize from 'sequelize';
const op = Sequelize.Op;
async function fnVistareportehorarios(req, res) {
  return await Vistareportehorarios.findAll().then(data => {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
}
async function fnCallSPVistareportehorarios(req, res) {
  const query = 'paVistaReporteHorarios';
  return await Vistareportehorarios.sequelize.query(query, { 
    type : Vistareportehorarios.sequelize.QueryTypes.SELECT 
  })
  .then((response) => {
    res.json(response);
  })
  .catch((err) => {
    console.log(err);
  });
}

export default {
  fnVistareportehorarios: fnVistareportehorarios,
  fnCallSPVistareportehorarios: fnCallSPVistareportehorarios
}