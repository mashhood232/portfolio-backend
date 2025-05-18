
const express = require('express');
const router = express.Router();
const { getAllEducation, createEducation } = require('../controllers/educationController');

router.get('/', getAllEducation);
router.post('/', createEducation);

module.exports = router;
