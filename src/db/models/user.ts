import mongoose from "mongoose";
import timestamps from "./helper.js";
const { Schema } = mongoose;

const user = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required: true
    },
    ...timestamps
})

export const User = mongoose.model("User" ,user)
