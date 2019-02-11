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
    combustible:[{
        cantidad_litros: {
            type: Number
        },
        cantidad_costo: {
            type: String
        },
        fecha_carga: {
            type: Date
        },
        odometro: {
            type: String
        }
    }],
    empresa: {
        type: Schema.Types.ObjectId,
        ref:'empresas',
        required: true
    }
}, { collection: 'vehiculos', timestamps: true });


mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('vehiculo', VehiculoSchema);
