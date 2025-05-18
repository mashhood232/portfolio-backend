
const express = require('express');
const router = express.Router();
const { getAllExperience, createExperience } = require('../controllers/experienceController');

router.get('/', getAllExperience);
router.post('/', createExperience);

module.exports = router;
