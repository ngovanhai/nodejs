module.exports.postCreate = function(req, res, next) {
    var errors = [];
    if (!req.body.name) {
        errors.push('name is requied');
    }
    if (!req.body.phone) {
        errors.push('phone is requied');
    }
    if (errors.length) {
        res.render("users/create", {
            errors: errors,
            values: req.body
        });
        return;

    }
    next();
}