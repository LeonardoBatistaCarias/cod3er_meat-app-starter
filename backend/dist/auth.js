"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var jwt = require("jsonwebtoken");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = user_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-password');
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    console.log(user);
    var dbUser = user_1.users[user.email];
    console.log(user.email);
    return dbUser !== undefined && dbUser.matches(user);
}
