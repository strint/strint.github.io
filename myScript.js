function setup(){
  var myCanvas = createCanvas(710, 400);
  myCanvas.parent('p5Container');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
