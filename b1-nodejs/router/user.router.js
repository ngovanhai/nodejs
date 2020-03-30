var express = require('express');

var controller = require('../controllers/user.controllers');
var validate = require('../validate/users.validate');
var multer = require('multer');

var upload = multer({ dest: './public/uploads/' });

var router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create',
    upload.single('avatar'),
    validate.postCreate,
    controller.postcreate
);

module.exports = router;