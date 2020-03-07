const express = require('express');
const router = express.Router();
const SolicitudesDAO = require('../modulos/daos/SolicitudesDAO');
var daoSolicitudes = new SolicitudesDAO();

router.get('/', function (req, res) {
    daoSolicitudes.getSolicitudes((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

//Se le pasa como parametro el nombre del area por el cual se quiere buscar
router.post('/solicitudes/area', function (req, res) {
    var areas = req.body.Area;
    daoSolicitudes.getSolicitudesByArea(areas, (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Descripcion = req.body.Descripcion;
    var Estado = req.body.Estado;

    daoSolicitudes.insert({ 'Descripcion': Descripcion, 'Estado': Estado }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_solicitudes = req.body.Id_solicitudes;
    var Descripcion = req.body.Descripcion;
    var Estado = req.body.Estado;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoSolicitudes.update({ 'Descripcion': Descripcion, 'Estado': Estado }, 'Id_solicitudes=?', [Id_solicitudes], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/', function (req, res) {
    var Id_solicitudes = req.body.Id_solicitudes;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoSolicitudes.delete('Id_solicitudes=?', [Id_solicitudes], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;