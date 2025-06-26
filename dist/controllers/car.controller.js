"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.createCar = void 0;
const http_status_1 = require("../utils/http-status");
const car_model_1 = __importDefault(require("../models/car.model"));
const dealer_model_1 = __importDefault(require("../models/dealer.model"));
const carMake_model_1 = __importDefault(require("../models/carMake.model"));
const createCar = async (req, res) => {
    try {
        const { dealerId, carmakeId } = req.params;
        const { name, price, year, color, wheelsCount } = req.body;
        if (!name || !price || !year || !color || !wheelsCount) {
            res.status(http_status_1.BAD_REQUEST).json({
                success: false,
                error: "Name & Price & Year & Color & WheelCounts is required",
            });
            return;
        }
        const carDealerId = await dealer_model_1.default.findById(dealerId);
        if (!carDealerId) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: "Dealer not found",
            });
            return;
        }
        const carMakeId = await carMake_model_1.default.findById(carmakeId);
        if (!carMakeId) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: "CarMake not found",
            });
            return;
        }
        const car = await car_model_1.default.create({
            dealerId,
            carMakeId,
            name,
            price,
            year,
            color,
            wheelsCount,
        });
        res.status(http_status_1.CREATED).json({
            success: true,
            data: car,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to create item",
        });
    }
};
exports.createCar = createCar;
const getCars = async (_req, res) => {
    try {
        const cars = await car_model_1.default.find().sort({ createdAt: -1 });
        res.status(http_status_1.OK).json({
            success: true,
            data: cars,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch car",
        });
    }
};
exports.getCars = getCars;
const getCar = async (req, res) => {
    try {
        const car = await car_model_1.default.findById(req.params.id);
        if (!car) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: "Car not found",
            });
            return;
        }
        res.status(http_status_1.OK).json({
            success: true,
            data: {
                ...car.toObject(),
            },
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch car",
        });
    }
};
exports.getCar = getCar;
const updateCar = async (req, res) => {
    try {
        const car = await car_model_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
        if (!car) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: 'Car not found',
            });
            return;
        }
        res.status(http_status_1.OK).json({
            success: true,
            data: car,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update car',
        });
    }
};
exports.updateCar = updateCar;
const deleteCar = async (req, res) => {
    try {
        const car = await car_model_1.default.findByIdAndDelete(req.params.id);
        if (!car) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: 'Car not found',
            });
            return;
        }
        res.status(http_status_1.OK).json({
            success: true,
            data: {},
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to delete car',
        });
    }
};
exports.deleteCar = deleteCar;
