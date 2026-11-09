import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// null when env vars are missing: forms then show their error state instead of crashing the page.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
