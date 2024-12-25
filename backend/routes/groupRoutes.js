const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router.get("/groups", groupController.getAllGroups);
router.post("/group/create", groupController.createGroup);
router.get("/group/:id", groupController.getGroupById);
router.put("/group/update/:id", groupController.updateGroupById);
router.delete("/group/delete/:id", groupController.deleteGroupById);
router.post("/group/:groupId/users/:userId", groupController.addMemberToGroup);
router.delete("/remove-member-from-group/:groupId/users/:userId", groupController.removeMemberFromGroup);

module.exports = router;
