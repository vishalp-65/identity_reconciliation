import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";

export const errorHandler = (
    err: Error | ZodError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ZodError) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: "Validation error",
            errors: err.errors,
        });
    }

    // Handle other errors
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: err.message || "An unknown error occurred",
    });
};
