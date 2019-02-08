module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send(`API Estructuras Luevano's`);
    });
    
    const vehiculos = require('./controllers/vehiculos');
    app.get('/vehiculos', vehiculos.findAllVehicles);
    app.get('/vehiculos/:id', vehiculos.findVehicleById);
    app.post('/vehiculos/agregar', vehiculos.addVehicle);
    app.put('/vehiculos/actualizar/:id', vehiculos.updateVehicle);
    app.delete('/vehiculos/eliminar/:id', vehiculos.deleteVehicle);
}
