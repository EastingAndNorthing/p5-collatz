const MAX_ITERATIONS = 100;
const line_length = 6;
let angle = 0.15;

let iteration = 1;

function setup() {
  createCanvas(400, 400);
  background(255);
  
  translate(50, 50);
  strokeWeight(5);
  colorMode(HSB);
}

function draw() {
  // background(1, 0, 255, 0.05);
  
  if (iteration < 5000) {
    stroke(iteration % 50 + 180, 255, 255, 0.3);
    collatz(iteration);
    // angle += 0.0001
    iteration++
  }
  
}

function collatz(n) {
  
  let i = 0;
  
  push();
  
  for(i = 0; i < MAX_ITERATIONS; i++) {
    
    if(n % 2 == 0) {
      n = n / 2
      rotate(angle);
    } else {
      n = 3 * n + 1
      rotate(-angle);
    }

    line(0,0,line_length,0);
    translate(line_length,0);
    
    if (n == 1) break;
    
  }
  
  pop();
    
}