var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;

var numUsers = 0;

server.listen(port, function () {
	console.log("server listening ...");
});

// routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// connect
io.on('connection', function (socket) {
	socket.on('add user', function (data) {
		socket.username = data;		// 이름 저장
		numUsers++;

		io.emit('user joined', {
			username: socket.username,
			numUsers: numUsers
		});
	});
});
