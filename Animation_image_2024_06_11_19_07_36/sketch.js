// Define the number of frames in the animation
var numFrames = 8;

// Initialize the frame counter
var frame = 0;

// Create an array to store image objects
var images = new Array(numFrames);

// Preload function to load images before setup
function preload() {
    // Load each image into the array
    images[0] = loadImage("parrot1.png");
    images[1] = loadImage("parrot2.png");
    images[2] = loadImage("parrot3.png");
    images[3] = loadImage("parrot4.png");
    images[4] = loadImage("parrot5.png");
    images[5] = loadImage("parrot6.png");
    images[6] = loadImage("parrot7.png");
    images[7] = loadImage("parrot8.png");
    images[8] = loadImage("parrot9.png"); // This should be images[8] = loadImage("parrot9.png"); since the index starts from 0
}

function setup() {
    // Create a canvas with dimensions 400x400 pixels
    createCanvas(400, 400);

    // Set the frame rate of the animation
    frameRate(10);

    // Set the initial background color
    background(255);
}

function draw() {
    // Clear the canvas by setting the background color to white
    background(255);

    // Increment the frame counter
    frame++;

    // Reset the frame counter if it reaches the total number of frames
    if (frame == numFrames) {
        frame = 0;
    }

    // Display the current frame's image at the mouse coordinates with an offset
    image(images[frame], mouseX - 75, mouseY - 100);
}
