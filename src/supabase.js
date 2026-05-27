import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ozfznizncvgmxogapkxd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96ZnpuaXpuY3ZnbXhvZ2Fwa3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMTgwMjYsImV4cCI6MjA5NDg5NDAyNn0.y4XfYjqpY0mmk0dOjNxXGpbLmZnbnwb_Tqj5Ve79AwI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);