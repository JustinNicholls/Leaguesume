import * as dotenv from "dotenv";

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export const env: NodeJS.ProcessEnv = process.env;
