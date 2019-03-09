const mongoose = require('mongoose');
const Proyect = require('../schemas/proyecto');


function findAllProyects(req, res) {
    Proyect.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => { throw err });
}

function findProyectById(req, res) {
    let id = req.params.id;
    Proyect.findById(id).then((result) => {
        return res.send(result);
    }).catch((err) => { throw err });
}

function addProyect(req, res) {
    Proyect.create(req.body).then((proyect) => {
        return res.send(proyect);
    }).catch((err) => { throw err });
}

function updateProyect(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Proyect.findByIdAndUpdate(id, { $set: updates }, { new: true }).then((proyect) => {
        return res.send(proyect);
    }).catch((err) => { throw err });
}

function deleteProyect(req, res) {
    let id = req.params.id;
    Proyect.deleteOne({ _id: id }).then(() => {
        return res.send("Proyecto Eliminado");
    }).catch((err) => { throw err });
}

module.exports = {
    findAllProyects,
    findProyectById,
    addProyect,
    updateProyect,
    deleteProyect
}
