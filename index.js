var express = require('express');
var sendemail=require('./public/js/sendemail');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;
server.listen(port, function () {
    console.log("server listening ...");
});
// routing
app.use(express.static(__dirname + '/public'));

// connect
var numUsers = 0;
io.on('connection', function (socket) {
    var addedUser = false;
    //boroad.emit 본인 빼고 다른 클라에게 이벤트를 쏜다
    //챗 메시지 전송
    //(챗-3)
    socket.on('send message', function (data) {
        socket.broadcast.emit('send message', data);
    });
    socket.on('add user', function (username) {
        if (addedUser) return;
        socket.username = username;
        numUsers++;
        addedUser = true;
        socket.broadcast.emit('user joined', {
            username: socket.username
            , numUsers: numUsers
        });
        socket.emit('welcome', {
            numUsers: numUsers
        });
    });
    socket.on('disconnect', function () {
        if (addedUser) {
            numUsers--;
            socket.broadcast.emit('user left', {
                username: socket.username
                , numUsers: numUsers
            });
        }
    });
    socket.on('send email', function (email) {
        
        //이메일을 전송합시다. 이메일전송하는.js(sendemail.js)내 function 호출
        //sendemail.sendemailfunc(email); //is not a funtion !!
        sendemail.email(email); //is not a funtion !!
        

    });
});