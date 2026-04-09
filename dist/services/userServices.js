import { Result } from "@praha/byethrow";
import { userModel } from "../db/models/user.js";
import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
class UserServiceProvider {
    async createUser(userData) {
        return Result.try({
            async try() {
                const newUser = new userModel(userData);
                const savedUser = await newUser.save();
                return savedUser;
            },
            catch() {
                return new InternalServerExceptions("Failed to save data");
            }
        });
    }
}
export default UserServiceProvider;
