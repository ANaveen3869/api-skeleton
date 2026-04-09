import z from "zod";
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.coerce.number().positive().default(3000),
    HOST: z.string().default("localhost"),
    LOG_LEVEL: z.enum(["error", "warn", "info", "debug"]).default("info"),
    DB_URL: z.string()
});
let envData;
try {
    envData = envSchema.parse(process.env);
}
catch (error) {
    throw new Error("Invalid environment configuration");
}
export default envData;
