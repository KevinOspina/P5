const DaoHandlerJS = require('../bd/daohandlerjs');

class ActividadesDAO extends DaoHandlerJS {
    constructor() {
        super("actividades");
    }

    getActividades(callback) {
        this.exec_query('select * from actividades', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = ActividadesDAO;