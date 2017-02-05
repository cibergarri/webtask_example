var express = require('express');
var Webtask = require('webtask-tools');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// expose this express app as a webtask-compatible function

module.exports = Webtask.fromExpress(app);

/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/