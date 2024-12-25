const { users, userGroup, groups } = require("../models");

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newUser = await users.create({ name, email, phone, address });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    const [updated] = await users.update(
      { name, email, phone, address },
      {
        where: { id },
      }
    );
    if (!updated) {
      return res.status(404).json({ message: "User not found: " });
    }
    const updatedUser = await users.findOne({ where: { id } });
    return res
      .status(200)
      .json({ message: "user updated" + id, user: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await users.destroy({
      where: { id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
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

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

