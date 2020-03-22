const mongoose = require('mongoose');
const Note = require('../schemas/nota');
const Employee = require('../schemas/empleado');

function findAllNotes(req, res) {
    Note.find({}).populate('empresa')
                 .populate({path:'empleado', populate:[{path:'puesto'},{path:'empresa'}]})
                 .populate('proyecto')
                 .populate('tipoTrabajo')
                 .then((results) => {
        return res.send(results);
    }).catch((err) => { throw err });
}

function findNoteById(req, res) {
    let id = req.params.id;
    Note.findOne({_id:id}).populate('empresa')
                          .populate({path:'empleado', populate:[{path:'puesto'},{path:'empresa'}]})
                          .populate('proyecto')
                          .populate('tipoTrabajo')
                          .then((result) => {
        return res.send(result);
    }).catch((err) => { throw err });
}

function addNote(req, res) {
    Note.create(req.body).then((note) => {
        return res.send(note);
    }).catch((err) => { throw err });
}

function updateNote(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Note.findByIdAndUpdate(id, { $set: updates }, { new: true }).then((note) => {
        return res.send(note);
    }).catch((err) => { throw err });
}

async function returnFreeEmployeesByDate(req, res) {
    const { fechaInicio, fechaTermino } = req.body;

    const employees = await Employee.find({})
        .catch((err) => {throw err});
    
    const busyEmployeesIds = await Note.find({$and:[
        {'fecha.fechaInicio':{$lte:fechaTermino}},
        {'fecha.fechaTermino':{$gte:fechaInicio}}
    ]}).then((resp) => {
        return resp.map(({empleado}) => empleado._id.toString());
    }).catch((err) => {throw err});

    return res.send(employees.filter((i) => busyEmployeesIds.indexOf(i._id.toString()) < 0));
}

function deleteNote(req, res) {
    let id = req.params.id;
    Note.deleteOne({ _id: id }).then(() => {
        return res.send("Nota Eliminada");
    }).catch((err) => { throw err });
}

function deleteAllNotes(req, res) {
    Note.deleteMany({}).then(() => {
        return res.send("Notas Eliminadas");
    }).catch((err) => { throw err });
}

module.exports = {
    findAllNotes,
    findNoteById,
    addNote,
    updateNote,
    returnFreeEmployeesByDate,
    deleteNote,
    deleteAllNotes
}
