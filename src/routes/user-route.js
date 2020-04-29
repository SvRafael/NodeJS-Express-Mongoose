const express = require('express')
var router = express.Router(); //Interceptacao das rotas
const userController = require('../controllers/user-controller')

router.post("/", userController.post);

router.get("/", userController.get);

router.get("/:userId", userController.getById);

router.put("/:userId", userController.put);

router.delete("/:userId", userController.delete);

router.post("/login", userController.login);

module.exports = router;