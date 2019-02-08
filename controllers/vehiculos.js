const mongoose = require('mongoose');
const Vehiculo = require('../models/vehiculo');

function findAllVehicles(req, res) {
    Vehiculo.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
};

function findVehicleById(req, res) {
    let id = req.params.id;
    Vehiculo.findById({_id:id}).then((result => {
        return res.send(result);
    })).catch((err) => {throw err});
};

function addVehicle(req, res) {
    Vehiculo.create(req.body).then((vehiculo) => {
        return res.send(vehiculo);
    }).catch((err) => {throw err});
}

function updateVehicle(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Vehiculo.findOneAndUpdate(id,{$set:updates},{new:true}).then((vehiculo) => {
        return res.send(vehiculo);
    }).catch((err) => {throw err});
}

function deleteVehicle(req, res){
    let id = req.params.id;
    Vehiculo.deleteOne({_id:id}).then(() => {
        return res.send("Vehiculo Eliminado");
    }).catch((err) => {throw err});
};

module.exports = {
    findAllVehicles,
    findVehicleById,
    addVehicle,
    updateVehicle,
    deleteVehicle
}
