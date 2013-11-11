var express = require('express');
var app = express();
app.use(express.logger());

// To load ccs files from local folder
// http://erichonorez.wordpress.com/2013/02/04/a-basic-web-server-with-node-js-and-express/
app.use(express.static(__dirname )); // To load ccs files from local folder

var fs = require('fs');
var infile = "index.html"; 
var readfile = fs.readFileSync(infile);
app.get('/', function(request, response) {
  response.send(readfile.toString());
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
