"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createCar, deleteCar, getCar, getCars, updateCar } from "../controllers/car.controller";
const express_1 = require("express");
const car_controller_1 = require("../controllers/car.controller");
const router = (0, express_1.Router)({ mergeParams: true });
router.route("/").get(car_controller_1.getCars).post(car_controller_1.createCar);
router.route("/:id").get(car_controller_1.getCar).put(car_controller_1.updateCar).delete(car_controller_1.deleteCar);
exports.default = router;
