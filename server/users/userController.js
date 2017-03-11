var User = require('./userModel.js');


module.exports = {
	signin: function(user) {

	},

	signup: function(user) {

	},

	getUsers: function(req, res, next) {
		User.getUsers(response => res.send(response));
	},

	updateUser: function(user) {

	}
}