const express = require('express')
const app = express()
const port = 3000;

var users = [
    { id: 1, name: 'hai' },
    { id: 2, name: 'hao' },
    { id: 3, name: 'hung' },
]

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => res.render('index', {
    name: 'hai',
}));

app.get('/users', function(req, res) {
    res.render('users/index', {
        users: users
    })
});

app.get('/users/search', (req, res) => {
    var q = req.query.q;
    var matchdUsers = users.filter(function(user) {
        return user.name.indexOf(q) !== -1;
    });

    res.render('users/index', {
        users: matchdUsers
    });
});


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});