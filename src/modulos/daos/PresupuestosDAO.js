const DaoHandlerJS = require('../bd/daohandlerjs');

class PresupuestosDAO extends DaoHandlerJS {
    constructor() {
        super("presupuestos");
    }

    getPresupuestos(callback) {
        this.exec_query('select * from presupuestos', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = PresupuestosDAO;