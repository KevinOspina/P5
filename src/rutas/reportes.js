const express = require('express');
const router = express.Router();
const ReportesDAO = require('../modulos/daos/ReportesDAO');
const ActividadesDAO = require('../modulos/daos/ActividadesDAO');
var daoReportes = new ReportesDAO();
var daoActividades = new ActividadesDAO();




router.get('/', function (req, res) {
    daoReportes.getReportes((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/getReportesByCuadrilla', function (req, res) {
    var Id_areas = req.body.Id_areas;
    var Id_cuadrillas = req.body.Id_cuadrillas
    daoReportes.getReportesByCuadrilla(Id_areas, Id_cuadrillas, (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var tipo = req.body.Tipo;
    var descripcion = req.body.Descripcion;
    var evento = req.body.Id_eventos;
    var solicitud = req.body.Id_solicitudes;
    var area = req.body.Id_areas;



    daoReportes.insert({'Tipo': tipo, 'Descripcion': descripcion, 'Id_eventos': evento, 'Id_areas':area}, (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })

    daoActividades.update({'Estado': 'Finalizado',}, 'Id_eventos=?', [evento], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/update', function (req, res) {
    var Id_reportes = req.body.Id_reportes;
    var Tipo = req.body.Tipo;
    var Descripcion = req.body.Descripcion;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoReportes.update({ 'Tipo': Tipo, 'Descripcion': Descripcion }, 'Id_reportes=?', [Id_reportes], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete('/delete', function (req, res) {
    var Id_reportes = req.body.Id_reportes;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoReportes.delete('Id_reportes=?', [Id_reportes], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;