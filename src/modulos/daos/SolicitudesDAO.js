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

}

module.exports = SolicitudesDAO;