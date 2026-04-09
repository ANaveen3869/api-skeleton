import { Result } from "@praha/byethrow";
import { Request, Response } from "express";
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
            Result.andThen((UserData)=>{
                return userServices.createUser(UserData);
            })
        )
        if(Result.isFailure(result)){
            return errorResponse(res , result.error);
        }
        sendResponse(res ,  201 , "User created successfully" ,  result.value);
    }
}

export default AuthHandlers;