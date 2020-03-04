const DaoHandlerJS = require('../bd/daohandlerjs');

class EventosDAO extends DaoHandlerJS {
    constructor() {
        super("eventos");
    }

    getEventos(callback) {
        this.exec_query('select * from eventos', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = EventosDAO;