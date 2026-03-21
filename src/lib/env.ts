import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  KIOSK_API_URL: z.string().url().optional(),
});

const _env = {
  NODE_ENV: process.env.NODE_ENV,
  KIOSK_API_URL: process.env.KIOSK_API_URL,
};

const parsed = envSchema.safeParse(_env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid environment variables:\n${JSON.stringify(parsed.error.format(), null, 2)}`
  );
}

export const env = parsed.data;
