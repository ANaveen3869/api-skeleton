import { Result } from "@praha/byethrow";
import z, { ZodError } from "zod";
import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
import UnProcessEntityExceptions from "../exceptions/unProcessEntityExceptions.js";
import { ValidationAction } from "../types/app.js";
import { formatErrorMessages } from "../utils/errors.js";
import { vCreateUserSchema } from "./schemas/users.js";

const validationSchemas = {
    "users:add" : vCreateUserSchema
} as const

export async function validateRequest(reqActionType : ValidationAction  , reqBody : unknown ,  message : string){
    const actionSchema = validationSchemas[reqActionType];
    return Result.try({
        try() {
            const validatedReqBody = actionSchema.parse(reqBody);
            return validatedReqBody as z.infer<typeof actionSchema>;
        },
        catch(error) {
            if(error instanceof ZodError){
                return new UnProcessEntityExceptions(message , formatErrorMessages(error.issues));
            }
            return new InternalServerExceptions("Internal server error");
        },
    })
}