const mongoose = require('mongoose');
const Note = require('../schemas/nota');
const Employee = require('../schemas/empleado');

function findAllNotes(req, res) {
    Note.find({}).populate('empresa')
                 .populate({path:'empleado', populate:[{path:'puesto'},{path:'empresa'}]})
                 .populate('proyecto').then((results) => {
        return res.send(results);
    }).catch((err) => { throw err });
}

function findNoteById(req, res) {
    let id = req.params.id;
    Note.findOne({_id:id}).then((result) => {
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
    let { fecha } = req.body;

    const employees = await Employee.find({}).then((resp) => {
        return resp.map(({_id}) => _id.toString());
    }).catch((err) => {throw err});
    
    const busyEmployees = await Note.find({fecha:fecha}).then((resp) => {
        return resp.map(({empleado}) => empleado._id.toString());
    }).catch((err) => {throw err});

    return res.send(employees.filter((i) => busyEmployees.indexOf(i) < 0));
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