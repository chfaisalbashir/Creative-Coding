var img, x, y;

function preload() {
  // Preload the image before setting up the canvas
  img = loadImage("bird.jpg");
}

function setup() {
  // Create a canvas of size 400x400 pixels
  createCanvas(400, 400);
  // Set the background color to black
  background(0);
  // Disable stroke for shapes
  noStroke();
}

function draw() {
  // Reset the background to black in each frame to avoid trailing effect
  background(0);

  // Constrain the x and y coordinates to be within the image dimensions
  x = constrain(mouseX, 0, img.width - 1);
  y = constrain(mouseY, 0, img.height - 1);

  // Draw the image at the top-left corner of the canvas
  image(img, 0, 0);

  // Ensure x and y are within the bounds of the image before calling get()
  if (x >= 0 && x < img.width && y >= 0 && y < img.height) {
    // Get the color of the pixel at (x, y) from the image
    var c = img.get(x, y);
    // Set the fill color to the color of the pixel
    fill(c);
    // Draw an ellipse at the mouse position with the same color as the pixel
    rect(mouseX, mouseY, 50, 50);
  }
}
