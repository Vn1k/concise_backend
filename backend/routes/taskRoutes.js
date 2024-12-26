const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/task", taskController.getAllTasks);
router.post("/task/create", taskController.createTask);
router.get("/task/user/:userId", taskController.getTasksByUser);

module.exports = router;
