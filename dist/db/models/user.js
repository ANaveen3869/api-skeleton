import mongoose from "mongoose";
import timestamps from "./helper.js";
const { Schema } = mongoose;
const user = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    ...timestamps
});
export const userModel = mongoose.model("User", user);
