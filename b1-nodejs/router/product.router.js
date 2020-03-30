var express = require('express');

var controller = require('../controllers/product.controllers');

var router = express.Router();
router.get('/', controller.index);
router.get('/menucart', controller.cart);
module.exports = router;