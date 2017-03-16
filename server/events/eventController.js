var Event = require('./eventModel.js');

module.exports = {
	getEvents: function(req, res, next) {
		console.log('getting called ', req.headers)
		Event.getEvents(req.headers.email, function(events) {
			if (events) {
				res.send(events);
			} else {
				next(new Error('no event found'));
			}
		});
	},

	getHostedEvents: function(req, res, next) {
		Event.getHostedEvents(req.headers.email, function(events) {
			if (events) {
				res.send(events);
			} else {
				next(new Error('no events found'));
			}
		});
	},

	createEvent: function(req, res, next) {
		Event.createEvent(req.body, function(response) {
			if (response) {
				res.send(response);
			} 
			else {
				next(new Error('problem saving event'));
			}
		})
	}
}
