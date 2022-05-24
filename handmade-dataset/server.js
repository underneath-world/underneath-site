var express = require ('express');

var app = express();
var server = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log('new connection: ' + socket.id);

    socket.on('mouse', mouseMsg)

    function mouseMsg(data){

        socket.broadcast.emit('mouse', data)
        //include all sockets including yourself
        //io.sockets.emit('mouse',data);
        console.log(data);
    }
    
    socket.on('disconnect', () => console.log('Client disconnected'));
}

console.log("socket server is running")