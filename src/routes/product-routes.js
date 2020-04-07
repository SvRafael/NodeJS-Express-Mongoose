const express = require('express')
var router = express.Router(); //Interceptacao das rotas
const productController = require('../controllers/product-controller');
// var Produto = require("../app/models/product");

router.post("/", productController.post);

router.get("/", productController.get);

router.get("/:productId", productController.getById);

router.put("/:productId", productController.put);

router.delete("/:productId", productController.delete);

module.exports = router;