const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/create", userController.createUser);
router.put("/user/update/:id", userController.updateUserById);
router.get("/user/:id", userController.getUserById);
router.delete("/user/delete/:id", userController.deleteUserById);
router.get("/users", userController.getAllUsers);
router.get("/users/:id/groups", userController.getGroupsByUserId);
router.get("/users/:id/tasks", userController.getTasksByUserId);

module.exports = router;
