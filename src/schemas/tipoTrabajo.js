const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoTrabajoSchema = new Schema({
    tipo:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    unidad:{
        type:String,
        required:true
    },
    precio:{
        type:mongoose.Types.Decimal128,
        required:true
    },
}, { collection: 'tiposTrabajo', timestamps: true });

module.exports = mongoose.model('tiposTrabajo', TipoTrabajoSchema);
