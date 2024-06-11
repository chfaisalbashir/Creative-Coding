let trail = []; // Array to store shapes for trail effect

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function mouseDragged() {
  // Randomly choose between rectangle and ellipse
  let shape = random(1);
  
  if (shape < 0.5) {
    // Draw a rectangle
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let size = random(50, 150);
    trail.push({ type: 'rect', x: mouseX, y: mouseY, size: size, r: r, g: g, b: b });
  } else {
    // Draw an ellipse
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let size = random(50, 150);
    trail.push({ type: 'ellipse', x: mouseX, y: mouseY, size: size, r: r, g: g, b: b });
  }
}

function draw() {
  // Draw background to refresh the canvas
  background(100);

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let shape = trail[i];
    fill(shape.r, shape.g, shape.b);
    noStroke();
    if (shape.type === 'rect') {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'ellipse') {
      ellipse(shape.x, shape.y, shape.size, shape.size);
    }
  }
}