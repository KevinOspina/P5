const express = require('express');
const router = express.Router();
const EventosDAO = require('../modulos/daos/EventosDAO');
var daoEventos = new EventosDAO();

router.get('/', function (req, res) {
    daoEventos.getEventos((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/get', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    daoEventos.get('Id_eventos=?', [Id_eventos], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var Tipo = req.body.Tipo;
    var Estado = req.body.Estado;
    var Descripcion = req.body.Descripcion;
    var Id_ubicaciones = req.body.Id_ubicaciones;
    var Id_estandares = req.body.Id_estandares;
    daoEventos.insert({'Tipo': Tipo, 'Estado': Estado, 'Descripcion': Descripcion ,  'Id_ubicaciones': Id_ubicaciones ,  'Id_estandares': Id_estandares  }, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/update', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    var Tipo = req.body.Tipo;
    var Estado = req.body.Estado;
    var Descripcion = req.body.Descripcion;
    var Id_ubicaciones = req.body.Id_ubicaciones;
    var Id_estandares = req.body.Id_estandares;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoEventos.update({ 'Tipo': Tipo, 'Estado': Estado, 'Descripcion': Descripcion , 'Id_ubicaciones': Id_ubicaciones,  'Id_estandares': Id_estandares   }, 'Id_eventos=?', [Id_eventos], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/delete', function (req, res) {
    var Id_eventos = req.body.Id_eventos;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoEventos.delete('Id_eventos=?', [Id_eventos], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;