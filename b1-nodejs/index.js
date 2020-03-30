require('dotenv').config();

console.log(process.env.SESSION_SECRET);
var express = require('express');
var cookieParser = require('cookie-parser');

var userRouter = require('./router/user.router');
var authRouter = require('./router/auth.router');
var productRouter = require('./router/product.router');
var cartRouter = require('./router/cart.router');

var sessionMiddleware = require('./middleware/session.middleware');
var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;

var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    //thêm 2 dòng lệnh trên để sử dụng req.body
app.use(cookieParser('yasghjdgashjfg'));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(sessionMiddleware);

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', {
    name: 'hai',
}));

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
// sau đuôi users sẽ thực hiện gọi các usersRouter

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});