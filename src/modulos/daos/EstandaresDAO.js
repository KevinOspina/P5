const DaoHandlerJS = require('../bd/daohandlerjs');

class EstandaresDAO extends DaoHandlerJS {
    constructor() {
        super("estandares");
    }

    getEstandares(callback) {
        this.exec_query('select * from estandares', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = EstandaresDAO;