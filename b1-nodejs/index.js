const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello World! </h1>'));

app.get('/users', (req, res) => res.send('<h1>user list!</h1>'));

app.get('/create', (req, res) => res.send('<h1>Create! </h1>'));


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});