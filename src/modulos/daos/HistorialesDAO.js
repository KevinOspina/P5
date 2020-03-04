const DaoHandlerJS = require('../bd/daohandlerjs');

class HistorialesDAO extends DaoHandlerJS {
    constructor() {
        super("historiales");
    }

    getHistoriales(callback) {
        this.exec_query('select * from historiales', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = HistorialesDAO;