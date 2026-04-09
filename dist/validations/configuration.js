import { Result } from "@praha/byethrow";
import { ZodError } from "zod";
import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
import UnProcessEntityExceptions from "../exceptions/unProcessEntityExceptions.js";
import { formatErrorMessages } from "../utils/errors.js";
import { vCreateUserSchema } from "./schemas/users.js";
const validationSchemas = {
    "users:add": vCreateUserSchema
};
export async function validateRequest(reqActionType, reqBody, message) {
    const actionSchema = validationSchemas[reqActionType];
    return Result.try({
        try() {
            const validatedReqBody = actionSchema.parse(reqBody);
            return validatedReqBody;
        },
        catch(error) {
            if (error instanceof ZodError) {
                return new UnProcessEntityExceptions(message, formatErrorMessages(error.issues));
            }
            return new InternalServerExceptions("Internal server error");
        },
    });
}
