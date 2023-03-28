//esta en el disco local
'use strict'

var PasajeroModel = require('../models/Pasajero-model'),
PasajeroController = () => {}

//MOSTRAR DATOS DE TODA LAS BASE DE DATOS
PasajeroController.getAll = (req, res, next) => {
PasajeroModel.getAll((err,rows)=> {
        if (err)
        {
            let locals = {
                tittle: 'Error al consultar la base de datos',
                description : 'Error de Sintaxis SQL',
                error: err
            }

            res.render('error', locals)
        }
        else
        {
            let locals = {
                tittle: 'Lista de pasajeros',
                data: rows
            }
            res.status(200).send(rows.rows)
        }
})
}

//MOSTRAR DATOS DE LA BASE DE DATOS PERO SOLO DE LA QUE SE PIDA 
PasajeroController.getOne = (req, res, next) => {
    let codigopasajero = req.body.codigopasajero
    console.log(codigopasajero)

    PasajeroModel.getOne(codigopasajero, (err, rows) => {
        console.log(err, '---', rows)
        if(err)
        {
            let locals = {
                tittle:  `Error al buscar el registro con el id: ${codigopasajero}`,
                description: "Error de Sintaxis SQL",
                error : err
            }

            res.render('error', locals)
        }
        else
        {
            let locals = {
                tittle : 'Editar de Pasajeros',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    } ) 
} 

//INSERTAR PASAJERO EN LA BASE DE DATOS
PasajeroController.post = (req, res, next) => {
    let pasajero = {
        codigopasajero : req.body.codigopasajero,
        nombres : req.body.nombres,
        apellidos : req.body.apellidos,
        fecharegistro : req.body.fecharegistro,
        nacionalidad : req.body.nacionalidad,
        numerotelefonico : req.body.numerotelefonico,
        email : req.body.email
    }
     
    console.log(pasajero)

    PasajeroModel.post(pasajero, (err)=> {
        if (err)
        {
            let locals = {
                tittle : `Error al salvar el Pasajero con el id: ${pasajero.codigopasajero}`,
                description : "Error de Sintaxis SQL",
                error : err
            }

            res.status(520).json(err);
        }
        else{
            res.send('Pasajero Ingresado de Forma Correcta')
        }
    })
}

//UPDATE PASAJERO EN LA BASE DE DATOS
PasajeroController.put = (req, res, next) => {
    let pasajero = {
        codigopasajero : req.body.codigopasajero,
        nombres : req.body.nombres,
        apellidos : req.body.apellidos,
        fecharegistro : req.body.fecharegistro,
        nacionalidad : req.body.nacionalidad,
        numerotelefonico : req.body.numerotelefonico,
        email : req.body.email
    }
    console.log(pasajero)
    PasajeroModel.put(pasajero, (err)=>{
        if (err)
        {
            let locals = {
                tittle : `Error al actualizar el Pasajero con el id: ${pasajero.codigopasajero}`,
                description : "Error de sintaxis SQL",
                error : err
            }
            res.status(520).json(err);
        }
        else{
            res.send('Pasajero Actualizado de Forma Correcta')
        }
    })
}

//DELETE PASAJERO EN LA BASE DE DATOS PRUEBA EN POSTAM
PasajeroController.delete = (req, res, next) => {
    let pasajero ={
        codigopasajero : req.body.codigopasajero
    }
    console.log(pasajero)
    PasajeroModel.delete(pasajero, (err)=>{
        if (err)
        {
            let locals = {
                tittle : `Error al Eliminar con el id: ${pasajero.codigopasajero}`,
                description : "Error de sintaxis SQL",
                error : err
            }
            res.status(520).json(err);
        }
        else{
            res.send('Pasajero Eliminado de Forma Correcta')
        }
})
}

PasajeroController.addForm = (req, res, next) => 
  res.render('add-pasajero', { tittle: 'Agregar Pasajero' })

PasajeroController.error404 =(req, res, next)=> {
    let error = new Error(),
    locals = {
        tittle : 'error 404',
        description : 'Recurso No Encontrado',
        error : error
    }
    error.status = 404

    res.render('error', locals)

    next()
}
module.exports = PasajeroController;


