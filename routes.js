module.exports = function(app) {
    
    app.get('/', function (req, res) {
        res.send(`API Estructuras Luevano's`);
    });
    
    const vehiculos = require('./controllers/vehiculos');
    app.get('/vehiculos', vehiculos.findAll);
    app.get('/vehiculos/:id', vehiculos.findById);
    app.post('/vehiculos/agregar', vehiculos.add);
    app.put('/vehiculos/actualizar/:id', vehiculos.update);
    app.delete('/vehiculos/eliminar/:id', vehiculos.delete);
}