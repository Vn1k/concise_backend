const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/create', userController.createUser);
router.put('/user/update/:id', userController.updateUser);
router.get('/users', userController.getAllUsers);

module.exports = router;