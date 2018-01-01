var express = require('express');
var app = express();

app.get('/', function(req, res){
  var message = process.env.HELLO;
  if (typeof(message) == "undefined") {
  	message = "World"
  }
  res.send('Hello WEBHOOK' + message);
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 5000;
server = app.listen(port);

console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
