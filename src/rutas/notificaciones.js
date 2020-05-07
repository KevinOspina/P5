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
    var Id_notificaciones = req.body.Id_notificaciones;
    daoNotificaciones.get('Id_notificaciones=?', [Id_notificaciones], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Tipo = req.body.Tipo;

    daoNotificaciones.insert({'Tipo': Tipo}, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_notificaciones = req.body.Id_notificaciones;
    var Tipo = req.body.Tipo;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoNotificaciones.update({ 'Tipo': Tipo,}, 'Id_notificaciones=?', [Id_notificaciones], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/', function (req, res) {
    var Id_notificaciones = req.body.Id_notificaciones;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoNotificaciones.delete('Id_notificaciones=?', [Id_notificaciones], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;