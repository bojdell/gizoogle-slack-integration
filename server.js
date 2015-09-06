var express = require('express');
var G = require('gizoogle');
var bodyParser = require('body-parser');
var util = require('util');
var PORT = 9002;

var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); // to support URL-encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/gizoogle', function (req, res) {
	console.log('GET: ' + req)
	G.string('hello world - this is my message, yo', function(error, translation) {
		res.send(translation);
	});
});

app.post('/gizoogle', function (req, res) {
	console.log('POST: ' + req.body.text)
	G.string(req.body.text, function(error, translation) {
		res.send(translation);
	});
});

console.log('Server started on port ' + PORT)
app.listen(PORT);