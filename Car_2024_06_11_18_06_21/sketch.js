function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
createCanvas(400, 400); // Create a canvas of 400x400 pixels
}
function draw() {
background(135, 206, 235); // Sky blue background
// Road
fill(50); // Dark grey color for the road
rect(0, 320, width, 82); // Draw the road
// Car body
fill(255, 0, 0); // Red color for the car body
rect(100, 220, 200, 50); // Draw the main body of the car
// Car roof
rect(150, 180, 100, 40); // Draw the roof of the car
// Windows
fill(135, 206, 250); // Light blue color for windows

rect(160, 190, 35, 30); // Left window
rect(205, 190, 35, 30); // Right window
// Car front
fill(255, 0, 0); // Same red color for the car front
quad(300, 220, 340, 270, 300, 270, 300, 220); // Draw the front of the car
// Left tire
fill(0); // Black color for the tires
ellipse(150, 270, 40, 40); // Draw the left tire
// Right tire
ellipse(250, 270, 40, 40); // Draw the right tire
// Wheel rims
fill(200); // Light grey for the rims
ellipse(150, 270, 20, 20); // Left rim
ellipse(250, 270, 20, 20); // Right rim
// Car details
fill(255, 255, 0); // Yellow color for headlights
ellipse(330, 245, 10, 10); // Right headlight
ellipse(330, 260, 10, 10); // Left headlight
}