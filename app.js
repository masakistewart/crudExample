var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoutes = require('./controllers/students');
var morgan = require('morgan');
var methodOverride = require('method-override')
app.get('/',function(req,res) {
  res.redirect('/students');
 });

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/students', userRoutes);
app.listen(3000, function() {
	console.log('server on port 3000');
});