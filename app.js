var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');

var app = express();

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true });


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
	console.error(err);
	res.status(500);
	res.render(err, err.stack, err.message);
});

app.listen(3000, function(){
	console.log('Listening on 3000');
});
