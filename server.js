var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var path = 'c:/devaus/mscourse/';//TODO

app.set('views', path + 'server/views');
app.set('view engine', 'jade');


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