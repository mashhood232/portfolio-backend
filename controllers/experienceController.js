
const Experience = require('../models/Experience');

exports.getAllExperience = async (req, res) => {
  const experience = await Experience.find();
  res.json(experience);
};

exports.createExperience = async (req, res) => {
  const newExp = new Experience(req.body);
  await newExp.save();
  res.status(201).json(newExp);
};
