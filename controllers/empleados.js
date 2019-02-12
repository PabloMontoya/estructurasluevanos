const mongoose = require('mongoose');
const Employee = require('../schemas/empleado');


function findAllEmployees(req, res) {
    Employee.find({}).populate('empresa').populate('puesto').then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
};

function findEmployeeById(req, res) {
    let id = req.params.id;
    Employee.findById(id).populate('empresa').then((result) => {
        return res.send(result);
    }).catch((err) => {throw err});
};

function addEmployee(req, res) {
    Employee.create(req.body).then((employee) => {
        return res.send(employee);
    }).catch((err) => {throw err});
}

function updateEmployee(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Employee.findByIdAndUpdate(id,{$set:updates},{new:true}).then((employee) => {
        return res.send(employee);
    }).catch((err) => {throw err});
}

function deleteEmployee(req, res){
    let id = req.params.id;
    Employee.deleteOne(id).then(() => {
        return res.send("Empleado Eliminado");
    }).catch((err) => {throw err});
};

module.exports = {
    findAllEmployees,
    findEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
