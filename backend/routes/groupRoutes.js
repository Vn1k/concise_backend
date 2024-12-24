const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router.post("/group/create", groupController.createGroup);

module.exports = router;
