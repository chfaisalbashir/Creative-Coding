var img; // Variable to store the image

function preload() {
  // Preload function to load the image before the setup function is run
  img = loadImage("bird.jpg"); // Load the image named "bird.jpg" into the variable img
}

function setup() {
  // Setup function to initialize the environment
  createCanvas(400, 400); // Create a canvas of 400x400 pixels
  background(0); // Set the background color to black
}

function draw() {
  // Draw function that runs continuously
  background(0); // Clear the canvas by setting the background color to black on each frame
  image(img, 0, 0); // Draw the image at the coordinates (0, 0)
  
  // Map the mouse's X position from the range 0 to the canvas width (0 to 400)
  // to a value between 2 and 20
  var v = map(mouseX, 0, width, 2, 20); 
  
  // Apply the posterize filter to the image with the level set to the mapped value v
  filter(POSTERIZE, v); 
}
