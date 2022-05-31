import Documento from '../models/Documento';
async function findOne(req, res) {
  return await Documento.findOne({
    where: {
      id_doc: req.params.idparams
    }
  }).then(data => {
    console.log(data.dataValues);
    res.json(data);
  }).catch(function (err) {
    console.log("eeeeerror docs");
    console.log(err);
    res.json(err);
  });
}
async function findAllUsers(req, res) {
  return await Documento.findAll({
    where: {
      id_usu: req.params.idparamsusuario
    }
  }).then(data => {
    console.log(data.dataValues);
    res.json(data);
  }).catch(function (err) {
    console.log("eeeeerror docs");
    console.log(err);
    res.json(err);
  });
}
export default {
  findOne: findOne,
  porUsuarios: findAllUsers
}