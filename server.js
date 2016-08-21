var http = require('http');
var express = require('express');
var port = 3000;
var app = express();
var server = http.createServer(app);

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('Private route hit!');
    next();
  },
  logger: function (req, res, next) {
    var reqDate = new Date().toString();
    console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + reqDate);
    next();
  }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || port, process.env.IP || "0.0.0.0", function(){
  console.log('Express server started on port ' + port + '!');
});
