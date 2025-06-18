import mongoose, { Document, Schema } from "mongoose";
import { generateId } from "../utils/generate-id";

export interface Car extends Document {
  id: string;
  dealerId: string;
  carMakeId: string;
  name: string;
  price: string;
  year: string;
  color: string;
  wheelsCount: string;
  createdAt: Date;
  updatedAt: Date;
}

const carSchema = new Schema<Car>(
  {
    _id: {
      type: String,
      default: () => `car_${generateId()}`,
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
  },
  {
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
  }
);

export default mongoose.model<Car>("Car", carSchema);
