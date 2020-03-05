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
    var Id_actividades = req.body.Id_actividades;
    daoActividades.get('Id_actividades=?', [Id_actividades], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var Descripcion = req.body.Descripcion;
    var Id_cuadrillas = req.body.Id_cuadrillas;
    var Id_eventos = req.body.Id_eventos;

    daoActividades.insert({'Descripcion': Descripcion, 'Id_cuadrillas': Id_cuadrillas, 'Id_eventos': Id_eventos }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/update', function (req, res) {
    var Descripcion = req.body.Descripcion;
    var Id_cuadrillas = req.body.Id_cuadrillas;
    var Id_eventos = req.body.Id_eventos;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoActividades.update({ 'Descripcion': Descripcion, 'Id_cuadrillas': Id_cuadrillas, 'Id_eventos': Id_eventos }, 'Id_actividades=?', [Id_actividades], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/delete', function (req, res) {
    var Id_actividades = req.body.Id_actividades;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoActividades.delete('Id_actividades=?', [Id_actividades], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;