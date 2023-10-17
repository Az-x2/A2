function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('maroon');
    
    //Forms shadow of object
    fill('#9b870c');
    arc(200, 210, 150, 150, 150, PI + QUARTER_PI, PIE);
    
    fill('yellow');
    arc(200, 200, 150, 150, 150, PI + QUARTER_PI, PIE);
      
    triangle(150, 75, 200, 145, 250, 75);
    
    fill('black');
    circle(240, 210, 20)
    
    //Text appears 
    textSize(32);
    text('Missing Piece', 100, 340);
  }