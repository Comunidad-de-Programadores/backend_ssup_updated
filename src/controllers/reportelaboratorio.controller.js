import Sequelize from 'sequelize';
import ReporteLaboratorio from '../models/ReporteLaboratorio';
import ReporteLaboratorioinstituts from '../models/ReporteLaboratorioinstituts';
const op = Sequelize.Op;

async function fnCallReportesLaboratorios(req, res) {
  const query = 'paReportexLaboratorio :param1, :param2, :param3, :param4';
  return await ReporteLaboratorio.sequelize.query(query, {
    replacements: {
      param1: req.body.idcateg,
      param2: req.body.idtipo,
      param3: req.body.fini,
      param4: req.body.ffin
    },
    type: ReporteLaboratorio.sequelize.QueryTypes.SELECT
  })
    .then((dat) => { //console.log(dat);
      res.json(dat);
    })
    .catch((err) => {
      console.log('ERROR.....................................', err);
      res.json(err)
    });
}
async function fnCallReportesLaboratoriosInstitucions(req, res) {
  const query = 'paReportexLaboratorioxInst :param1, :param2, :param3, :param4';
  return await ReporteLaboratorioinstituts.sequelize.query(query, {
    replacements: {
      param1: req.body.idcateg,
      param2: req.body.idtipo,
      param3: req.body.fini,
      param4: req.body.ffin
    },
    type: ReporteLaboratorioinstituts.sequelize.QueryTypes.SELECT
  })
    .then((dat) => { //console.log(dat);
      res.json(dat);
    })
    .catch((err) => {
      console.log('ERROR.....................................', err);
      res.json(err)
    });
}

export default {
  fnCallReportesLaboratorios,
  fnCallReportesLaboratoriosInstitucions
}