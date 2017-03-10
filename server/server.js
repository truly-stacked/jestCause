var express = require('express');
var app = express();
var db = require('./config/config.js')


require('./config/middleware.js')(app,express);
require('./config/routes.js')(app, express);

app.listen(8000, function() {
	console.log('listening on port 8000');
})

module.exports = app;