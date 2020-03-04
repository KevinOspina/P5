const express = require('express');
const router = express.Router();
const ActividadesDAO = require('../modulos/daos/ActividadesDAO');
var daoActividades = new ActividadesDAO();

router.get('/', function (req, res) {
    daoActividades.getActividades((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/get', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;
    daoActividades.get('Doc_identidad=?', [Doc_identidad], (err, row, fields) => {
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

    daoActividades.insert({'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, (err, result, fields) => {
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
    daoActividades.update({ 'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, 'Id_empleado=?', [Id_empleado], (err, result, fields) => {
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
    daoActividades.delete('Doc_identidad=?', [Doc_identidad], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;