var db = require('../config/config.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = {
	getUsers: function (callback) {
		db.select().from('users')
			.then(function (users) {
				callback(users);
			}).catch(function (err) {
				console.error(err);
			})
	},

	signin: function(user, callback) {
		db.select().from('users')
			.where({
				email: user.email,
				password: user.password
			})
			.then((logged) => {
				callback("Logged")
			}).catch((err) => {
				callback(err);
			})
	},

	signup: function (user, callback) {
		console.log('user has been created');
		db('users').insert({
			name: user.name,
			email: user.email,
			password: user.password,
			profile_url: user.profile_url
		}).then((inserted) => {
			callback('Signed Up');
		}).catch((err) => {
			callback(err);
		})
	},

	updateUser: function (user, callback) {
		console.log('user has been updated with ', user);
		db('users').where('email', user.email)
			.update({
				profile_url: user.profile_url,
				hang: user.hang
			})
			.then((updated) => {
				callback('updated')
			}).catch((err) => {
				callback(err);
			})
	}

}