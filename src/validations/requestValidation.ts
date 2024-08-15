import { z } from "zod";

export const identifySchema = z.object({
    email: z.string().email().optional(),
    phoneNumber: z.string().optional(),
});

export const validateIdentifyRequest = (data: unknown) => {
    return identifySchema.parse(data);
};
