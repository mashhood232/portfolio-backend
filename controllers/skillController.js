
const Skill = require('../models/Skill');

exports.getAllSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

exports.createSkill = async (req, res) => {
  const newSkill = new Skill(req.body);
  await newSkill.save();
  res.status(201).json(newSkill);
};
