import Sequelize, { Op, query, QueryTypes} from 'sequelize';
import Reportemedicos from '../models/ReporteMedicos';
const op = Sequelize.Op;
async function fnVistareportemedicos(req, res) {
  return await Reportemedicos.findAll()
    .then(data => {
      console.log(data);
      res.json(data);
    }).catch((err) => {
      console.log("res:::::: ", err);
      res.json(err);
    });
}
async function fnCallReportesAtencionsMedics(req, res) {
  const query = 'paReportexMedicoFinalTodos :param1, :param2, :param3, :param4';
  return await Reportemedicos.sequelize.query(query, {
    replacements: {
      param1: (req.body.codmed == '') ? null : req.body.codmed,
      param2: req.body.fini,
      param3: req.body.ffin,
      param4: (req.body.codinst == '') ? null : req.body.codinst
    },
    type: Reportemedicos.sequelize.QueryTypes.SELECT
  })
    .then((dat) => { //console.log(dat);
      res.json(dat);
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.json(err)
    });
}
export default {
  fnVistareportemedicos,
  fnCallReportesAtencionsMedics
}