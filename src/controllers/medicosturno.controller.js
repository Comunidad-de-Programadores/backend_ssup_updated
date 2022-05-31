import MedicosTurno from '../models/MedicosTurno';
import Sequelize from 'sequelize';
import Usuario from '../models/Usuario';
import Horarios from '../models/Horarios';
import Medesp from '../models/Medesp';

const Op = Sequelize.Op;
async function viewAreasToDay(req, res) {
  //SELECCION DE ESPECIADIADES POR AREA(obs) Y TIPO DE ASEGURADO
  if (req.params.idcateg == 1 || req.params.idcateg == 3) { //ASEGURADO O EMPRESAS
    return await MedicosTurno.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('obs')), 'obs'],
        'tipo',
        'area'],
      where: {
        [Op.and]: [{
          tipo: {
            [Op.or]: [1, 3]
          },
          estado: true
        }],
      },
      order: [['area', 'ASC']]
    }).then(data => { //RESPUESTA DE ASEGURADOS Y/O EMPRESAS console.log(data.length);
      let totalmedics = data.length;
      res.json({ data, totalmedics, estado: 1 });
    }).catch(err => { //ERROR: console.log(err);
      res.json({
        data: err,
        estado: 0
      })
    });
  } else { //ESTUDIANTES
    return await MedicosTurno.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('obs')), 'obs'],
        'tipo',
        'area'],
      where: {
        tipo: 2,
        estado: true
      },
      order: [['area', 'ASC']]
    }).then(data => { //console.log(data);
      res.json({
        data,
        estado: 1
      });
    }).catch(err => { //console.log(err);
      res.json({
        data: err,
        estado: 0
      })
    });
  }
}

function viewDetaillToDay(req, res) {
  let dia = new Date().getDay() + 1;
  if (req.params.idcateg == 1 || req.params.idcateg == 3) {
    console.log("Es 1 o 3..................................");
    return MedicosTurno.findAll({
      include: [
        { model: Usuario }, 
        { model: Medesp }, 
        {
        model: Horarios,
        where: {
          dia: dia,
          estado: 'A'
        }
      }],
      where: {
        [Op.and]: [{
          tipo: {
            [Op.or]: [1, 3],
          },
          area: req.params.idmedic
        }],
      },
      order: [['area', 'ASC']]
    }).then(data => {
      res.json({
        data,
        estado: 1
      });
    }).catch(err => {
      console.log(err);
      res.json({
        data: res,
        estado: 0
      })
    });
  } else {
    return MedicosTurno.findAll({
      include: [{
        model: Usuario
      }, {
        model: Horarios,
        where: {
          dia: dia,
          estado: 'A'
        }
      }],
      where: {
        tipo: 2,
        area: req.params.idmedic
      },
      order: [['area', 'ASC']]
    }).then(data => {
      //RESPUESTA DE console.log(data.length);
      res.json({
        data,
        estado: 1
      });
    }).catch(err => {
      console.log(err);
      res.json({
        data: res,
        estado: 0
      })
    });
  }
}
export default {
  viewAreasToDay,
  viewDetaillToDay
}