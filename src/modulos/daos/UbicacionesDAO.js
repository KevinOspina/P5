const DaoHandlerJS = require('../bd/daohandlerjs');

class UbicacionesDAO extends DaoHandlerJS {
    constructor() {
        super("ubicaciones");
    }

    getUbicaciones(callback) {
        this.exec_query('select * from ubicaciones', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = UbicacionesDAO;