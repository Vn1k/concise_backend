const { groups } = require("../models");

exports.getAllGroups = async (req, res) => {
  try {
    const groupsList = await groups.findAll();
    res.status(200).json(groupsList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await groups.findOne({ where: { id } });
    if (!group) {
      return res.status(404).json({ message: "group not found" });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createGroup = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const newGroup = await groups.create({ name, desc });
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc} = req.body;
    const [updated] = await groups.update(
      { name, desc},
      {
        where: { id },
      }
    );
    if (!updated) {
      return res.status(404).json({ message: "Group not found: " });
    }
    const updatedGroup = await groups.findOne({ where: { id } });
    return res
      .status(200)
      .json({ message: "user updated" + id, user: updatedGroup });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await groups.destroy({
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