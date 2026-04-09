import express from "express";
import AuthHandlers from "../handlers/authHandlers.js";
const authHandlers = new AuthHandlers();
const authRoutes = express.Router();
authRoutes.post("/sign-up", authHandlers.createUserHandlers);
export default authRoutes;
