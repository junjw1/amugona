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
var numUsers = 0;
io.on('connection', function (socket) {
	var addedUser = false;

	// send message
	socket.on('send message', function (data) {
		socket.broadcast.emit('send message', data);
	});

	socket.on('add user', function (username) {
		if (addedUser) return;

		socket.username = username;
		numUsers++;
		addedUser = true;

		socket.broadcast.emit('user joined', {
			username: socket.username,
			numUsers: numUsers
		});
	});
});
