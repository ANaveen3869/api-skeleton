import { Result } from "@praha/byethrow";
import { User } from "../db/models/user.js";
import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
import { NewUser } from "../interfaces/user.js";

class UserServiceProvider {
    async createUser(userData: NewUser) {
        return Result.try({
            async try() {
                const newUser = new User(userData);
                const savedUser = await newUser.save();
                return savedUser;
            },
            catch() {
                return new InternalServerExceptions("Failed to save data");
            }
        })
    }
    async getUserByEmail(email: string) {
        return Result.try({
            async try() {
                const user = await User.findOne({ email });
                return user;
            },
            catch() {
                return new InternalServerExceptions("Failed to fetch the data");
            },
        })
    }
}

export default UserServiceProvider;