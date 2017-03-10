var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app, express) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlEncoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '../../client'));
}