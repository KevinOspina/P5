const DaoHandlerJS = require('../bd/daohandlerjs');

class NotificacionesDAO extends DaoHandlerJS {
    constructor() {
        super("notificaciones");
    }

    getNotificaciones(callback) {
        this.exec_query('select * from notificaciones', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = NotificacionesDAO;