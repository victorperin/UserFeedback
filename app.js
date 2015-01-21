var express = require('express');
var app = express();



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('UserFeedback running at http://%s:%s', host, port);

});

app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.use('/css',express.static(__dirname+'/public/css'));
app.use('/img',express.static(__dirname+'/public/img'));
app.use('/js',express.static(__dirname+'/public/js')); 