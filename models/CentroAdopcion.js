const { Schema, model } = require("mongoose");



const CentroAdopcionSchema = Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fechaCreacion: {
        type: Date
    },
    nombre:{
        type: String
    },
    direccion:{
        type: String
    },
    imagenPerfil:{
        type: String,
    },
    imagenPortada:{
        type: String,
    },
    telefono:{
        type: String
    },
    ciudad: {
        type: Schema.Types.ObjectId,
        ref: 'Ciudad'
    }

})

module.exports = model('CentroAdopcion', CentroAdopcionSchema);