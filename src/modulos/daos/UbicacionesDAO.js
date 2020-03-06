const DaoHandlerJS = require('../bd/daohandlerjs');

class UbicacionesDAO extends DaoHandlerJS {
    constructor() {
        super("ubicaciones");
    }

    getUbicaciones(callback) {
        this.exec_query('select * from ubicaciones', null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    getUbicacionesByEvento(Id_eventos, callback){
        this.exec_query('select e.Tipo, e.Estado, e.Descripcion, u.Referencia from eventos e, ubicaciones u where e.Id_ubicaciones = u.Id_ubicaciones and u.Id_ubicaciones =?', [Id_eventos], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = UbicacionesDAO;