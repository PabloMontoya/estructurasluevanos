const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useFindAndModify', false);

const mongoUri = 'mongodb+srv://admin:admin123@cluster0-ul4mm.mongodb.net/estructurasluevanos?retryWrites=true';
mongoose.connect(mongoUri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function() {throw new Error('unable to connect to database at ' + mongoUri)});
db.once('open', function() {console.log('we are connected!')});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes')(app);

// port
app.listen(3001);
console.log('Listening on port 3001...');
