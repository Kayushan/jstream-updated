import { createClient } from '@supabase/supabase-js';
import { env } from '@/env.mjs';

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SupabaseClient = typeof supabase; 