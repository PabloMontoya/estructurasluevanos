const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    contrato: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref:'empresas',
        required: true
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref:'empleados'
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref:'proyectos'
    }
}, { collection: 'notas', timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('notas', NoteSchema);
