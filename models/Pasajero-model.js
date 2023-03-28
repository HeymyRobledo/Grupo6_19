"use strict"

var conn = require("../config/db-connection"),
    PasajeroModel = () => {};

//mostra datos
PasajeroModel.getAll = (cb)  => conn.query("SELECT * FROM Pasajero", cb);

//mostrar un solo dato
PasajeroModel.getOne = (codigopasajero, cb) => 
    conn.query(
    "SELECT * FROM Pasajero WHERE CodigoPasajero = $1", [codigopasajero], cb);

//mostrar el dato insertado
PasajeroModel.post = (data, cb) => 

        conn.query("call public.sp_pasajero_insert ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigopasajero,
            data.nombres,
            data.apellidos,
            data.fecharegistro,
            data.nacionalidad,
            data.numerotelefonico,
            data.email
        ],
        cb);


//mostrar dato actualizado
PasajeroModel.put = (data, cb) => 

        conn.query("call public.sp_pasajero_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigopasajero,
            data.nombres,
            data.apellidos,
            data.fecharegistro,
            data.nacionalidad,
            data.numerotelefonico,
            data.email
        ],
        cb);

//mostrar dato eliminado
PasajeroModel.delete = (id, cb)=> 
        conn.query(
            "call sp_pasajero_delete ($1)", [id.codigopasajero],
     cb);


module.exports = PasajeroModel;
//GRUOPAL