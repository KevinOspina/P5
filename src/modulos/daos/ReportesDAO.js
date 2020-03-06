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

    getReportesByCuadrilla(Id_areas, Id_cuadrillas, callback){
        this.exec_query('select distinct r.Id_reportes as id, r.Tipo, r.Descripcion, ar.nombre from reportes r, actividades a, areas ar, cuadrillas c where r.Id_eventos = a.Id_eventos and r.Id_areas = ar.Id_areas and a.Id_cuadrillas = c.Id_cuadrillas and r.Id_areas =? and a.Id_cuadrillas =?',[Id_areas,Id_cuadrillas], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = ReportesDAO;