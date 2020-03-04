const DaoHandlerJS = require('../bd/daohandlerjs');

class CuadrillasDAO extends DaoHandlerJS {
    constructor() {
        super("cuadrillas");
    }

    getCuadrillas(callback) {
        this.exec_query('select * from cuadrillas', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = CuadrillasDAO;