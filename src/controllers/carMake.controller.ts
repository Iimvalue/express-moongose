import { Request, Response } from "express";
import { OK, CREATED, BAD_REQUEST, NOT_FOUND } from "../utils/http-status";
import CarMake from "../models/carMake.model";


export const createCarMake = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { country, brand } = req.body;

    if (!country || !brand) {
      res.status(BAD_REQUEST).json({
        success: false,
        error: "Country & Brand is required",
      });
      return;
    }

    const carMake = await CarMake.create({ country, brand });
    res.status(CREATED).json({
      success: true,
      data: carMake,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to create dealer",
    });
  }
};

export const getCarsMake = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const dealers = await CarMake.find().sort({ createdAt: -1 });
    console.log(dealers);

    res.status(OK).json({
      success: true,
      data: dealers,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch dealers",
    });
  }
};

export const getCarMake = async (req: Request, res: Response): Promise<void> => {
  try {
    const carMake = await CarMake.findById(req.params.id);
    if (!carMake) {
      res.status(NOT_FOUND).json({
        success: false,
        error: "CarMake not found",
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: {
        ...carMake.toObject(),
      },
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch dealer",
    });
  }
};


export const updateCarMake = async (req: Request, res: Response): Promise<void> => {
  try {
    const carMake = await CarMake.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!carMake) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'CarMake not found',
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: carMake,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update dealer',
    });
  }
};

export const deleteCarMake = async (req: Request, res: Response): Promise<void> => {
  try {
    const catMake = await CarMake.findByIdAndDelete(req.params.id);
    if (!catMake) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'CarMake not found',
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
      error: error instanceof Error ? error.message : 'Failed to delete dealer',
    });
  }
};
