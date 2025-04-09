"use strict";

let counter = 1;
let circles = 0;

//button for adding ellipses
let square = {
    x: 50, 
    y: 50, 
    size: 50,
    color: {r:204, g:93, b:33}
}
//button for subtracting ellipses
let square2 = {
    x: 150,
    y: 50,
    size: 50,
    color: { r: 204, g: 93, b: 33 }
}

function setup() {
    console.log("go");
    createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() {
    displaySquare();
    displaySquare2();
    checkCollisionWithSquare();
    if (counter < 10 && counter > 1) {
        while (circles < counter) {
            drawCircle(width/2,height/2,counter*30,10)
            circles += 1
        }
    }

    checkCollisionWithSquare2();


}
function drawCircle(x,y,radius,alpha) {
    fill(50, 50, 50, alpha)
    ellipse(x, y, radius)
}

function displaySquare() {
    fill(square.color.r, square.color.g, square.color.b);
    rect(square.x, square.y, square.size);
    if (checkCollisionWithSquare()) {
        square.color.r = 254
        square.color.g = 143
        square.color.b = 83
    } else {
        square.color.r = 204
        square.color.g = 93
        square.color.b = 33
    }
}
function displaySquare2() {
    fill(square2.color.r, square2.color.g, square2.color.b);
    rect(square2.x, square2.y, square2.size);
    if (checkCollisionWithSquare2()) {
        square2.color.r = 254
        square2.color.g = 143
        square2.color.b = 83
    } else {
        square2.color.r = 204
        square2.color.g = 93
        square2.color.b = 33
    }
}

function mousePressed() {
    if (checkCollisionWithSquare()) {
        counter += 1
    }
}

function checkCollisionWithSquare() {
    if (mouseX <= square.x + square.size / 2 && mouseX >= square.x - square.size / 2 && mouseY <= square.y + square.size / 2 && mouseY >= square.y - square.size / 2) {
        return(true)
    } else {
        return(false)
    }
}

function checkCollisionWithSquare2() {
    if (mouseX <= square2.x + square2.size / 2 && mouseX >= square2.x - square2.size / 2 && mouseY <= square2.y + square2.size / 2 && mouseY >= square2.y - square2.size / 2) {
        return (true)
    } else {
        return (false)
    }
}
 