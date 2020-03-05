const DaoHandlerJS = require('../bd/daohandlerjs');

class ReportesDAO extends DaoHandlerJS {
    constructor() {
        super("reportes");
    }

    getReportes(callback) {
        this.exec_query('select * from reportes', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    getReportesByCuadrilla(cuadrilla, area, callback){
        this.exec_query("select r.Id_reporte as id, r.Tipo, r.Descripcion, ar.nombre  from reportes r, actividades a, areas ar where r.Id_eventos = a.Id_eventos and r.Id_areas = ",area," and Id_cuadrillas = ",cuadrilla," ", null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = ReportesDAO;