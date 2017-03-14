var brcypt = require('brcypt-nodejs');
var jwt = require('jwt-simple');

module.exports = {
	checkAuth: function(req, res, next) {
		var token = req.headers['x-access-token'];
		if (!token) {
			next(new Error('No Token!'));
		} 
		else {
			var user = jwt.decode(token, 'secret');
			User.findOne({email: user.email})
			.then(function(user) {
				if (user) {
					res.send(200);
				}
				else {
					res.send(401);
				}
			})
			.fail(function(err) {
				next(err);
			})
		}
	}
}
