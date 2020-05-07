const express = require('express');
const router = express.Router();
const UbicacionesDAO = require('../modulos/daos/UbicacionesDAO');
var daoUbicaciones = new UbicacionesDAO();
const EventosDAO = require('../modulos/daos/EventosDAO');
var daoEventos = new EventosDAO();

router.get('/', function (req, res) {
    daoUbicaciones.getUbicaciones((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/ubicaciones/eventos/id', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    daoUbicaciones.getUbicacionesByEvento(Id_eventos, (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Referencia = req.body.Referencia;
    var Latitud = req.body.Latitud;
    var Longitud = req.body.Longitud;

    daoUbicaciones.insert({'Referencia': Referencia, 'Latitud': Latitud , 'Longitud': Longitud}, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_ubicaciones = req.body.Id_ubicaciones;
    var Referencia = req.body.Referencia;
    var Latitud = req.body.Latitud;
    var Longitud = req.body.Longitud;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoUbicaciones.update({ 'Referencia': Referencia, 'Latitud': Latitud, 'Longitud': Longitud }, 'Id_ubicaciones=?', [Id_ubicaciones], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/ubicaciones/eventos', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    var Id_ubicaciones = req.body.Id_ubicaciones;
    console.log(Id_eventos, Id_ubicaciones);
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoEventos.update({ 'Id_ubicaciones': Id_ubicaciones}, 'Id_eventos=?', [Id_eventos], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.delete('/', function (req, res) {
    var Id_ubicaciones = req.body.Id_ubicaciones;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoUbicaciones.delete('Id_ubicaciones=?', [Id_ubicaciones], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;