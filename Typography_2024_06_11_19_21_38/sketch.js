function setup() {
  createCanvas(700, 500);
  textAlign(CENTER, CENTER); // Set text alignment to center
}

function draw() {
  background(0); // Set background color to black
 
  // Calculate dynamic text size
  let textSizeDynamic = map(sin(frameCount * 0.05), -1, 1, 30, 60);
  textSize(textSizeDynamic); // Set text size

  // Calculate dynamic color
  let r = map(sin(frameCount * 0.02), -1, 1, 100, 255);
  let g = map(cos(frameCount * 0.03), -1, 1, 100, 255);
  let b = map(sin(frameCount * 0.04), -1, 1, 100, 255);
  fill(r, g, b); // Set text color

  // Calculate dynamic position
  let x = width / 2 + sin(frameCount * 0.05) * 50;
  let y = height / 2 + cos(frameCount * 0.07) * 50;

  // Draw text in the dynamic position
  text("Creativity is intelligence having fun.", x, y); 
}
