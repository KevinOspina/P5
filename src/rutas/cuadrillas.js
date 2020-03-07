const express = require('express');
const router = express.Router();
const CuadrillasDAO = require('../modulos/daos/CuadrillasDAO');
var daoCuadrillas = new CuadrillasDAO();

router.get('/', function (req, res) {
    daoCuadrillas.getCuadrillas((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/id', function (req, res) {
    var Id_cuadrillas = req.body.Id_cuadrillas;
    daoCuadrillas.get('Id_cuadrillas=?', [Id_cuadrillas], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Tipo = req.body.Tipo;

    daoCuadrillas.insert({'Tipo': Tipo}, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_cuadrillas = req.body.Id_cuadrillas;
    var Tipo = req.body.Tipo;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoCuadrillas.update({ 'Tipo': Tipo }, 'Id_cuadrillas=?', [Id_cuadrillas], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.post('/evento', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoCuadrillas.getCuadrillasByEventos(Id_eventos, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/', function (req, res) {
    var Id_cuadrillas = req.body.Id_cuadrillas;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoCuadrillas.delete('Id_cuadrillas=?', [Id_cuadrillas], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;