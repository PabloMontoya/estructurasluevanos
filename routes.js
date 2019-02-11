module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send(`API Estructuras Luevano's`);
    });
    
    const vehiculos = require('./controllers/vehiculos');
    app.get('/vehiculos', vehiculos.findAllVehicles);
    app.get('/vehiculos/:id', vehiculos.findVehicleById);
    app.post('/vehiculos/agregar', vehiculos.addVehicle);
    app.put('/vehiculos/actualizar/:id', vehiculos.updateVehicle);
    app.put('/vehiculos/agregarcombustible/:id', vehiculos.addFuel);
    app.delete('/vehiculos/eliminar/:id', vehiculos.deleteVehicle);
    
    const empresas = require('./controllers/empresas');
    app.get('/empresas', empresas.findAllCompanies);
    app.get('/empresas/:id', empresas.findCompanyById);
    app.post('/empresas/agregar', empresas.addCompany);
    app.put('/empresas/actualizar/:id', empresas.updateCompany);
    app.delete('/empresas/eliminar/:id', empresas.deleteCompany);
}
