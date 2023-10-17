let circleY = [];
let fr = 80;

function setup() {
  createCanvas(700, 500);
  frameRate(fr);
  
  //Adjusts how many balls appear
  for (let i = 0; i < 75; i++) {
    circleY[i] = random(height);
  }
}
  

function draw() {
  background(0, 0, 40);
  
  //Changes properties of circles
  fill('lightblue')
  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 10);

    circleY[i]++;
    
    //Animation loops after height meets 
    if (circleY[i] > height) {
      circleY[i] = 50;
    }
  }
  
  fill('gray')
  rect(170, -40, 345, 155, 130);
  rect(450, -10, 345, 155, 130);
  rect(-20, -20, 245, 115, 130);
}

