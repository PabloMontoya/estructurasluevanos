const mongoose = require('mongoose');
const Vehiculo = require('../models/vehiculo');

exports.findAll = function (req, res) {
    Vehiculo.find({}, (err, results) => {
        return res.send(results);
    });
};

exports.findById = function (req, res) {
    var id = req.params.id;
    Vehiculo.findById({'_id':id}, (err, result) => {
        return res.send(result);
    });
};

exports.add = function (req, res) {
    Vehiculo.create(req.body, (err, vehiculo) => {
        if (err) return console.log(err);
        return res.send(vehiculo);
    });
}

exports.update = function () {};
exports.delete = function () {};
