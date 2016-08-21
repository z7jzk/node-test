var http = require('http');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || port, process.env.IP || "0.0.0.0", function(){
  console.log('Express server started on port ' + port + '!');
});
