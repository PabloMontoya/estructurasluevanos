const mongoose = require('mongoose');
const Company = require('../schemas/empresa');


function findAllCompanies(req, res) {
    Company.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => { throw err });
}

function findCompanyById(req, res) {
    let id = req.params.id;
    Company.findById(id).then((result) => {
        return res.send(result);
    }).catch((err) => { throw err });
}

function addCompany(req, res) {
    Company.create(req.body).then((company) => {
        return res.send(company);
    }).catch((err) => { throw err });
}

function updateCompany(req, res) {
    let id = req.params.id;
    let updates = req.body;
    Company.findByIdAndUpdate(id, { $set: updates }, { new: true }).then((company) => {
        return res.send(company);
    }).catch((err) => { throw err });
}

function deleteCompany(req, res) {
    let id = req.params.id;
    Company.deleteOne({ _id: id }).then(() => {
        return res.send("Empresa Eliminada");
    }).catch((err) => { throw err });
}

module.exports = {
    findAllCompanies,
    findCompanyById,
    addCompany,
    updateCompany,
    deleteCompany
}
