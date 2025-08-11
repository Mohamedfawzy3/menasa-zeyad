import { createClient } from '@supabase/supabase-js';

const supabaseUrl ="https://pbekewbfkxdiwajvohqt.supabase.co" ;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZWtld2Jma3hkaXdhanZvaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjY2MTYsImV4cCI6MjA2ODYwMjYxNn0.O_6ISq63GeIwkA0_P2jUAJZVIqeLibdTo_SshCiyRak";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);