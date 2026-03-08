const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  'https://kqalvxeigcevkxmgqgcf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYWx2eGVpZ2Nldmt4bWdxZ2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTY5MjIsImV4cCI6MjA4ODUzMjkyMn0.xcwZXK_mKWeO10RBMh3KXPRkxmcoH1zI2OJW4CTY6FQ'
);

module.exports = supabase;
