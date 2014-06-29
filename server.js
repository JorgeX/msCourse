var express = require('express'),
	stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
	return stylus(str).set('filename', path);
}

var currentPath = 'c:/devaus/mscourse/';//TODO
//var bodyParser = require('body-parser') //TODO some json middlewre needed? this shit aint building...
//configure
app.set('views', currentPath + 'server/views');
app.set('view engine', 'jade');
var logger = require('express-logger');
app.use(logger({path: currentPath + 'server/logs'}));
//app.use(bodyParser.json());
app.use(stylus.middleware(
	{
		src: currentPath + '/public',
		compile: compile
	}
	));

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res){
	res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');

/*
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
*/