var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io');

server.listen(8080, function() {
        console.log('server listening');
        });

app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
});

