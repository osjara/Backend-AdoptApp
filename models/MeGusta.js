const { Schema, model } = require("mongoose");



const MeGustaSchema = Schema({
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion',
        require: true
    }
})

module.exports = model('MeGusta', MeGustaSchema);