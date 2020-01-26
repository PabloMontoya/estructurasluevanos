const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    numOrden: {
        type: String,
        required: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref:'empresas',
        required: true
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref:'proyectos',
        required: true
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref:'empleados',
        required: true
    },
    tipoTrabajo:{
        type: Schema.Types.ObjectId,
        ref:'tiposTrabajo',
        required: true
    },
    cantidad:{
        type:mongoose.Types.Decimal128,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    direccion:{
        calle:{
            type:String,
            required: true
        },
        colonia:{
            type:String,
            required: true
        },
        numero:{
            type:String,
            required: true
        },
        distrito:{
            type:String,
            required: true
        },
    },
    fecha: {
        fechaInicio: {
            type: Date,
            required: true,
            default: Date.now,
        },
        fechaTermino: {
            type: Date,
        },
    }
}, { collection: 'notas', timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('notas', NoteSchema);
