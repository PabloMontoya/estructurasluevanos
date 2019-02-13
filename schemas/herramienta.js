const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    mantenimiento: {
        descripcion_mantenimiento:{
            type: String
        },
        fecha_mantenimiento:{
            type:Date
        }
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref:'empresas',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref:'empleados'
    }
}, { collection: 'herramientas', timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('herramientas', ToolSchema);
