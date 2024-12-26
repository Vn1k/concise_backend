const { task, users } = require("../models");

exports.createTask = async (req, res) => {
  try {
    const { name, deadline, user_id } = req.body;

    if (!name || !deadline) {
      return res.status(400).json({ error: "Name and deadline required" });
    }

    const newTask = await task.create({
      name,
      deadline,
      user_id: user_id || null,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, deadline, user_id } = req.body;

    const taskToUpdate = await task.findByPk(id);
    if (!taskToUpdate) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (deadline) updateData.deadline = deadline;
    if (user_id !== undefined) updateData.user_id = user_id || null;

    await taskToUpdate.update(updateData);

    const updatedTask = await task.findOne({
      where: { id },
      include: [
        {
          model: users,
          attributes: ["id", "name", "email", "phone", "address"],
        },
      ],
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToDelete = await task.findByPk(id);

    if (!taskToDelete) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    await taskToDelete.destroy();
    res.status(200).json({ message: "Task berhasil dihapus" });
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

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = await task.findOne({
      where: { id },
      include: [
        {
          model: users,
          attributes: ["id", "name", "email", "phone", "address"],
        },
      ],
      raw: false,
      nest: true,
    });

    if (!taskData) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    res.status(200).json(taskData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
