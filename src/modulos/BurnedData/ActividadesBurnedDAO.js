const data = require('./ActividadesData.json');

class ActividadesBurnedDAO {
    constructor() {
        console.log("Service Actividades Running");
    }

    getActividades(){
        return data;
    }

    postActividades(actividad){
        try {
            data.push(actividad);
            return this.getActividades()
        } catch (error) {
            return error
        }
    }
}

module.exports = ActividadesBurnedDAO;