const express = require('express');
const router = express.Router();
const EventosDAO = require('../modulos/BurnedData/EventosBurnedDAO');
var daoEventos = new EventosDAO();


router.get('/', function (req, res) {
    var data = daoEventos.getEventos();
    res.json(data);
});
    
router.post('/aa', function (req, res) {
    var cuadrillas = []
    var eventoJSON = {"eventoID":"", "cuadrillas":""}

    var eventoID = req.body.eventoID;    
    var cuadrillasAux = req.body.cuadrillas.split(",");

    for (var i = 0; i < cuadrillasAux.length; i++) {
        var cuadrillaJSON = {"cuadrillaID":""}

        cuadrillaJSON['cuadrillaID'] = cuadrillasAux[i]
        cuadrillas.push(cuadrillaJSON);
    }
    eventoJSON['eventoID'] = eventoID;
    eventoJSON['cuadrillas'] = cuadrillas;

    daoEventos.postEventos(eventoJSON);
    res.json(daoEventos.getEventos());
});

router.put('/update', function (req, res) {
    var Id_eventos = req.body.Id_eventos;
    var Tipo = req.body.Tipo;
    var Estado = req.body.Estado;
    var Descripcion = req.body.Descripcion;
    var Id_ubicaciones = req.body.Id_ubicaciones;
    var Id_solicitudes = req.body.Id_solicitudes;
    var Id_estandares = req.body.Id_estandares;
    
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoEventos.update({ 'Tipo': Tipo, 'Estado': Estado, 'Descripcion': Descripcion , 'Id_ubicaciones': Id_ubicaciones, 'Id_estandares': Id_estandares, 'Id_solicitudes': Id_solicitudes}, 'Id_eventos=?', [Id_eventos], (err, result, fields) => {
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