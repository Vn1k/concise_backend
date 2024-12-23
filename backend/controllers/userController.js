const { users } = require('../models');

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newUser = await users.create({name, email, phone, address})
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      const usersList = await users.findAll();
      res.status(200).json(usersList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  