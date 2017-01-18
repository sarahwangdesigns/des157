// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing

//Sarah Wang | DES 157 Winter 2016 | Glenda Drew
//click on the banner to reveal general class information in black and white

console.log("Testing Console");

function setup() {
  createCanvas(800, 250);
  background(255);
  cursor(CROSS);
}

function draw() {
  if (mouseOver) {
   background (0);
   fill(255);
   text("DES 157 | Winter 2017 | Glenda Drew", 500, 125);
 } else (mouseOut){
   background (255);
   noStroke();
   fill("cyan");
   rectMode(CENTER);
   rect(400, 125, 800, 250);
   fill(0);
   textSize(48);
   text("Sarah Wang", 85, 135);
 }
}
