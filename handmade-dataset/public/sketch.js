var socket;

function setup(){
    createCanvas(200,200)
    background(0);
<<<<<<< Updated upstream
    socket = io.connect('http://localhost:3000');
    // socket = io.connect('https://damp-stream-62424.herokuapp.com/');
=======
    socket = io.connect('http://localhost:3000');
>>>>>>> Stashed changes
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

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const thisMoment = Object.fromEntries(data.entries());

    console.log({
        thisMoment
    });

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(thisMoment, null, 2);
    document.querySelector('.results').style.display = "block";
    document.querySelector('.this-moment').style.display = "none";
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function display() {
        window.print();

        socket.on('private', function(msg) {
            alert(msg);
        });
}

