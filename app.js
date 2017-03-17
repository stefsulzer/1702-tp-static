var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');


var app = express();
var routes = require('./routes/index');

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true });


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/trips', routes);
// Can't get anything until there is a get for '/' set up for app or router

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
	console.error(err);
	res.status(500);
	res.render('error', { err: err.status, errMessage: err.message, errStack : err.stack});
});

app.listen(3000, function(){
	console.log('Listening on 3000');
});
