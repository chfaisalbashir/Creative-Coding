var particles = []; // Array
var nums = 400; // Number of particles
var showText = false; // Flag to control the display of text

function setup() {
  createCanvas(windowWidth, windowHeight); // Canvas size
  background(255); // White background

  // Initialize particles array
  for (var i = 0; i < nums; i++) {
    particles[i] = new Particle(random(0, width), random(0, height)); // Create a new particle at a random position
  }
}

function draw() {
  background(255, 10); // Slightly transparent background effect
  noStroke(); // No outline of shape

  // Loop through all particles
  for (var i = 0; i < nums; i++) {
    var size = map(i, 0, nums, 5, 20); // Map particle size from 5 to 20 based on its index
    var alpha = map(i, 0, nums, 50, 255); // Map alpha transparency from 50 to 255 based on its index

    fill(240, 200, 125, alpha); // Set fill color
    particles[i].move(); // Update particle position
    particles[i].display(size); // Display particle
    particles[i].checkEdge(); // Check edges
  }

  if (showText) {
    drawText(); // Call function to draw text if flag is set
  }
}

function mousePressed() {
  showText = true; // Set flag to true when mouse is pressed
}

function drawText() {
  fill(0); // Black color
  strokeWeight(5); // Adjust stroke weight
  textSize(35); // Set text size
  textAlign(CENTER, CENTER); // Align text to center
  stroke(0); // Black stroke color
  text('Welcome To Bath Spa University', windowWidth / 2 + 3, windowHeight / 2 + 3); // Draw text with slight offset for shadow effect
  fill(0, 240, 255); // Set fill color
  text('Welcome To Bath Spa University', windowWidth / 2, windowHeight / 2); // Draw text
}

function Particle(x, y) {
  // Particle constructor function
  this.pos = createVector(x, y); // Set start position
  this.angle = random(TWO_PI); // Set random angle
  this.speed = random(1, 3); // Set random speed of particle
  this.type = random(['ellipse', 'rect', 'triangle']); // Randomly choose shape

  // Method to update position
  this.move = function() {
    this.angle += 0.05; // Increment angle to create wave effect
    this.pos.x += cos(this.angle) * this.speed; // Update x position
    this.pos.y += sin(this.angle) * this.speed; // Update y position
  }

  // Method to check and handle edges
  this.checkEdge = function() {
    if (this.pos.x > windowWidth || this.pos.x < 0 || this.pos.y > windowHeight || this.pos.y < 0) {
      // If particle goes out of bounds, reset to a random position within bounds
      this.pos.x = random(50, windowWidth - 50);
      this.pos.y = random(50, windowHeight - 50);
    }
  }

  // Method to display the particle
  this.display = function(size) {
    // Draw particle based on its type
    if (this.type === 'ellipse') {
      ellipse(this.pos.x, this.pos.y, size, size); // Draw ellipse
    } else if (this.type === 'rect') {
      rect(this.pos.x, this.pos.y, size, size); // Draw rectangle
    } else if (this.type === 'triangle') {
      triangle(
        this.pos.x, this.pos.y - size / 2,
        this.pos.x - size / 2, this.pos.y + size / 2,
        this.pos.x + size / 2, this.pos.y + size / 2
      ); // Draw triangle
    }
  }
}
