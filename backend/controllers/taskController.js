const { task, users } = require("../models");

exports.createTask = async (req, res) => {
  try {
    const { name, deadline, user_id } = req.body;

    const assignedTask = await task.findOne({
      where: { name: name, user_id: user_id },
    });

    if (assignedTask) {
      return res.status(400).json({ message: "Task already assigned to user" });
    }
    const newTask = await task.create({ name, deadline, user_id });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await task.findAll({
      where: { user_id: userId },
      include: [
        {
          model: users,
          attributes: ["id", "name", "email", "phone", "address"],
        },
      ],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await task.findAll({
      include: [
        {
          model: users,
          attributes: ["id", "name", "email", "phone", "address"],
        },
      ],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
