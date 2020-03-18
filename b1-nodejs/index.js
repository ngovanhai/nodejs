const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => res.render('index', {
    name: 'hai',
}));

app.get('/users', (req, res) => res.render('users', {
    users: [
        { id: 1, name: 'hai' },
        { id: 2, name: 'hao' },
        { id: 3, name: 'hung' },
    ]
}));

app.get('/create', (req, res) => res.send('<h1>Create! </h1>'));


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});