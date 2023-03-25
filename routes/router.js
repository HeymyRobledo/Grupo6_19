"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero-controller"),
  express = require("express"),
  router = express.Router();

router
  //grupo6_19
  //****PASAJERO EJEMPLO****
  .get("/pasajero/getall", PasajeroController.getAll)
  .get("/pasajero/getone/:codigopasajero", PasajeroController.getOne)
  .post("/pasajero/insertar/:codigopasajero", PasajeroController.post)
  .put("/pasajero/actualizar/:codigopasajero", PasajeroController.put)
  .delete("/pasajero/eliminar/:codigopasajero", PasajeroController.delete)
  .use(PasajeroController.error404);

module.exports = router;
