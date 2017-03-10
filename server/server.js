var express = require('express');

var app = express();

var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'hang',
		charset: 'utf8'
	}
});

var db = require('bookshelf')(knex);

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app, express);

app.listen(8000, function() {
	console.log('listening on port 8000');
})

module.exports = {
	app: app,
	db: db
}