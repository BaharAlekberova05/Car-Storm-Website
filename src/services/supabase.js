import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uofezoujczrlgjohsldk.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZmV6b3VqY3pybGdqb2hzbGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5Mjg0MjUsImV4cCI6MjA1NjUwNDQyNX0.Djgj2W-eO1Rl6RI9KVIdMJaj3pHw_Pj8P5h7S-xzy1w";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
