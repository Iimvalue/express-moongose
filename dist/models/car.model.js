"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const generate_id_1 = require("../utils/generate-id");
const carSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: () => `car_${(0, generate_id_1.generateId)()}`,
    },
    dealerId: {
        type: String,
        required: [true, "DealerId is required"],
        trim: true,
    },
    carMakeId: {
        type: String,
        required: [true, "carMakeId is required"],
        trim: true,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    price: {
        type: String,
        required: [true, "Price is required"],
        trim: true,
    },
    year: {
        type: String,
        required: [true, "Year is required"],
        trim: true,
    },
    color: {
        type: String,
        required: [true, "Color is required"],
        trim: true,
    },
    wheelsCount: {
        type: String,
        required: [true, "wheelsCounts is required"],
        trim: true,
    },
}, {
    timestamps: true,
    _id: false,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            return {
                id: ret._id,
                dealerId: ret.dealerId,
                carMakeId: ret.carMakeId,
                name: ret.name,
                price: ret.price,
                year: ret.year,
                color: ret.color,
                wheelCounts: ret.wheelCounts,
                createdAt: ret.createdAt,
                updatedAt: ret.updatedAt,
            };
        },
    },
    toObject: {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            return {
                id: ret._id,
                dealerId: ret.dealerId,
                carMakeId: ret.carMakeId,
                name: ret.name,
                price: ret.price,
                year: ret.year,
                color: ret.color,
                wheelCounts: ret.wheelCounts,
                createdAt: ret.createdAt,
                updatedAt: ret.updatedAt,
            };
        },
    },
});
exports.default = mongoose_1.default.model("Car", carSchema);
