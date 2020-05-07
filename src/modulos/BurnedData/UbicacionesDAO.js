const DaoHandlerJS = require("../BurnedData/ubicacionesData.json");

class UbicacionesDAO {

    constructor() {
        console.log("Service UbicacionesDAO Running");
    }

    postUbicacion(ubicacionID,latitud,longitud){
        console.log(ubicacionID,latitud,longitud);
        var NewUbication = '{"ubicacionID":'+'"'+ubicacionID+'",'+'"coordenadas":{'+'"latitud":'+'"'+latitud+'",'+'"longitud":'+'"'+longitud+'"'+'}'+'}';
        console.log(NewUbication);
        var obj = JSON.parse(NewUbication);
        DaoHandlerJS.push(obj);
        console.log(DaoHandlerJS);
    }

    getUbicacionesJSON(){
        var ubicationJson = DaoHandlerJS;
        console.log(ubicationJson);
        return ubicationJson;
    }
    
}

module.exports = UbicacionesDAO;