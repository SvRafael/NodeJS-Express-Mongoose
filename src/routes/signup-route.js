const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
//Chamar controller signup

router.post("/", userController.userRegister);

module.exports = router;