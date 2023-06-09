"Use strict"


var AvionModel = require('../models/avion-model'),
    AvionController = () => {}


    AvionController.getAll = (req, res, next) => {
    AvionModel.getAll((err, rows) => {
        if(err)
        {
            let locals = {
                title : 'Error al consultar la base datos',
                description : 'Error de sintaxis SQL',
                error: err
            } 

            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista de aviones',
                data : rows
            }
            res.status(200).send(rows.rows)
            //
        }
    })
}

     AvionController.getOne = (req, res, next) => {
    let numeroavion = re.body.numeroavion
    console.log(nomeroavion)

    AvionModel.getOne(numeroavion, (err, rows)=> {
        console.log(err, '---', rows)
        if(err)
        {
            let locals = {
                title : `Error al buscar el registro con el id: ${numeroavion}`,
                description : "Error de sintaxis SQL",
                error : err
            }

            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Editar Avion',
                data : rows
            }
            res.status(200).send(rows.rows)
        }

    })

}

AvionController.post = (req, res, next) => {
    let avion = {
        numeroavion : req.body.numeroavion,
        TipoAvion : req.body.TipoAvion,
        HorasVuelo : req.body.HorasVuelo,
        CapacidadPasajeo : req.body.CapacidadPasajeo,
        FechaPrimerVuelo : req.body.FechaPrimerVuelo,
        PaisConstruccion : req,body,PaisConstruccion,
        CantidadVuelos : req,body,CantidadVuelos, 
    }

    console.log(avion)

    AvionModel.post(avion, (err) =>{
        if(err)
        {
            let locals = {
                title : `Error al buscar el registro con el id: ${numeroavion}`,
                description : "Error de sintaxis SQL",
                error : err,
            }

            res.status(520).json(err)
        }
        else{
            res.send('Avion ingresado de forma correcta')
        }     
    })
}

AvionController.put = (req, res, next) => {
    let avion = {
        numeroavion : req.body.numeroavion,
        TipoAvion : req.body.TipoAvion,
        HorasVuelo : req.body.HorasVuelo,
        CapacidadPasajeo : req.body.CapacidadPasajeo,
        FechaPrimerVuelo : req.body.FechaPrimerVuelo,
        PaisConstruccion : req,body,PaisConstruccion,
        CantidadVuelos : req,body,CantidadVuelos, 
    }

    console.log(avion)

    AvionModel.put(avion, (err) =>{
        if(err)
        {
            let locals = {
                title : `Error al buscar el registro con el id: ${avion.numeroavion}`,
                description : "Error de sintaxis SQL",
                error : err,
            }

            res.status(520).json(err)
        }
        else{
            res.send('Avion actualizado de forma correcta')
        }     
    })
}




    AvionController.addForm = (req, res, next) =>
    res.render('add-avion', {title : 'Agregar Avion'})

    AvionController.error404 =(req, res, next) => {
        let error = new Error(),
        locals = {
            title : 'Error 404',
            description : 'Recurso no encontrado',
            error : error,
        }
        error.status = 404

        res.render('error', locals)
        
        next ()
        
    }



module.exports = AvionController