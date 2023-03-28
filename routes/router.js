"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero-controller"),
    AvionController = require("../controllers/avion-controller"),
    express = require("express"),
    router = express.Router();

router
  //grupo6_19
  //****PASAJERO EJEMPLO****
  .get("/pasajero/getAll", PasajeroController.getAll)
  .post("/pasajero/getone/:codigopasajero", PasajeroController.getOne)
  .post("/pasajero/insertar", PasajeroController.post)
  .put("/pasajero/actualizar/:codigopasajero", PasajeroController.put)
  .delete("/pasajero/eliminar/:codigopasajero", PasajeroController.delete)

  
  //****AVION EJEMPLO****
  .get("/avion/getall", AvionController.getAll)
  .post("/avion/getone/:numeroavion", AvionController.getOne)
  .post("/avion/insertar", AvionController.post)
  .put("/avion/actualizar/:numeroavion", AvionController.put)
  .delete("/avion/eliminar/:numeroavion", AvionController.delete)

  .use(PasajeroController.error404)
  .use(AvionController.error404);

module.exports = router;
