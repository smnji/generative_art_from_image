let img;
let cnv;
function keyPressed(){
  if (key === 's'){
    saveCanvas("portrait.jpg");
  }
}
function preload(){
	img=loadImage('assets/input.jpeg');
}
//run only once
function setup() {
  cnv=createCanvas(img.width, img.height);
  let newCnvX=(windowWidth - img.width)/2;
  let newCnvY=(windowHeight - img.height)/2;
  cnv.position(newCnvX,newCnvY);
  // access pixel info
  for(let col=0;col<img.width;col+=5){
     for(let row=0;row<img.height;row+=5){
       let xPos=col;
       let yPos=row;
       let c=img.get(xPos,yPos);
       push();
       translate(xPos,yPos);
       rotate(radians(random(360)))
       noFill();
       strokeWeight(random(3));
       stroke(color(c));
curve(xPos,yPos,sin(xPos)*random(50),cos(yPos)*sin(xPos)*random(50),random(5),random(5),cos(xPos)*sin(yPos)*random(10),cos(yPos)*sin(xPos)*10);
       pop();
     }
  }
}

