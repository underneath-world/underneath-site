var express = require ('express');

var app = express();
// var server = app.listen(3000);
var server = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
console.log("socket server is running")

const users = [];
var user= -1;

io.sockets.on('connection', newConnection)



function newConnection(socket){
    user++;

    users.push({
        userID: socket.id,
        user: user
    });
    console.log('new connection: ' + socket.id);

      socket.emit("users", users);
      console.log(users);
      
      // ...

    
    io.to(socket.id).emit('private', 'hi');

    socket.on('mouse', mouseMsg)

    function mouseMsg(data){

        socket.broadcast.emit('mouse', data)
        //include all sockets including yourself
        //io.sockets.emit('mouse',data);
        console.log(data);

    }
    
    
    socket.on('disconnect', disconnect)
    
    function disconnect(){
        console.log('Client disconnected');
    }
    
    
}


