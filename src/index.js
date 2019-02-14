const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useFindAndModify', false);

// const mongoUri = 'mongodb+srv://admin:admin123@cluster0-ul4mm.mongodb.net/estructurasluevanos?retryWrites=true';
const mongoUri = 'mongodb://localhost:27017/estructurasluevanos';

mongoose.connect(mongoUri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function() {throw new Error('unable to connect to database at ' + mongoUri)});
db.once('open', function() {console.log('we are connected!')});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

require('./routes')(app);

// port
app.listen(3001);
console.log('Listening on port 3001...');
