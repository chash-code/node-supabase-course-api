const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');
const validateEnrollment = require('../middleware/validateEnrollment');

// Route 1: GET /courses - Get all courses
router.get('/courses', async (req, res) => {
  const { data, error } = await supabase.from('courses').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Route 2: POST /enroll - Enroll a student
router.post('/enroll', validateEnrollment, async (req, res) => {
  const { student_name, course_id } = req.body;
  const { data, error } = await supabase
    .from('enrollments')
    .insert([{ student_name, course_id }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

// Route 3: GET /courses/:id/enrollments - Get enrollments for a course
router.get('/courses/:id/enrollments', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('course_id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;
