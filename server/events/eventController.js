var Event = require('./eventModel.js');

module.exports = {
	getEvents: function(req, res, next) {
		console.log('getting called')
		Event.getEvents(function(events) {
			if (events) {
				res.send(events);
			}
			else {
				res.send('no event found');
			}
		});
	},

	createEvent: function(req, res, next) {
		Event.createEvent(req.body, function(response) {
			if (response) {
				res.send(response);
			} 
			else {
				res.send('problem saving event');
			}
		})
	}
}
