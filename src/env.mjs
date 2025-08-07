import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  VITE_APP_URL: z.string().url().default('http://localhost:3000'),
  VITE_TMDB_TOKEN: z.string().default('dummy_token'),
  VITE_SITE_NAME: z.string().default('Jstream'),
  VITE_TWITTER: z.string().url().optional(),
  VITE_FACEBOOK: z.string().url().optional(),
  VITE_INSTAGRAM: z.string().url().optional(),
  VITE_YOUTUBE: z.string().url().optional(),
  VITE_IMAGE_DOMAIN: z.string().optional(),
  VITE_SUPABASE_URL: z.string().url().default('https://dummy.supabase.co'),
  VITE_SUPABASE_ANON_KEY: z.string().default('dummy_key'),
});

export const env = envSchema.parse({
  NODE_ENV: import.meta.env.MODE,
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
  VITE_TMDB_TOKEN: import.meta.env.VITE_TMDB_TOKEN,
  VITE_SITE_NAME: import.meta.env.VITE_SITE_NAME,
  VITE_TWITTER: import.meta.env.VITE_TWITTER,
  VITE_FACEBOOK: import.meta.env.VITE_FACEBOOK,
  VITE_INSTAGRAM: import.meta.env.VITE_INSTAGRAM,
  VITE_YOUTUBE: import.meta.env.VITE_YOUTUBE,
  VITE_IMAGE_DOMAIN: import.meta.env.VITE_IMAGE_DOMAIN,
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
});
