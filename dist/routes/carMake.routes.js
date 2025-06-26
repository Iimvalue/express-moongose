"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carMake_controller_1 = require("../controllers/carMake.controller");
const router = (0, express_1.Router)({ mergeParams: true });
router.route("/").get(carMake_controller_1.getCarsMake).post(carMake_controller_1.createCarMake);
router.route("/:id").get(carMake_controller_1.getCarMake).put(carMake_controller_1.updateCarMake).delete(carMake_controller_1.deleteCarMake);
exports.default = router;
