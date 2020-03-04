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

}

module.exports = ReportesDAO;