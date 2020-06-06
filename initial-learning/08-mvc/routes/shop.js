const express = require('express');
const path = require('path');
const router = express.Router();

const shopController = require('../controllers/shop');


router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/checkout', shopController.geCheckout);
router.get('/orders', shopController.getOrders);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);

module.exports = router;
