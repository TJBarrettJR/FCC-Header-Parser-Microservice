// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.enable('trust proxy');

app.get('/whoami', function(req, res) {
  res.status(200).json({ "ipaddress": req.ip,"language": req.acceptsLanguages()[0],"software": req.get('user-agent').match(/\(([^\)]+)\)/)[1] })
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
