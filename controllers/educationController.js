
const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  const education = await Education.find();
  res.json(education);
};

exports.createEducation = async (req, res) => {
  const newEdu = new Education(req.body);
  await newEdu.save();
  res.status(201).json(newEdu);
};
