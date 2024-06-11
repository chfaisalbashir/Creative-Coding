// Define game states
const STATE_TITLE = 0;
const STATE_PLAYING = 1;
const STATE_GAMEOVER = 2;

let state; // Current game state
let score; // Player's score
let cat; // Player's character
let arrows = []; // Array to store player's arrows
let circles = []; // Array to store enemy circles
let magicMeter; // Player's magic meter
let lives; // Player's lives
let powerUps = []; // Array to store power-ups

function setup() {
  createCanvas(800, 600);
  state = STATE_TITLE; // Start with title screen
  score = 0;
  lives = 3; // Initialize player lives
  
  // Create player character (cat)
  cat = new Cat(width / 2, height - 50, 50);
  
  // Initialize magic meter
  magicMeter = new MagicMeter(100); // Start with 100% magic
  
  // Initially generate some circles
  generateCircles(5);
}

function draw() {
  background(220);
  
  // State machine to handle different game states
  if (state === STATE_TITLE) {
    drawTitleScreen();
  } else if (state === STATE_PLAYING) {
    playGame();
  } else if (state === STATE_GAMEOVER) {
    drawGameOverScreen();
  }
}

function drawTitleScreen() {
  // Display title and instructions
  textAlign(CENTER);
  textSize(36);
  fill(0);
  text("Shape Shooter", width / 2, height / 2 - 50);
  textSize(20);
  text("Use arrow keys to move, space to shoot", width / 2, height / 2);
  text("Click to start", width / 2, height / 2 + 50);
}

function playGame() {
  // Draw and update player
  cat.update();
  cat.display();
  
  // Handle player shooting arrows
  if (keyIsDown(32) && magicMeter.useMagic()) { // Spacebar to shoot
    arrows.push(new Arrow(cat.x, cat.y));
  }
  
  // Draw and update arrows
  for (let i = arrows.length - 1; i >= 0; i--) {
    arrows[i].update();
    arrows[i].display();
    
    // Check for collisions with circles
    for (let j = circles.length - 1; j >= 0; j--) {
      if (arrows[i].hits(circles[j])) {
        score += 10; // Increase score
        circles.splice(j, 1); // Remove the circle
        arrows.splice(i, 1); // Remove the arrow
        break; // Exit inner loop
      }
    }
  }
  
  // Draw and update circles
  for (let circle of circles) {
    circle.update();
    circle.display();
    
    // Check for collisions with player
    if (circle.hits(cat)) {
      lives--; // Decrease lives
      if (lives <= 0) {
        state = STATE_GAMEOVER; // Game over if no lives left
      } else {
        resetLevel(); // Reset level if lives remain
      }
    }
    
    // Check if circle is going off-screen, regenerate it
    if (circle.y > height + circle.size / 2) {
      circle.reset(random(width), -circle.size / 2);
    }
  }
  
  // Draw and update power-ups
  for (let powerUp of powerUps) {
    powerUp.update();
    powerUp.display();
    
    // Check for collisions with player
    if (powerUp.hits(cat)) {
      magicMeter.recharge(20); // Increase magic meter by 20%
      powerUps.splice(powerUps.indexOf(powerUp), 1); // Remove the power-up
    }
    
    // Check if power-up is going off-screen
    if (powerUp.y > height + powerUp.size / 2) {
      powerUps.splice(powerUps.indexOf(powerUp), 1); // Remove the power-up
    }
  }
  
  // Display score, lives, and magic meter
  textAlign(LEFT);
  textSize(20);
  fill(0);
  text("Score: " + score, 20, 30);
  text("Lives: " + lives, 20, 60);
  text("Magic: " + magicMeter.currentMagic.toFixed(0) + "%", 20, 90);
  
  // Generate more circles if fewer than a certain number
  if (circles.length < 10) {
    generateCircles(2);
  }
  
  // Generate a new power-up randomly
  if (random(1) < 0.01) { // Adjust probability as needed
    powerUps.push(new PowerUp(random(width), random(-height, -50), 30));
  }
}

