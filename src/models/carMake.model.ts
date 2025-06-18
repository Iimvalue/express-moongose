
import mongoose, { Document, Schema } from "mongoose";
import { generateId } from "../utils/generate-id";

export interface CarMake extends Document {
  id: string;
  country: string;
  brand: string;
  createdAt: Date;
  updatedAt: Date;
}

const carMakeSchema = new Schema<CarMake>(
  {
    _id: {
      type: String,
      default: () => `carmake_${generateId()}`,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
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
          country: ret.country,
          brand: ret.brand,
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
          country: ret.country,
          brand: ret.brand,
          createdAt: ret.createdAt,
          updatedAt: ret.updatedAt,
        };
      },
    },
  }
);

export default mongoose.model<CarMake>("CarMake", carMakeSchema);
