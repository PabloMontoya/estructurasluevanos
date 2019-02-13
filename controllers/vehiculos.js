const mongoose = require('mongoose');
const Vehiculo = require('../schemas/vehiculo');


function findAllVehicles(req, res) {
    Vehiculo.find({}).populate('empresa').then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
}

function findVehicleById(req, res) {
    let id = req.params.id;
    Vehiculo.findById(id).populate('empresa').then((result) => {
        return res.send(result);
    }).catch((err) => {throw err});
}

function addVehicle(req, res) {
    Vehiculo.create(req.body).then((vehiculo) => {
        return res.send(vehiculo);
    }).catch((err) => {throw err});
}

function updateVehicle(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Vehiculo.findByIdAndUpdate(id,{$set:updates},{new:true}).then((vehiculo) => {
        return res.send(vehiculo);
    }).catch((err) => {throw err});
}

function addFuel(req, res) {
    let id = req.params.id;
    let updates = req.body;

    Vehiculo.findById(id).then((result) => {
        addFuel2(result);
    }).catch((err) => { throw err });

    async function addFuel2(obj) {
        if (obj.combustible.length == 10) {
            await removeOldest();
            addFuel3();
        } else {addFuel3()}
    }
    
    function removeOldest() {
        Vehiculo.findByIdAndUpdate(id, { $pop: { combustible: -1 } }).catch((err) => { throw err });
    }

    function addFuel3() {
        Vehiculo.findByIdAndUpdate(id, { $push: { combustible: updates } }, { new: true }).then((vehiculo) => {
            return res.send(vehiculo);
        }).catch((err) => { throw err });
    }
}

function deleteVehicle(req, res) {
    let id = req.params.id;
    Vehiculo.deleteOne({_id:id}).then(() => {
        return res.send("Vehiculo Eliminado");
    }).catch((err) => {throw err});
}

function reporteCombustible(req, res) {
    Vehiculo.find({}).then((vehiculos) => {
        vehiculos.forEach((vehiculo)=>{
            if (vehiculo.combustible.length > 1) {
                vehiculo.combustible.forEach((combustible) => {
                    let 
                });
            }
        });
    }).catch((err) => {throw err});
}

module.exports = {
    findAllVehicles,
    findVehicleById,
    addVehicle,
    updateVehicle,
    addFuel,
    deleteVehicle,
    reporteCombustible
}
