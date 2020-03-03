const DaoHandlerJS = require('../bd/daohandlerjs');

class EmpleadosDAO extends DaoHandlerJS {
    constructor() {
        super("empleados");
    }

    getEmpleados(callback) {
        this.exec_query('select * from empleados', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = EmpleadosDAO;