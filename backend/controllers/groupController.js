const { groups, UserGroup, users } = require("../models");

exports.getAllGroups = async (req, res) => {
  try {
    const groupsList = await groups.findAll({
      include: {
        model: users,
        attributes: ["id", 'name','email', 'phone', 'address'],
        through: UserGroup,
      },
    });
    res.status(200).json(groupsList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await groups.findOne(
      { where: { id },
        include: [{
          model: users,
          through: UserGroup,
          attributes: ['id', 'name', 'email', 'phone', 'address']
        }]
      });
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

exports.addMemberToGroup = async (req, res) => {
  try {
    const { groupId, userId } = req.params;
    const newMember = await UserGroup.create({
      user_id: userId,
      group_id: groupId
    });
    res.status(201).json({ message: "User added to group", newMember });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeMemberFromGroup = async (req, res) => {
  try {
    const { groupId, userId } = req.params;
    await UserGroup.destroy({
      where: {
        user_id: userId,
        group_id: groupId
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};