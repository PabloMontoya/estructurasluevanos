module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send(`API Estructuras Luevano's`);
    });
    
    const empresas = require('./controllers/empresas');
    app.get('/empresas', empresas.findAllCompanies);
    app.get('/empresas/:id', empresas.findCompanyById);
    app.post('/empresas/agregar', empresas.addCompany);
    app.put('/empresas/actualizar/:id', empresas.updateCompany);
    app.delete('/empresas/eliminar/:id', empresas.deleteCompany);
    
    const proyectos = require('./controllers/proyectos');
    app.get('/proyectos', proyectos.findAllProyects);
    app.get('/proyectos/:id', proyectos.findProyectById);
    app.post('/proyectos/agregar', proyectos.addProyect);
    app.put('/proyectos/actualizar/:id', proyectos.updateProyect);
    app.delete('/proyectos/eliminar/:id', proyectos.deleteProyect);

    const puestos = require('./controllers/puestos');
    app.get('/puestos', puestos.findAllPositions);
    app.get('/puestos/:id', puestos.findPositionById);
    app.post('/puestos/agregar', puestos.addPosition);
    app.put('/puestos/actualizar/:id', puestos.updatePosition);
    app.delete('/puestos/eliminar/:id', puestos.deletePositions);
    
    const empleados = require('./controllers/empleados');
    app.get('/empleados', empleados.findAllEmployees);
    app.get('/empleados/:id', empleados.findEmployeeById);
    app.post('/empleados/agregar', empleados.addEmployee);
    app.put('/empleados/actualizar/:id', empleados.updateEmployee);
    app.delete('/empleados/eliminar/:id', empleados.deleteEmployee);

    const vehiculos = require('./controllers/vehiculos');
    app.get('/vehiculos', vehiculos.findAllVehicles);
    app.get('/vehiculos/:id', vehiculos.findVehicleById);
    app.post('/vehiculos/agregar', vehiculos.addVehicle);
    app.post('/vehiculos/reportecombustible', vehiculos.reporteCombustible);
    app.put('/vehiculos/actualizar/:id', vehiculos.updateVehicle);
    app.put('/vehiculos/agregarcombustible/:id', vehiculos.addFuel);
    app.delete('/vehiculos/eliminar/:id', vehiculos.deleteVehicle);

    const herramientas = require('./controllers/herramientas');
    app.get('/herramientas', herramientas.findAllTools);
    app.get('/herramientas/:id', herramientas.findToolById);
    app.post('/herramientas/agregar', herramientas.addTool);
    app.put('/herramientas/actualizar/:id', herramientas.updateTool);
    app.delete('/herramientas/eliminar/:id', herramientas.deleteTool);
}
