const data = require('../BurnedData/EventosData.json');

class EventosBurnedDAO {
    constructor() {
        console.log("Pegandole a BurnedDataEventos")
    }
    
    getEventos(){
        return data;
    }

    insertEvento(evento){
        data.push(evento);
    }
}

module.exports = EventosBurnedDAO;