import mongoose, { Document, Schema } from "mongoose";
import { generateId } from "../utils/generate-id";

export interface Dealer extends Document {
  id: string;
  name: string;
  email: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}

const dealerSchema = new Schema<Dealer>(
  {
    _id: {
      type: String,
      default: () => `dealer_${generateId()}`,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: [true, "city is required"],
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
          name: ret.name,
          email: ret.email,
          city: ret.city,
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
          name: ret.name,
          email: ret.email,
          city: ret.city,
          createdAt: ret.createdAt,
          updatedAt: ret.updatedAt,
        };
      },
    },
  }
);

export default mongoose.model<Dealer>("Dealer", dealerSchema);
