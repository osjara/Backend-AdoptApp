/*
    Rutas de Creacion dentro de perfil /inside
    host + api/inside
*/

const { Router } = require("express");
const { crearCentro, crearPerfil, crearMascota, crearPublicacion, 
    crearComentario, meGusta, crearSeguidor, crearAdopcion, obtenerPerfil, 
    obtenerCentro, obtenerMascotas, eliminarPerfil, eliminarCentro, eliminarMascotas, eliminarCuenta } = require("../controllers/inside");




const router = Router();

router.post('/crearCentro', crearCentro);

router.get('/obtenercentro/:id', obtenerCentro)

router.delete('/eliminarCentro/:id', eliminarCentro);

router.post('/crearPerfil', crearPerfil);

router.get('/obtenerPerfil/:id', obtenerPerfil );

router.delete('/eliminarPerfil/:id', eliminarPerfil);

router.post('/crearMascota', crearMascota);

router.get('/obtenermascotas/:id', obtenerMascotas );

router.delete('/eliminarMascotas/:id', eliminarMascotas);

router.post('/crearPublicacion', crearPublicacion);

router.post('/crearComentario', crearComentario);

router.post('/meGusta', meGusta);

router.post('/seguir', crearSeguidor);

router.post('/adoptar', crearAdopcion);

router.delete('/eliminarCuenta/:id', eliminarCuenta);


module.exports = router;