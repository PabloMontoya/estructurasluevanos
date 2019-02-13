const mongoose = require('mongoose');
const Positions = require('../schemas/puesto');


function findAllPositions(req, res) {
    Positions.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
}

function findPositionById(req, res) {
    let id = req.params.id;
    Positions.findById(id).then((result) => {
        return res.send(result);
    }).catch((err) => {throw err});
}

function addPosition(req, res) {
    Positions.create(req.body).then((position) => {
        return res.send(position);
    }).catch((err) => {throw err});
}

function updatePosition(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Positions.findByIdAndUpdate(id,{$set:updates},{new:true}).then((position) => {
        return res.send(position);
    }).catch((err) => {throw err});
}

function deletePositions(req, res) {
    let id = req.params.id;
    Positions.deleteOne(id).then(() => {
        return res.send("Puesto Eliminado");
    }).catch((err) => {throw err});
}

module.exports = {
    findAllPositions,
    findPositionById,
    addPosition,
    updatePosition,
    deletePositions
}
