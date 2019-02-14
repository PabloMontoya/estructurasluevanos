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
    let reporte = [];
    let grid = null;
    let combustible = null;
    let auto = null
    let info = null
    let infototal = null
    let km = null
    let dif = null
    
    Vehiculo.find({}).then((vehiculos) => {
        vehiculos.forEach((vehiculo)=>{
            if (vehiculo.combustible.length > 0) {
                
                combustible = vehiculo.combustible;
                auto = {marca:'', modelo:'', año:'', descripcion:'', grid:'', total:''};
                grid = [];
                info = {litros:'', costo:'', odometro:'', fecha:'', km_recorridos:0};
                infototal = {litros:0, costo:0, km:0, dias:0};
                km = 0;
                dif = 0;

                auto.marca = vehiculo.marca;
                auto.modelo = vehiculo.modelo;
                auto.año = vehiculo.año;
                auto.descripcion = vehiculo.descripcion;

                for (i = 1; i < combustible.length; i++) {
                    km, dif = 0;
                    
                    info.litros = combustible[i-1].cantidad_litros;
                    info.costo = combustible[i-1].cantidad_costo;
                    info.odometro = combustible[i-1].odometro;
                    info.fecha = combustible[i-1].fecha_carga;

                    dif = combustible[i].odometro - combustible[i-1].odometro;
                    info.km_recorridos = dif;
                    console.log(dif);

                    grid.push(info);

                    infototal.litros += combustible[i].cantidad_litros;
                    infototal.costo += combustible[i].cantidad_costo;
                    infototal.km += dif;
                }

                auto.grid = grid;
                auto.total = infototal;

                reporte.push(auto);
            }
        });
        return res.send(reporte);
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
