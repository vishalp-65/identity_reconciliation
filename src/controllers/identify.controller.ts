import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import errorHandler from "../utils/index";
import { validateIdentifyRequest } from "../validations/requestValidation";

export const identifyController = errorHandler.catchAsync(
    async (req: Request, res: Response) => {
        const data = validateIdentifyRequest(req.body);
        if (!data || Object.keys(data).length === 0) {
            throw new errorHandler.ApiError(
                httpStatus.BAD_REQUEST,
                "phone number or email not found"
            );
        }
        // const contact = await identifyService(data);
        console.log("data", data);
        res.status(httpStatus.OK).json("OK");
    }
);
