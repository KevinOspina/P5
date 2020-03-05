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

//Consulta del DAO Lista, falta organizar el metodo.
router.get('/get', function (req, res) {
    var area = req.body.Id_areas;
    var cuadrilla = req.body.Id_cuadrillas
    daoReportes.getReportesByCuadrilla('Id_areas=?', [area], (err, row, fields) => {
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



    daoReportes.insert({'Tipo': tipo, 'Descripcion': descripcion, 'Id_eventos': evento, 'Id_solicitudes':solicitud, 'Id_areas':area}, (err, result, fields) => {
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
    var Id_empleado = req.body.Id_empleado;
    var Nombre = req.body.Nombre;
    var Doc_identidad = req.body.Doc_identidad;
    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoReportes.update({ 'Nombre': Nombre, 'Doc_identidad': Doc_identidad }, 'Id_empleado=?', [Id_empleado], (err, result, fields) => {
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
    daoReportes.delete('Doc_identidad=?', [Doc_identidad], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


module.exports = router;