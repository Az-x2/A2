//adjusts the ball's position
let circleX = 30;
let circleY = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('grey');
  
//Forms shape of tunnel maze
  noFill();
beginShape();
vertex(30, 20);
vertex(475, 20);
vertex(475, 420);
vertex(100, 420);
vertex(100, 150);
vertex(320, 150);
vertex(320, 290);
vertex(240, 290);
endShape();

  noFill();
beginShape();
vertex(475, 480);
vertex(30, 480);
vertex(33, 80);
vertex(400, 80);
vertex(400, 350);
vertex(173, 350);
vertex(173, 220);
vertex(240, 220);
endShape();

//Allows control of player when key is pressed
if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      circleY--;
    }
    else if (keyCode == DOWN_ARROW) {
      circleY++;
    }
    else if(keyCode == LEFT_ARROW){
      circleX--;
    }
    else if(keyCode == RIGHT_ARROW){
     circleX++;
    }
  }

  fill('blue')
  circle(circleX, circleY, 40);
}