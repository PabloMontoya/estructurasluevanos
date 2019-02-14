const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String
    },
    telefono: {
        type: Number
    },
    celular: {
        type: Number
    },
    correo: {
        type: String
    },
    direccion: {
        calle:{
            type: String,
            required: true
        },
        numero:{
            type: Number
        },
        colonia:{
            type: String,
            required: true
        },
        codigo_postal:{
            type: Number
        },
        referencia:{
            type: String
        }
        
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref:'empresas',
        required: true
    },
    puesto: {
        type: Schema.Types.ObjectId,
        ref:'puestos',
        required: true
    }
}, { collection: 'empleados', timestamps: true });


mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('empleados', EmployeeSchema);
