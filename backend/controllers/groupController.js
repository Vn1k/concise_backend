const { groups } = require("../models");

exports.createGroup = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const newGroup = await groups.create({ name, desc });
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
