const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehiculoSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    }
},{ timestamps: {createdAt: 'fecha_registro'} });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('vehiculo', VehiculoSchema, 'vehiculos');
