// import {SUPABASE_URL, ANON_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://moflwgrjfhqosrmqtgwe.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZmx3Z3JqZmhxb3NybXF0Z3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0NDEwMzYsImV4cCI6MjAwMjAxNzAzNn0.uIybEZs7kIPo3l4jcMIXaY5qlKKGblMTnahRe_hkFtA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase