const configUtil= require('./configUtil');

var configDB= configUtil.getConfigDB();

var mysql = require('mysql');
var pool  = mysql.createPool(configDB);

var sqlUtil= {
    getPool:()=>{
        return pool;
    }
};


module.exports= sqlUtil;