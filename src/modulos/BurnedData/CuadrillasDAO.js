const data = require('./CuadrillasData.json');

class CuadrillasDAO{
    constructor() {
        console.log("Service Cuadrillas Running");
    }

    getCuadrillasJSON() {
        return data;
    }

    postCuadrillas(cuadrilla){
        data.push(cuadrilla)
    }
}

module.exports = CuadrillasDAO;