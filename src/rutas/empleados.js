const express = require('express');
const router = express.Router();
const EmpleadosDAO = require('../modulos/daos/EmpleadosDAO');
var daoEmpleados = new EmpleadosDAO();

router.get('/', function (req, res) {
    daoEmpleados.getEmpleados((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/get', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;
    daoEmpleados.get('Doc_identidad=?', [Doc_identidad], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var Nombre = req.body.Nombre;
    var Id_cuadrillas = req.body.Id_cuadrillas;
    var Doc_identidad = req.body.Doc_identidad;
    var Id_cuadrillas = req.body.Id_cuadrillas;

    daoEmpleados.insert({'Nombre': Nombre, 'Doc_identidad': Doc_identidad , 'Id_cuadrillas': Id_cuadrillas }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/update', function (req, res) {
    var Id_empleados = req.body.Id_empleados;
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoEmpleados.update({ 'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, 'Id_empleados=?', [Id_empleados], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/delete', function (req, res) {
    var Doc_identidad = req.body.Doc_identidad;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoEmpleados.delete('Doc_identidad=?', [Doc_identidad], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;