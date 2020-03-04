const DaoHandlerJS = require('../bd/daohandlerjs');

class AreasDAO extends DaoHandlerJS {
    constructor() {
        super("areas");
    }

    getAreas(callback) {
        this.exec_query('select * from areas', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = AreasDAO;