function drawGameOverScreen() {
  // Display game over message and score
  textAlign(CENTER);
  textSize(36);
  fill(0);
  text("Game Over", width / 2, height / 2 - 50);
  textSize(20);
  text("Score: " + score, width / 2, height / 2);
  text("Click to play again", width / 2, height / 2 + 50);
}

function mouseClicked() {
  if (state === STATE_TITLE || state === STATE_GAMEOVER) {
    // Start or restart the game
    state = STATE_PLAYING;
    score = 0;
    lives = 3; // Reset lives
    cat = new Cat(width / 2, height - 50, 50);
    arrows = [];
    circles = [];
    powerUps = []; // Clear power-ups array
    generateCircles(5); // Start with 5 circles
    magicMeter = new MagicMeter(100); // Reset magic meter
  }
}

// Function to generate circles
function generateCircles(numCircles) {
  for (let i = 0; i < numCircles; i++) {
    circles.push(new Circle(random(width), random(-height, -50)));
  }
}

// Function to reset level
function resetLevel() {
  // Clear circles and power-ups
  circles = [];
  powerUps = [];
  
  // Reset player position
  cat.x = width / 2;
  cat.y = height - 50;
  
  // Reset magic meter
  magicMeter.currentMagic = magicMeter.maxMagic;
  
  // Generate initial circles
  generateCircles(5);
}

// Cat class representing the player character
class Cat {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  update() {
    // Move cat based on arrow keys
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    // Constrain cat within the canvas
    this.x = constrain(this.x, 0, width);
  }
  
  display() {
    // Draw cat shape (placeholder)
    fill('#FFC0CB');
    ellipse(this.x, this.y, this.size, this.size);
  }
}

// Arrow class representing player's projectiles
class Arrow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.width = 5;
    this.height = 20;
  }
  
  update() {
    // Move arrow upwards
    this.y -= this.speed;
  }
  
  display() {
    // Draw arrow shape (placeholder)
    fill('#FFD700');
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
  
  // Function to check if arrow hits a circle
  hits(circle) {
    let d = dist(this.x, this.y, circle.x, circle.y);
    return d < circle.size / 2;
  }
}

// Circle class representing enemy shapes
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.size = random(30, 50);
  }
  
  update() {
    // Move circle downwards
    this.y += this.speed;
  }
  
  display() {
    // Draw circle shape (placeholder)
    fill('#00BFFF');
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  // Function to reset circle position
  reset(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.size = random(30, 50);
  }
  
  // Function to check if circle hits the cat
  hits(cat) {
    let d = dist(this.x, this.y, cat.x, cat.y);
    return d < this.size / 2 + cat.size / 2;
  }
}

// PowerUp class representing beneficial objects
class PowerUp {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 2;
  }
  
  update() {
    // Move power-up downwards
    this.y += this.speed;
  }
  
  display() {
    // Draw power-up shape (placeholder)
    fill('#FFFF00');
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  // Function to check if power-up hits the cat
  hits(cat) {
    let d = dist(this.x, this.y, cat.x, cat.y);
    return d < this.size / 2 + cat.size / 2;
  }
}

// MagicMeter class to manage player's magic resource
class MagicMeter {
  constructor(maxMagic) {
    this.maxMagic = maxMagic;
    this.currentMagic = maxMagic;
    this.rechargeRate = 0.1; // Magic per frame recharge rate
  }
  
  // Function to use magic (returns true if magic is available)
  useMagic() {
    if (this.currentMagic > 0) {
      this.currentMagic--;
      return true; // Magic is available
    }
    return false; // No magic available
  }
  
  // Function to recharge magic meter
  recharge(amount) {
    this.currentMagic = min(this.currentMagic + amount, this.maxMagic);
  }
}
