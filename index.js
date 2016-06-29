var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port, function () {
	console.log("server listening ...");
});

// routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// connect
io.on('connection', function (socket) {
	console.log('hello');
});
