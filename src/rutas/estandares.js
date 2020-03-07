const express = require('express');
const router = express.Router();
const EstandaresDAO = require('../modulos/daos/EstandaresDAO');
var daoEstandares = new EstandaresDAO();

router.get('/', function (req, res) {
    daoEstandares.getEstandares((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/id', function (req, res) {
    var Id_estandares = req.body.Id_estandares;
    daoEstandares.get('Id_estandares=?', [Id_estandares], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/', function (req, res) {
    var Descripcion = req.body.Descripcion;
    daoEstandares.insert({'Descripcion': Descripcion }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/', function (req, res) {
    var Id_estandares = req.body.Id_estandares;
    var Descripcion = req.body.Descripcion;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoEstandares.update({ 'Descripcion': Descripcion}, 'Id_estandares=?', [Id_estandares], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/', function (req, res) {
    var Id_estandares = req.body.Id_estandares;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoEstandares.delete('Id_estandares=?', [Id_estandares], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;