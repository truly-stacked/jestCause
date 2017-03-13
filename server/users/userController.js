var User = require('./userModel.js');

module.exports = {
	signin: function(req, res, next) {
		User.signin(req.body, (response) => {
			res.send(response);
		})
	},

	signup: function(req, res, next) {
		User.signup(req.body, (response) => {
			res.send(response);
		})
	},

	getUsers: function(req, res, next) {
		User.getUsers(response => res.send(response));
	},

	updateUser: function(req, res, next) {
		User.updateUser(req.body, (response) => {
			res.send(response);
		})
	}
}