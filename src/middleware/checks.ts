import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../util/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Inside checksearchparams................');
  
  if (req.query.q) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};