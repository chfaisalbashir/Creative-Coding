function setup() {
  createCanvas(600, 600);
  background(30, 30, 30); // Dark background for a space theme
}

function draw() {
  noLoop(); // Ensure draw() runs only once
  
  // Draw the alien's body
  noStroke();
  fill(100, 200, 100); // Green color for the body
  ellipse(300, 300, 200, 300); // Body
  
  // Draw the alien's head
  fill(150, 255, 150); // Light green color for the head
  ellipse(300, 150, 150, 150); // Head
  
  // Draw the alien's eyes
  fill(255); // White color for eyes
  ellipse(260, 130, 40, 60); // Left eye
  ellipse(340, 130, 40, 60); // Right eye
  
  fill(0); // Black color for pupils
  ellipse(260, 130, 20, 40); // Left pupil
  ellipse(340, 130, 20, 40); // Right pupil
  
  // Draw the alien's mouth
  fill(255, 100, 100); // Pink color for the mouth
  arc(300, 180, 80, 50, 0, PI, CHORD); // Smiling mouth
  
  // Draw the alien's antennae
  stroke(150, 255, 150); // Light green color for antennae
  strokeWeight(8);
  line(260, 80, 240, 20); // Left antenna
  line(340, 80, 360, 20); // Right antenna
  
  fill(255, 0, 0); // Red color for antenna tips
  ellipse(240, 20, 20, 20); // Left antenna tip
  ellipse(360, 20, 20, 20); // Right antenna tip
  
  // Draw the alien's arms
  noStroke();
  fill(100, 200, 100); // Green color for the arms
  rect(160, 250, 30, 100); // Left arm
  rect(410, 250, 30, 100); // Right arm
  
  // Draw the alien's hands
  fill(150, 255, 150); // Light green color for hands
  ellipse(175, 350, 40, 40); // Left hand
  ellipse(425, 350, 40, 40); // Right hand
  
  // Draw the alien's legs
  fill(100, 200, 100); // Green color for the legs
  rect(240, 450, 40, 100); // Left leg
  rect(320, 450, 40, 100); // Right leg
  
  // Draw the alien's feet
  fill(150, 255, 150); // Light green color for feet
  ellipse(260, 550, 60, 30); // Left foot
  ellipse(340, 550, 60, 30); // Right foot
}
function setup() {
  createCanvas(600, 600);
  background(30, 30, 30); // Dark background for a space theme
}

function draw() {
  noLoop(); // Ensure draw() runs only once
  
  // Draw the alien's body
  noStroke();
  fill(100, 200, 100); // Green color for the body
  ellipse(300, 300, 200, 300); // Body
  
  // Draw the alien's head
  fill(150, 255, 150); // Light green color for the head
  ellipse(300, 150, 150, 150); // Head
  
  // Draw the alien's eyes
  fill(255); // White color for eyes
  ellipse(260, 130, 40, 60); // Left eye
  ellipse(340, 130, 40, 60); // Right eye
  
  fill(0); // Black color for pupils
  ellipse(260, 130, 20, 40); // Left pupil
  ellipse(340, 130, 20, 40); // Right pupil
  
  // Draw the alien's mouth
  fill(255, 100, 100); // Pink color for the mouth
  arc(300, 180, 80, 50, 0, PI, CHORD); // Smiling mouth
  
  // Draw the alien's antennae
  stroke(150, 255, 150); // Light green color for antennae
  strokeWeight(8);
  line(260, 80, 240, 20); // Left antenna
  line(340, 80, 360, 20); // Right antenna
  
  fill(255, 0, 0); // Red color for antenna tips
  ellipse(240, 20, 20, 20); // Left antenna tip
  ellipse(360, 20, 20, 20); // Right antenna tip
  
  // Draw the alien's arms
  noStroke();
  fill(100, 200, 100); // Green color for the arms
  rect(180, 250, 30, 100); // Left arm
  rect(390, 250, 30, 100); // Right arm
  
  // Draw the alien's hands
  fill(150, 255, 150); // Light green color for hands
  ellipse(190, 350, 40, 40); // Left hand
  ellipse(405, 350, 40, 40); // Right hand
  
  // Draw the alien's legs
  fill(100, 200, 100); // Green color for the legs
  rect(240, 420, 40, 100); // Left leg
  rect(320, 420, 40, 100); // Right leg
  
  // Draw the alien's feet
  fill(150, 255, 150); // Light green color for feet
  ellipse(260, 530, 60, 30); // Left foot
  ellipse(340, 530, 60, 30); // Right foot
}