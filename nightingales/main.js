let mySound;

let poem = ['gentle blood', 'scything grasses', 'a calm sigh of relief upends into flight', 'dark crevice underneath dusty pew emanating incense, burning amber crusted iris', 'every stop pulled in an organ']
let div1, div2, div3, div, div4, div5;
let img1, img2, img3, img4;

let counter = 0;

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('nightingales.mp3');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('iloveyou');

    background(0);

    if (counter == 0) {
        div1 = createDiv(poem[0]);
        div1.center();
        div1.style('font-size', '32px');
        div1.style('color', 'white');
        div1.style('width', '1000px');
        div1.position(random(300, windowWidth-500), random(500, windowHeight-500));
    }

}

function draw() {
    background(0);
    mySound.loop();


    if (counter > 8){
        background(0);
    }
}

function mouseClicked() {
    counter++;

    background(0);

    if (counter == 0) {
        div1.style('display', 'block');
        div1 = createDiv(poem[0]);
        div1.center();
        div1.style('font-size', '32px');
        div1.style('color', 'white');
        div1.style('width', '1000px');
        div1.position(random(300, windowWidth-500), random(500, windowHeight-500));
    }

    if (counter == 1) {
        background(0);
        div1.style('display', 'none');
        div2 = createDiv(poem[1]);
        div2.center();
        div2.style('font-size', '32px');
        div2.style('color', 'white');
        div2.style('width', '1000px');
        div2.position(random(500, windowWidth-500), random(500, windowHeight-500));
    }

    if (counter == 2){
        background(0);
        div2.style('display', 'none');
        img1 = createImg(
            'images/001.png',
            'i love you'
          );
          img1.position(0,0);
          img1.style('width', '100%')
    }

    if (counter == 3) {
        background(0);
        img1.style('display', 'none');
        div3 = createDiv(poem[2]);
        div3.center();
        div3.style('font-size', '32px');
        div3.style('color', 'white');
        div3.style('width', '400px');
        div3.position(random(500, windowWidth-1000), random(500, windowHeight-500));
    }

    if (counter == 4){
        background(0);
        div3.style('display', 'none');
        img2 = createImg(
            'images/002.png',
            'i love you'
          );
          img2.position(0,0);
          img2.style('width', '100%')
    }

    if (counter == 5) {
        background(0);
        img2.style('display', 'none');
        div4 = createDiv(poem[3]);
        div4.center();
        div4.style('font-size', '32px');
        div4.style('color', 'white');
        div4.style('width', '400px');
        div4.position(random(500, windowWidth-1000), random(500, windowHeight-500));
    }

    if (counter == 6){
        background(0);
        div4.style('display', 'none');
        img3 = createImg(
            'images/003.png',
            'i love you'
          );
          img3.position(0,0);
          img3.style('width', '100%')
    }

    if (counter == 7) {
        background(0);
        img3.style('display', 'none');
        div5 = createDiv(poem[4]);
        div5.center();
        div5.style('font-size', '32px');
        div5.style('color', 'white');
        div5.style('width', '400px');
        div5.position(random(500, windowWidth-1000), random(500, windowHeight-500));
    }

    if (counter == 8){
        background(0);
        div5.style('display', 'none');
        img4 = createImg(
            'images/004.png',
            'i love you'
          );
          img4.position(0,0);
          img4.style('width', '100%')
    }

    if (counter > 8){
        counter = 0;
        background(0);
        img4.style('display', 'none');
    }

    console.log(counter)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}