var img, x, y;

function preload() {
  // Preload the image before setting up the canvas
  img = loadImage("bird.jpg");
}

function setup() {
  // Create a canvas of size 400x400 pixels
  createCanvas(500, 500);
  // Set the background color to black
  background(0);
  // Disable stroke for shapes
  noStroke();
}

function draw() {
  // Generate random x and y coordinates within the canvas dimensions
  x = random(width);
  y = random(height);

  // Get the color of the pixel at the random (x, y) position from the image
  var c = img.get(x, y);

  // Set the fill color using the color components from the pixel
  // The color components are: c[0] = red, c[1] = green, c[2] = blue
  // The alpha value is set to 50 for transparency
  fill(c[0], c[1], c[2], 150);

  // Draw an ellipse at the random (x, y) position with a width and height of 30 pixels
  ellipse(x, y, 40, 40);
}
