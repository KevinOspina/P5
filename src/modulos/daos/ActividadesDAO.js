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

    getActividadesByCuadrilla(Id_cuadrillas,callback) {
        this.exec_query('SELECT cuadrillas.Tipo,actividades.Id_cuadrillas, actividades.Descripcion FROM actividades inner join cuadrillas on actividades.Id_cuadrillas = cuadrillas.Id_cuadrillas and cuadrillas.Id_cuadrillas = ?', [Id_cuadrillas], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    getActividadByCuadrilla(Id_cuadrillas,Id_actividades,callback) {
        this.exec_query('SELECT cuadrillas.Tipo,actividades.Id_cuadrillas, actividades.Descripcion, actividades.Id_actividades FROM actividades inner join cuadrillas on actividades.Id_cuadrillas = cuadrillas.Id_cuadrillas and cuadrillas.Id_cuadrillas = ? and actividades.Id_actividades = ?', [Id_cuadrillas, Id_actividades], (err, row, fields) => {
            callback(err, row, fields);
        });
    }


}

module.exports = ActividadesDAO;