const { Schema, model } = require("mongoose");



const PerfilSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    direccion:{
        type: String
    },
    fechaNacimiento: {
        type: Date
        
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

module.exports = model('Perfil', PerfilSchema);