import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { isEmptyObj } from "../utils";
import ErrorResponse from "../utils/ErrorResponse";

export const bodyCheck = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (isEmptyObj(req.body)) {
      next(new ErrorResponse("Empty request body"));
    } else {
      next();
    }
  }
);
