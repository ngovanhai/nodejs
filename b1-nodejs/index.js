var express = require('express');

var userRouter = require('./router/user.router');

var port = 3000;

var app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    //thêm 2 dòng lệnh trên để sử dụng req.body
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', {
    name: 'hai',
}));

app.use('/users', userRouter);
// sau đuôi users sẽ thực hiện gọi các usersRouter

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});