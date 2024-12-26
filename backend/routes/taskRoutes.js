const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/task", taskController.getAllTasks);
router.get("/task/:id", taskController.getTaskById);
router.post("/task/create", taskController.createTask);
router.put("/task/update/:id", taskController.updateTask);
router.delete("/task/delete/:id", taskController.deleteTask);


module.exports = router;
