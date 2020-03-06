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

    getCuadrillasByEventos(Id_eventos,callback) {
        this.exec_query('SELECT cuadrillas.Tipo,actividades.Id_cuadrillas, eventos.Descripcion, eventos.Id_eventos FROM actividades inner join cuadrillas on actividades.Id_cuadrillas = cuadrillas.Id_cuadrillas inner join eventos on eventos.Id_eventos = actividades.Id_eventos and eventos.Id_eventos = ?', [Id_eventos], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

}

module.exports = CuadrillasDAO;