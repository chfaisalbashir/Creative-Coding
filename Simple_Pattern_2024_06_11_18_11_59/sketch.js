let numX, numY;
let circleSizeRange;

function setup() {
  createCanvas(800, 600);
  background(240);
  noStroke();

  numX = 10; // Number of circles horizontally
  numY = 6;  // Number of circles vertically
  circleSizeRange = { min: 20, max: 80 }; // Range for circle sizes
}

function draw() {
  background(240); // Clear background

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      let posX = map(x, 0, numX - 1, 50, width - 50); // Map x position within canvas
      let posY = map(y, 0, numY - 1, 50, height - 50); // Map y position within canvas

      let circleSize = random(circleSizeRange.min, circleSizeRange.max); // Random size for circle
      let colorHue = random(0, 360); // Random hue value for color

      fill(colorHue, 80, 80); // Set fill color with random hue
      ellipse(posX, posY, circleSize, circleSize); // Draw circle at calculated position
    }
  }

  noLoop(); // Stop draw loop after one iteration
}

function mousePressed() {
  loop(); // Restart draw loop on mouse press
}
