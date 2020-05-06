const express = require('express')
var router = express.Router(); //Interceptacao das rotas
const productController = require('../controllers/product-controller');
// var Produto = require("../app/models/product");
const autorizacao = require('../services/auth-service')

router.post("/", productController.post);

router.get("/", autorizacao.authorize,productController.get);

router.get("/:productId", productController.getById);

router.put("/:productId", productController.put);

router.delete("/:productId", productController.delete);

module.exports = router;