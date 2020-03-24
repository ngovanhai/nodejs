var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    })
}

module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchdUsers = db.get('users').filter(function(user) {
        return user.name.indexOf(q) !== -1;
    });

    res.render('users/index', {
        users: matchdUsers
    });
}
module.exports.create = function(req, res) {
    res.render('users/create');
}
module.exports.get = function(req, res) {
    var id = req.params.id;

    var user = db.get('users').find({ id: id }).value();

    res.render('users/view', {
        user: user
    });
}
module.exports.postcreate = (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    // thêm bản ghi vào bảng users 
    res.redirect('');
    // quay lại trang users
}