var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoutes = require('./controllers/students');
var morgan = require('morgan');

app.get('/',function(req,res) {
  res.redirect('/users');
 });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', userRoutes);
app.listen(3000, function() {
	console.log('server on port 3000');
});