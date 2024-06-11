// Simulated CSV data
let csvData = `Country,CO2_Emissions
USA,5417
China,10034
India,2644
Russia,1660
Japan,1160`;

let table;
let data;
let maxEmissions;

function preload() {
  // Parse the CSV data from string (simulated)
  table = loadTableFromString(csvData, ',', 'header');
}

function setup() {
  createCanvas(750, 500);
  
  // Parse the CSV data
  data = table.getRows();
  
  // Find the maximum CO2 emissions for scaling purposes
  maxEmissions = findMaxEmissions(data);
  
  // Draw the bar chart
  drawBarChart(data);
}

function drawBarChart(data) {
  background(240);
  textAlign(CENTER, CENTER);
  textSize(14);
  
  let barWidth = width / data.length;
  
  for (let i = 0; i < data.length; i++) {
    let country = data[i].getString('Country');
    let emissions = data[i].getNum('CO2_Emissions');
    let barHeight = map(emissions, 0, maxEmissions, 0, height - 100);
    let barColor = color(random(255), random(255), random(255));
    
    fill(barColor);
    rect(i * barWidth, height - barHeight, barWidth - 5, barHeight);
    
    fill(0);
    text(country, i * barWidth + barWidth / 2, height - 20);
    text(emissions.toFixed(2) + ' MtCO2', i * barWidth + barWidth / 2, height - barHeight - 20);
  }
  
  // Draw axis labels
  fill(0);
  textAlign(RIGHT);
  text('CO2 Emissions (MtCO2)', 80, 50);
  
  textAlign(CENTER);
  text('Countries', width / 2, height - 10);
}

function findMaxEmissions(data) {
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    let emissions = data[i].getNum('CO2_Emissions');
    if (emissions > max) {
      max = emissions;
    }
  }
  return max;
}

// Helper function to load table from string (simulated CSV data)
function loadTableFromString(csvString, separator, header) {
  let table = new p5.Table();
  let rows = csvString.split('\n');
  let headers = rows[0].split(separator);
  
  table.addColumn(headers[0], p5.STRING);
  table.addColumn(headers[1], p5.FLOAT);
  
  for (let i = 1; i < rows.length; i++) {
    let data = rows[i].split(separator);
    let newRow = table.addRow();
    newRow.setString(headers[0], data[0]);
    newRow.setNum(headers[1], parseFloat(data[1]));
  }
  
  return table;
}
