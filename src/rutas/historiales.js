const express = require('express');
const router = express.Router();
const HistorialesDAO = require('../modulos/daos/HistorialesDAO');
var daoHistoriales = new HistorialesDAO();

router.get('/', function (req, res) {
    daoHistoriales.getHistoriales((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/get', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;
    daoHistoriales.get('Doc_identidad=?', [Doc_identidad], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;

    daoHistoriales.insert({'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.post('/update', function (req, res) {
    var Id_empleado = req.body.Id_empleado;
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoHistoriales.update({ 'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, 'Id_empleado=?', [Id_empleado], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.post('/delete', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoHistoriales.delete('Doc_identidad=?', [Doc_identidad], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;