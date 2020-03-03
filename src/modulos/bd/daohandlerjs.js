const sqlUtil = require('./sqlUtil');

//Libreria para el manejo de operaciones basicas con tablas y 
// para ejecutar consultas personalizadas.
class DAOHandlerJS {
    constructor(tableName) {
        this.tableName = tableName;
    }

    exec_query(sql, params, callback) {


        sqlUtil.getPool().getConnection((err, con) => {
            if (err) {
                if (con)
                    con.release();
                callback(err, null, null);
            } else {
                console.log(sql);
                console.log(params);
                con.query(sql, params, function (err, result, fields) {
                    con.release();
                    callback(err, result, fields);
                });
            }
        });
    }

    insert(fields, callback) {
        var fieldsInsert = [];
        var fValues = [];
        var fInt = [];

        for (let field in fields) {
            fieldsInsert.push(field);
            fValues.push(fields[field]);
            fInt.push('?');
        }

        var sql = `INSERT INTO ${this.tableName} (${fieldsInsert.join(',')}) VALUES (${fInt.join(',')})`;

     //   console.log("fValues: "+JSON.stringify(fValues));

        this.exec_query(sql, fValues, (err, result, fields) => {
            callback(err, result, fields);
        });
    }

    update(fields, cond, dataCond, callback) {
        var fieldsUpdate = [];
        var fValues = [];

        for (let field in fields) {
            fieldsUpdate.push(field + " = ?");
            fValues.push(fields[field]);
        }

        Array.prototype.push.apply(fValues, dataCond);
        console.log(fValues, dataCond)

        var sql = `UPDATE ${this.tableName} SET ${fieldsUpdate.join(',')} WHERE ${cond}`;
        console.log(sql)
       // console.log(sql,fValues)
        this.exec_query(sql, fValues, (err, result, fields) => {
            callback(err, result, fields);
        });
    }

    delete(cond, fieldsCond, callback) {
        var sql = `DELETE FROM ${this.tableName} WHERE ${cond}`;

        this.exec_query(sql, fieldsCond, (err, result, fields) => {
            callback(err, result, fields);
        });
    }

    get(cond, dataCond, callback) {
        var sql = `SELECT * FROM ${this.tableName} WHERE ${cond}`;

        this.exec_query(sql, dataCond, (err, result, fields) => {
          //  console.log(sql);
            callback(err, result, fields);
        });
    }
}


module.exports = DAOHandlerJS;