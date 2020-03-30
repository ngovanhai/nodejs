var express = require('express');

var controller = require('../controllers/cart.controlers');

var router = express.Router();

router.get('/add/:productId', controller.addToCart);

router.get('/menucart', controller.cart);

module.exports = router;