// Global Variables
let counter = 0;
let radius = 20;
let ellipseAlpha = 50;

// Square Objects
let orangeSquare = {
  x: 100,
  y: 100,
  w: 100,
  h: 100,
  color: color(255, 165, 0)
};

let redSquare = {
  x: 250,
  y: 100,
  w: 100,
  h: 100,
  color: color(255, 0, 0)
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Display and interact with orange square
  displaySquare(orangeSquare, color(255, 200, 100));
  if (checkCollisionWithSquare(orangeSquare) && mouseIsPressed) {
    counter = constrain(counter + 1, 0, 10);
  }

  // Display and interact with red square
  displaySquare(redSquare, color(255, 100, 100));
  if (checkCollisionWithSquare(redSquare) && mouseIsPressed) {
    counter = constrain(counter - 1, 0, 10);
  }

  // Draw ellipses if counter is between 1 and 10
  if (counter > 0 && counter <= 10) {
    let currentRadius = radius;
    let alpha = ellipseAlpha;
    let i = 0;
    while (i < counter) {
      drawCircle(width / 2, height / 2, currentRadius, alpha);
      currentRadius += 10;
      alpha += 20;
      i++;
    }
  }
}

// Function to display a square and handle hover effect
function displaySquare(square, hoverColor) {
  if (checkCollisionWithSquare(square)) {
    fill(hoverColor);
  } else {
    fill(square.color);
  }
  rect(square.x, square.y, square.w, square.h);
}

// Function to check collision with a square
function checkCollisionWithSquare(square) {
  return (
    mouseX > square.x &&
    mouseX < square.x + square.w &&
    mouseY > square.y &&
    mouseY < square.y + square.h
  );
}

// Function to draw a circle
function drawCircle(x, y, radius, alpha) {
  fill(255, alpha);
  noStroke();
  ellipse(x, y, radius);
}
