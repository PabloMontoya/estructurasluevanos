const mongoose = require('mongoose');
const Tool = require('../schemas/herramienta');


function findAllTools(req, res) {
    Tool.find({}).populate('empresa').populate('usuario').then((results) => {
        return res.send(results);
    }).catch((err) => {throw err});
};

function findToolById(req, res) {
    let id = req.params.id;
    Tool.findById(id).populate('empresa').populate('usuario').then((result) => {
        return res.send(result);
    }).catch((err) => {throw err});
};

function addTool(req, res) {
    Tool.create(req.body).then((tool) => {
        return res.send(tool);
    }).catch((err) => {throw err});
}

function updateTool(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Tool.findByIdAndUpdate(id,{$set:updates},{new:true}).then((tool) => {
        return res.send(tool);
    }).catch((err) => {throw err});
}

function deleteTool(req, res){
    let id = req.params.id;
    Tool.deleteOne(id).then(() => {
        return res.send("Herramienta Eliminada");
    }).catch((err) => {throw err});
};

module.exports = {
    findAllTools,
    findToolById,
    addTool,
    updateTool,
    deleteTool
}
