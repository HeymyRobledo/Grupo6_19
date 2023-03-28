"Use strict"

var conn = require ("../config/db-connection"),
    AvionModel = () => {};

AvionModel.getAll = (cb) => conn.query("SELECT * FROM Avion", cb);

AvionModel.getOne = (NumeroAvion, cb) =>
    conn.query(
     "SELECT * FROM Avion WHERE NumeroAvion = $1", [NumeroAvion], cb);


AvionModel.Post = (data, cb) =>

            conn.query ( "Call public.sp_avion_insert ($1, $2, $3, $4, $5,$6,$7)",
            [
            data.NumeroAvion,
            data.TipoAvion,
            data.HorasVuelos,
            data.CapacidadPasajeo,
            data.FechaPrimerVuelo,
            data,PaisConstruccion,
            data,CantidadVuelos,
            ],
            cb); 

AvionModel.Put = (data, cb) =>

            conn.query ( "Call public.sp_avion_update ($1, $2, $3, $4)",
            [
            data.NumeroAvion,
            data.TipoAvion,
            data.HorasVuelos,
            data.CapacidadPasajeo,
            data.FechaPrimerVuelo,
            data,PaisConstruccion,
            data,CantidadVuelos,
            ],
            cb);  

            AvionModel.delete = (id, cb) =>
            conn.query("call public.sp_avion_delete ($1)", [id.NumeroAvion],
            cb);
       
        

             

module.exports = AvionModel