import { Result } from "@praha/byethrow";
import { Request, Response } from "express";
import ConflictException from "../exceptions/conflictExceptions.js";
import UserServiceProvider from "../services/userServices.js";
import { errorResponse } from "../utils/errors.js";
import sendResponse from "../utils/sendResponse.js";
import { validateRequest } from "../validations/configuration.js";

const userServices = new UserServiceProvider();

class AuthHandlers {
    createUserHandlers = async(req : Request , res : Response)=>{
        const reqBody = req.body;
        const result = await Result.pipe(
            validateRequest("users:add", reqBody,  "User data validation failed"),
            Result.andThen(async (userData)=>{
                const userResult = await userServices.getUserByEmail(userData.email);
                if(Result.isSuccess(userResult)){
                    if(userResult.value){
                        return Result.fail(new ConflictException("Email already exists"));
                    }
                }
                return Result.succeed(userData);
            }),
            Result.andThen((userData) => userServices.createUser(userData))
        )
        if(Result.isFailure(result)){
            return errorResponse(res , result.error);
        }
        sendResponse(res ,  201 , "User created successfully" ,  result.value);
    }
}

export default AuthHandlers;