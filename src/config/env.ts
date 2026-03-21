import { z } from "zod";
import { Logger } from "@/utils/logger";

const logger = new Logger("Config:Env");

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
});

const validateEnv = () => {
  const raw = {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  };

  const parsed = envSchema.safeParse(raw);

  if (!parsed.success) {
    const missingVars = parsed.error.errors.map(err => err.path.join("."));
    logger.error("Invalid environment variables", { error: { missingVars } });
    throw new Error(
      `Invalid environment variables:\n${JSON.stringify(parsed.error.format(), null, 2)}`
    );
  }

  logger.info("Environment variables validated successfully");
  return parsed.data;
};

export const env = validateEnv();
