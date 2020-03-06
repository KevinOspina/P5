const DaoHandlerJS = require('../bd/daohandlerjs');

class SolicitudesDAO extends DaoHandlerJS {
    constructor() {
        super("solicitudes");
    }

    getSolicitudes(callback) {
        this.exec_query('select * from solicitudes', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    getSolicitudesByArea(area, callback){
        this.exec_query('select e.Tipo as area, s.Descripcion as solicitud, s.Estado, e.Descripcion as evento from solicitudes s, eventos e where s.Id_solicitudes = e.Id_solicitudes and e.tipo =?', [area], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = SolicitudesDAO;