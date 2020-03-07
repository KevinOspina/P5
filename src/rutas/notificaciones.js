const express = require('express');
const router = express.Router();
const NotificacionesDAO = require('../modulos/daos/NotificacionesDAO');
var daoNotificaciones = new NotificacionesDAO();

router.get('/', function (req, res) {
    daoNotificaciones.getNotificaciones((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/id', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;
    daoNotificaciones.get('Doc_identidad=?', [Doc_identidad], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;

    daoNotificaciones.insert({'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_empleado = req.body.Id_empleado;
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoNotificaciones.update({ 'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, 'Id_empleado=?', [Id_empleado], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoNotificaciones.delete('Doc_identidad=?', [Doc_identidad], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;