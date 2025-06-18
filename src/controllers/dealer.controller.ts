import { Request, Response } from "express";
import { OK, CREATED, BAD_REQUEST, NOT_FOUND } from "../utils/http-status";
import Dealer from "../models/dealer.model";

export const createDealer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email = "", city } = req.body;

    if (!name || !city) {
      res.status(BAD_REQUEST).json({
        success: false,
        error: "Name & City is required",
      });
      return;
    }

    const dealer = await Dealer.create({ name, email, city });
    res.status(CREATED).json({
      success: true,
      data: dealer,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to create dealer",
    });
  }
};

export const getDealers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const dealers = await Dealer.find().sort({ createdAt: -1 });
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

export const getDealer = async (req: Request, res: Response): Promise<void> => {
  try {
    const dealer = await Dealer.findById(req.params.id);
    if (!dealer) {
      res.status(NOT_FOUND).json({
        success: false,
        error: "dealer not found",
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: {
        ...dealer.toObject(),
      },
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch dealer",
    });
  }
};


export const updateDealer = async (req: Request, res: Response): Promise<void> => {
  try {
    const dealer = await Dealer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!dealer) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'Dealer not found',
      });
      return;
    }

    res.status(OK).json({
      success: true,
      data: dealer,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update dealer',
    });
  }
};

export const deleteDealer = async (req: Request, res: Response): Promise<void> => {
  try {
    const dealer = await Dealer.findByIdAndDelete(req.params.id);
    if (!dealer) {
      res.status(NOT_FOUND).json({
        success: false,
        error: 'Dealer not found',
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