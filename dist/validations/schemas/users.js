import z from "zod";
export const vCreateUserSchema = z.object({
    name: z.preprocess((val) => val === "" ? undefined : val, z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "Name is required";
            }
            return "Invalid name";
        }
    })),
    email: z.preprocess((val) => val === "" ? undefined : val, z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "email is required";
            }
            return "Invalid email";
        }
    })),
    password: z.preprocess((val) => val === "" ? undefined : val, z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return "Password is required";
            }
            return "Invalid password";
        }
    })),
});
