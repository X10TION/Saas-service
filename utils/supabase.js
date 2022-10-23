

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://znfkujtwlejfezjbnbxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZmt1anR3bGVqZmV6amJuYnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0Mzc5OTYsImV4cCI6MTk4MjAxMzk5Nn0.NzkLpAV50FKVvLZGNAHsp7eLN2NTSIlf2hKjzzUKe9k'
export const supabase = createClient(supabaseUrl, supabaseKey)