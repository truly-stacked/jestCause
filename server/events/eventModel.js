var db = require('../config/config.js');

module.exports = {
	getEvents: function(callback) {
		db.select().from('events')
		.then(function(events) {
			return callback(events)
		}).catch(function(err) {
			console.error(err);
		})
	},

	createEvent: function(event, callback) {
		console.log('inside the model with this event: ', event)
		db('events').insert({
			where: event.where,
			when: event.when,
			description: event.description
		}).then(function(inserted) {
			callback(inserted);
		}).catch(function(err) {
			console.error(err);
		})
	}
}

