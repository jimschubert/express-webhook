var express = require('express');
var app     = express();
var port    = process.env.PORT || 8082;
var bodyParser = require('body-parser');

app.use(bodyParser());

// Dummy to test the server.
//
app.get('/', function(req, res) {
    console.log(req.body);
    res.send('Something!??');  
});

app.post('/webhook', function(req, res) {
  // do something here
  console.log(req.body);
  res.json({ message: 'success' });
});

app.listen(port);

console.log('Express server listening on port ' + port);
