const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productsController')

//get /api/products
router.get('/',ProductController.getAllProducts);

//get /api/products/:id
router.get('/:id',ProductController.getProductById);

//post /api/products
router.post('/',ProductController.createProduct);

//PUT /api/products/:id
router.put('/:id',ProductController.updateProduct);

//DELETE /api/products/:id
router.delete('/:id',ProductController.deleteProduct);

module.exports = router;