import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL_HERE';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY_HERE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type QuoteRequest = {
  id?: string;
  full_name: string;
  company_name: string;
  mobile_number: string;
  whatsapp_number: string;
  customer_type: string;
  city: string;
  product_category: string;
  brand_preference: string;
  quantity_required: string;
  requirement_details: string;
  created_at?: string;
};

export type ContactMessage = {
  id?: string;
  full_name: string;
  business_email: string;
  requirement_type: string;
  message: string;
  created_at?: string;
};
