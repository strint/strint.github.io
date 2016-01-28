function setup(){
  var myCanvas = createCanvas(300, 200);
  myCanvas.parent('p5Container');
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 40, 40);
  } 
  //else {
  //  fill(255);
  //}
}
