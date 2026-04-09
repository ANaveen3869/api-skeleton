import mongoose from "mongoose";
import envData from "../env.js";
const dbUrl = envData.DB_URL;
const dbCon = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Db connected successfully");
    }
    catch (err) {
        console.log("Db connection failed");
        console.error(err);
    }
};
export default dbCon;
