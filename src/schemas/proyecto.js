const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyectSchema = new Schema({
    idu_cliente: {
        type: Number,
        required: true
    },
    num_contrato: {
        type: Number,
        required: true
    },
    num_trabajo: {
        type: Number,
        required: true
    },
    fec_requerida: {
        type: Date,
        required: true
    },
    fec_inicio: {
        type: Date,
        required: true
    },
    des_ubicacion: {
        type: String,
        required: true
    },
    des_descripcion: {
        type: String,
        required: true
    },
    des_materiales: [
        {
            herramienta:{
                type: String,
                required: true
            },
            cantidad:{
                type: Number,
                required: true
            }
        }
    ],
    des_personal: {
        encargado: {
            type: String,
            required: true
        },
        ayudantes: [
            {
                type: String,
                required: true
            }
        ]
    },
    des_tiempoestimado: {
        type: String,
        required: true
    }
}, { collection: 'proyectos', timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('proyectos', ProyectSchema);
