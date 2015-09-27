var express = require('express');
var app = express();

//to provide static files to web browser
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/api/convert', function(req, res) {
	var
		celsius = parseFloat(req.query.celsius),
		ConvertService = require('./app/ConvertService'),
		convertIndex = 0;
	
	convertIndex = ConvertService.getIndex(celsius);
	
	res.send(convertIndex.toString());
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});