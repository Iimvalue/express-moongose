import { Request, Response } from "express";
import { OK, CREATED, BAD_REQUEST, NOT_FOUND } from "../utils/http-status";
import Car from "../models/car.model";
import Dealer from "../models/dealer.model";
import CarMake from "../models/carMake.model";

export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { dealerId, carmakeId } = req.params;
    const { name, price, year, color, wheelsCount } = req.body;

    if (!name || !price || !year || !color || !wheelsCount) {
      res.status(BAD_REQUEST).json({
        success: false,
        error: "Name & Price & Year & Color & WheelCounts is required",
      });
      return;
    }

    const carDealerId = await Dealer.findById(dealerId);
    if (!carDealerId) {
      res.status(NOT_FOUND).json({
        success: false,
        error: "Dealer not found",
      });
      return;
    }

    const carMakeId = await CarMake.findById(carmakeId);
    if (!carMakeId) {
      res.status(NOT_FOUND).json({
        success: false,
        error: "CarMake not found",
      });
      return;
    }

    const car = await Car.create({
      dealerId,
      carMakeId,
      name,
      price,
      year,
      color,
      wheelsCount,
    });
    res.status(CREATED).json({
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to create item",
    });
  }
};

export const getCars = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });

    res.status(OK).json({
      success: true,
      data: cars,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch car",
    });
  }
};

export const getCar= async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      res.status(NOT_FOUND).json({
        success: false,
        error: "Car not found",
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: {
        ...car.toObject(),
      },
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch car",
    });
  }
};


export const updateCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!car) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'Car not found',
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update car',
    });
  }
};

export const deleteCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'Car not found',
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete car',
    });
  }
};
