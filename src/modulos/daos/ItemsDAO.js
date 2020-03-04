const DaoHandlerJS = require('../bd/daohandlerjs');

class ItemsDAO extends DaoHandlerJS {
    constructor() {
        super("items");
    }

    getItems(callback) {
        this.exec_query('select * from items', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = ItemsDAO;