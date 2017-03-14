var User = require('./userModel.js');
var db = require('../config/config.js');



module.exports = {
	signin: function(req, res, next) {
		console.log(req.body)
		db.select().from('users')
			.where('email', req.body.email)
			.then(function(user) {
				if (!user) {
					res.send('No user!');
				}
				else {
					res.send('Found you!')
				}
			})

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
			console.log('got a response! ', response)
			res.send(response);
		})
	}
}