import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { isEmptyObj } from "../utils";
import ErrorResponse from "../utils/ErrorResponse";

export const bodyCheck = (fields: string[] = [], notEmpty = true) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    if (notEmpty === true && isEmptyObj(req.body)) {
      return next(new ErrorResponse("Empty request body"));
    }

    let missingfields = fields.filter((f) => !req.body.hasOwnProperty(f));

    if (missingfields.length != 0) {
      return next(
        new ErrorResponse(`Missing required fields: ${missingfields}`)
      );
    }

    next();
  });
