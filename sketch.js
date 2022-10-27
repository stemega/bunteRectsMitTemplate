let buff;
let buff_high_rez;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;


/* Effective size of the buffer */
const BUFF_SIZE = 1080;

/* Change the ASPECT RATIO of your sketch with these */
const BUFF_WID_MOD = 1;
const BUFF_HEI_MOD = 1;

const BUFF_WID = BUFF_SIZE * BUFF_WID_MOD
const BUFF_HEI = BUFF_SIZE * BUFF_HEI_MOD

const CANVAS_PIXEL_DENSITY = 1
const BUFF_PIXEL_DENSITY = 1
const BUFF_HR_PIXEL_DENSITY = 4

let scaleFactor;

function setup(){
  w = min(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100);
  blendMode(DIFFERENCE);
  

  wx = w * BUFF_WID_MOD
  wy = w * BUFF_HEI_MOD

  createCanvas(wx, wy)
  pixelDensity(CANVAS_PIXEL_DENSITY)

  buff = createGraphics(BUFF_WID, BUFF_HEI)
  buff.pixelDensity(BUFF_PIXEL_DENSITY)

  buff_high_rez = createGraphics(BUFF_WID, BUFF_HEI)
  buff_high_rez.pixelDensity(BUFF_HR_PIXEL_DENSITY)
	
	scaleFactor = BUFF_SIZE/w

  setupBufferStuff()
}

function draw(){
  drawToBuffer(buff)
  image(buff, 0, 0, wx, wy)
}

function windowResized(){
  w = min(windowWidth, windowHeight)

  wx = w * BUFF_WID_MOD
  wy = w * BUFF_HEI_MOD
	
	scaleFactor = BUFF_SIZE/w

  resizeCanvas(wx, wy)
  image(buff, 0, 0, wx, wy)
}

function exportBuffer(b){
  save(b, 'img.png')
}

// 1 key exports main buffer | 2 key exports high rez buffer
function keyPressed(){
  if(keyCode === 49){
    drawToBuffer(buff)
    exportBuffer(buff)
  }else if(keyCode === 50){
    drawToBuffer(buff_high_rez)
    exportBuffer(buff_high_rez)
  }
}



/* Things you need to run once, like initialising classes for example */
let backgroundColor;
function setupBufferStuff(){
  backgroundColor = (360)
  farb = random(0, 10);  

}

/* Everything you want to draw to the graphics buffer goes here */
function drawToBuffer(b){
  



  
  rechteckeVertikal();

  rechteckeRechts();

  rechteckeLinksUnten();
}

function rechteckeVertikal() {
  if (farb < 5) {
  fill(random(0, 360), 100, 100, 100);}
  else {
    fill(random(0, 360));
  }
  print(farb);
  push();
  rotate(radians(0));
  rect(x1, y1, 2, height);
  pop();
  x1 = x1 + 2;  
}
function rechteckeRechts() {
  fill(random(0, 360), 100, 100, 100);
  push();
  rotate(radians(45));
  rect(x2, y2, 2, -height);
  pop();
  x2 = x2 + 2;  
}
function rechteckeLinksUnten() {
  fill(random(0, 360), 100, 100, 100);
  //push();
  rotate(radians(45));
  translate(0, 100);
  rect(x3, y3, 2, height);
  //pop();
  x3 = x3 + 2;  
}

  
