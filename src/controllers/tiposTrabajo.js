const mongoose = require('mongoose');
const WorkType = require('../schemas/tipoTrabajo');


function findAllWorkTypes(req, res) {
    WorkType.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
}

function findWorkTypeById(req, res) {
    let id = req.params.id;
    WorkType.findById(id).then((result) => {
        return res.send(result);
    }).catch((err) => {throw err});
}

function addWorkType(req, res) {
    WorkType.create(req.body).then((workType) => {
        return res.send(workType);
    }).catch((err) => {throw err});
}

function updateWorkType(req, res) {
    let id = req.params.id;
    let updates = req.body;
    WorkType.findByIdAndUpdate(id,{$set:updates},{new:true}).then((workType) => {
        return res.send(workType);
    }).catch((err) => {throw err});
}

function deleteWorkType(req, res) {
    let id = req.params.id;
    WorkType.deleteOne({_id:id}).then(() => {
        return res.send("Tipo de Trabajo Eliminado");
    }).catch((err) => {throw err});
}

function deleteAllWorkType(req, res) {
    WorkType.deleteMany({}).then(() => {
        return res.send("Tipos de Trabajos Eliminados");
    }).catch((err) => { throw err });
}

module.exports = {
    findAllWorkTypes,
    findWorkTypeById,
    addWorkType,
    updateWorkType,
    deleteWorkType,
    deleteAllWorkType
}
