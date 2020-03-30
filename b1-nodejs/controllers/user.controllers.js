var md5 = require('md5');

var db = require('../db');

var shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchdUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
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

module.exports.delete = function(req, res) {
    var id = req.params.id;
    db.get('users')
        .remove({ id: id })
        .write()
    res.redirect('/users')
}

module.exports.postcreate = (req, res) => {
    req.body.password = md5(req.body.password);
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    // thêm bản ghi vào bảng users 
    res.redirect('/users');
    // quay lại trang users
}