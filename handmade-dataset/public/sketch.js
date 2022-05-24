var socket;

function setup(){
    createCanvas(200,200)
    background(0);
    socket = io.connect('https://damp-stream-62424.herokuapp.com/');
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(255, 0, 255);
    ellipse(data.x, data.y, 60,60);
}

function mouseDragged(){
    console.log("sending: " + mouseX + ", " + mouseY);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 60,60);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);
}

function draw(){

}