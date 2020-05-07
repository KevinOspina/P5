const express = require('express');
const router = express.Router();
const ActividadesDAO = require('../modulos/BurnedData/ActividadesBurnedDAO');
var daoActividades = new ActividadesDAO();

router.get('/', function (req, res) {
    var data = daoActividades.getActividades();
    res.json(data);
});


router.post('/', function (req, res) {
    var responsables = [];
    var ubicaciones = [];
    var actividadJSON = {
        "actividadID":"",
        "tipo":"",
        "descripcion":"",
        "estado":"",
        "responsables":"",
        "ubicaciones":"" 
    }
    
    var actividadID = req.body.actividadID;
    var tipo = req.body.tipo;
    var descripcion = req.body.descripcion;
    var estado = req.body.estado;

    var responsablesAux = req.body.responsables.split(',');
    var ubicacionesAux = req.body.ubicaciones.split(',');

    for(var i = 0 ; i < responsablesAux.length; i++){
        var responsableJSON = {
            "cuadrillaID":""
        }
        responsableJSON['cuadrillaID'] = responsablesAux[i];
        responsables.push(responsableJSON);
    }

    for(var i = 0 ; i < ubicacionesAux.length; i++){
        var ubicacionJSON = {
            "ubicacionID":""
        }
    
        ubicacionJSON['ubicacionID'] = ubicacionesAux[i];
        ubicaciones.push(ubicacionJSON);
    }

    actividadJSON['actividadID'] = actividadID;
    actividadJSON['tipo'] = tipo;
    actividadJSON['descripcion'] = descripcion;
    actividadJSON['estado'] = estado;
    actividadJSON['responsables'] = responsables;
    actividadJSON['ubicaciones'] = ubicaciones;

    res.json(daoActividades.postActividades(actividadJSON));
});


module.exports = router;