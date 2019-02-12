const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    puesto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
}, { collection: 'puestos', timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = () => {
    return this.toString();
};

module.exports = mongoose.model('puestos', PositionSchema);
