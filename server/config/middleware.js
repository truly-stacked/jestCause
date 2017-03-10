var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('../server.js');

var ourTest = db.knex.select().from('users')
.then(function(results) {
	console.log(results);
})


module.exports = function(app, express) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '../../client'));
}