var db = require('../config/config.js');
var bcrypt = require('bcrypt-nodejs');

// var User = db.db.Model.extend({
// 	tableName: 'users',


// })

module.exports = {
	getUsers: function(callback) {
		db.select().from('users')
		.then(function(users) {
			callback(users);
		}).catch(function(err) {
			console.error(err);
		})
	}
}