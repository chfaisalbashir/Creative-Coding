let osc, fft;
let waveType = 'sine'; // Initial waveform type

function setup() {
  createCanvas(600, 400);
  background(0);
  osc = new p5.Oscillator();

  osc.setType(waveType); // Set initial waveform type
  osc.start();
  fft = new p5.FFT();
  fft.setInput(osc);
}

function draw() {
  background(0);
  let modFreq = map(mouseX, 0, width, 20, 15000); // Frequency range from 20 Hz to 15000 Hz
  let modAmp = map(mouseY, 0, height, 0, 1); // Amplitude range from 0 to 1
  osc.freq(modFreq);
  osc.amp(modAmp);
  let waveform = fft.waveform();
  
  // Change waveform type based on mouseY position
  if (mouseY < height / 3) {
    waveType = 'sine';
  } else if (mouseY < 2 * height / 3) {
    waveType = 'triangle';
  } else {
    waveType = 'sawtooth';
  }
  osc.setType(waveType); // Update oscillator waveform type

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0); // Invert y-axis for correct waveform display
    vertex(x, y);
  }
  endShape();

  // Draw text to display waveform type
  fill(255);
  noStroke();
  textSize(18);
  textAlign(CENTER);
  text('Waveform Type: ' + waveType.toUpperCase(), width / 2, 30);
}
