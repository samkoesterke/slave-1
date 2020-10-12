// ******************************************************************
// ******************************************************************
// IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT? by Sam Koesterke s3663521
// ******************************************************************
// ******************************************************************

// 80% of all knowledge has come from 'The Coding Train' by Daniel Shiffman. 
// This includes 'for' loops, 'while' loops, arrays, image procressing and random walkers

// Thanks to Jinni for showing me how to add a starting menu for the sketch
let mode;

let walkers = [];
let walkerCount = 2800;
let randImg;

let randCol;

let hagrid 
let images = [];
function preload() {
  for (let i = 0; i < 6; i++) {
    images[i] = loadImage('data/rug'+i+'.png');
  }
  hagrid = loadFont('typeface/Hagrid.otf');
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  textFont(hagrid);
  background(200);
  //imageMode (LEFT);

  //Thanks Karen for the text tip
  fill(0);
  textSize(windowWidth/26, windowHeight/26);
  text('IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT?', 7, 50);
  textAlign(LEFT);
  textSize(windowWidth/126, windowHeight/126);
  text('What gives an image significance & what makes an artefact an artefact?\n\n\nThese tapestries consist of a range of pictures sourced from Google Images using a randomized 4 digit code. They are simultaneously meaningless & meaningful, they have outlived their purpose & usefulness, they are long forgotten; they are digital artefacts uncovered by chance but repurposed by design.\n\nOnce the tapestry has finished weaving, take a screenshot, draw it, trace it, destroy it, bury it under the algorithm, push it back out into the ether. A circular economy of insignificant images. There are 6 tapestries in total; refresh your browser to load a new one.\n\nMade using typefaces by:\n-Lena Weber: (AT)lenaweber404\n-Ollie Schwan: (AT)ollieschwandesign\n-Edie Johnston: (AT)plasticine9\n\nBy Sam Koesterke: (AT)___samlinford\nSlave 2 The Algorithm—2020\n\n\n\n\n\nPress ENTER to begin\n\n\n\n\n\n\n\n\n\n\n', 20, 70, 240, 700);

  // this is the 'for loop' which initializes walker threads
  for (let i = 0; i < walkerCount; i++) {
    walkers[i] = new Walker();
  }


  //Border boxes
  noFill();
  stroke(0);
  rect(270, 60, windowWidth-300, windowHeight-90);
  rect(10, 60, 260, windowHeight-90);


  //Thanks to Karen for the help
  randImg = floor(random(0, 6));

  //This controls the speed of the sketch
  frameRate(20);
}


function draw() { 
  if (mode==0) {
  }

  if (mode==1) {
    fill(140);
    stroke(200);
    text('weaving in progress...', 20, 80);
    
    for (let i = 0; i < walkerCount; i++) {
      walkers[i].move();
      walkers[i].show();
    }
    
  }
}


function keyPressed() {
  if (keyCode===ENTER) {
    mode = 1;
    fill(200);
    noStroke();
    rect(18, 60.5, 261, windowHeight-91);
  }
}


// ******************************************************************
// ******************************************************************
// WALKER CLASS
// ******************************************************************
// ******************************************************************

class Walker {
  constructor() {
    this.x = random(windowWidth/20, windowWidth/6); // starting position of the threads on the x axis
    this.y = random(800); // starting position of the threads on the y axis
  }


  move() {
    var r = random(1);
    if (r < 0.5) {
      this.x++;
    } else if (r < 0.76) {
      this.y++;
    } else {
      this.y--;
    }
  }


  show() {
    var col = images[randImg].get(this.x-windowWidth/7, this.y-25);
    stroke(col);
    strokeWeight(1);
    point(this.x, this.y);
  }
} 
