"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCarMake = exports.updateCarMake = exports.getCarMake = exports.getCarsMake = exports.createCarMake = void 0;
const http_status_1 = require("../utils/http-status");
const carMake_model_1 = __importDefault(require("../models/carMake.model"));
const createCarMake = async (req, res) => {
    try {
        const { country, brand } = req.body;
        if (!country || !brand) {
            res.status(http_status_1.BAD_REQUEST).json({
                success: false,
                error: "Country & Brand is required",
            });
            return;
        }
        const carMake = await carMake_model_1.default.create({ country, brand });
        res.status(http_status_1.CREATED).json({
            success: true,
            data: carMake,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to create dealer",
        });
    }
};
exports.createCarMake = createCarMake;
const getCarsMake = async (_req, res) => {
    try {
        const dealers = await carMake_model_1.default.find().sort({ createdAt: -1 });
        console.log(dealers);
        res.status(http_status_1.OK).json({
            success: true,
            data: dealers,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch dealers",
        });
    }
};
exports.getCarsMake = getCarsMake;
const getCarMake = async (req, res) => {
    try {
        const carMake = await carMake_model_1.default.findById(req.params.id);
        if (!carMake) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: "CarMake not found",
            });
            return;
        }
        res.status(http_status_1.OK).json({
            success: true,
            data: {
                ...carMake.toObject(),
            },
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch dealer",
        });
    }
};
exports.getCarMake = getCarMake;
const updateCarMake = async (req, res) => {
    try {
        const carMake = await carMake_model_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
        if (!carMake) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: 'CarMake not found',
            });
            return;
        }
        res.status(http_status_1.OK).json({
            success: true,
            data: carMake,
        });
    }
    catch (error) {
        res.status(http_status_1.BAD_REQUEST).json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update dealer',
        });
    }
};
exports.updateCarMake = updateCarMake;
const deleteCarMake = async (req, res) => {
    try {
        const catMake = await carMake_model_1.default.findByIdAndDelete(req.params.id);
        if (!catMake) {
            res.status(http_status_1.NOT_FOUND).json({
                success: false,
                error: 'CarMake not found',
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
            error: error instanceof Error ? error.message : 'Failed to delete dealer',
        });
    }
};
exports.deleteCarMake = deleteCarMake;
