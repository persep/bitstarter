var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var infile = "index.html"; 
var readfile = fs.readFileSync(infile);
app.get('/', function(request, response) {
  response.send(readfile.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
