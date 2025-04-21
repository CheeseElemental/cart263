/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Repeatedly Click the mouse to try to grab a fly
 * - The flies will start to panic and try to avoid your tounge.
 * - Reload the page to play again
 * 
 /** A game about eating flies and destroying the lives of their 
  * fly families and fly communities.
 
 */

"use strict";

let titleString = "Flymonade!"
let endingString = "You're a monster"
let panicFly = {
    x: undefined,
    y: undefined,
}

let backgroundColor = "#87ceeb"

const beeDrop = {
    x: undefined,
    y: -50,
    size: 30,
    isActive: false,
    fearDistance: 300,
    velocity: {
        x: 0,
        y: 2,
    },  
}

const flyAnimation = {
    x: 0,
    y: 0,
    isPlaying: false,
    startTime: 0,
    timePassed: 0,
}

const flyCaught = {
    x: 0,
    y: 0,
    isPlaying: false,
    startTime: 0,
    timePassed: 0,
}

const frog = {
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 1,
        defaultSpeed: .5,
        state: "idle"
    },
    flysEaten: 0,
};

let flyEaten = false;
const fly = {
    x: 0,
    y: 200,
    size: 15,
    velocity: {
        x: 1,
        y: 10,
    },
    fearDistance: 150,
};

let caughtFlyImage = undefined;
let endingImage = undefined;
let state = "title";
let animationImage = undefined;
let flyCaughtImage = undefined;
let beeDropImage = undefined;
let level = "One"


moveBeeDrop();
    drawBeeDrop();
    checkFrogBeeDropCollision();

    if (flyAnimation.isPlaying === true) {
        flyAnimation.timePassed = millis() - flyAnimation.startTime;
        if (flyAnimation.timePassed < 1000) {
            drawAnimation();
        } else {
            flyAnimation.isPlaying = false;
        }
    }

    if (flyCaught.isPlaying === true) {
        flyCaught.timePassed = millis() - flyCaught.startTime;
        if (flyCaught.timePassed < 1000) {
            drawCaughtFly();
        } else {
            flyCaught.isPlaying = false;
        }
    }




function preload() {
    caughtFlyImage = loadImage("assets/images/flyPanic.png");
    endingImage = loadImage("assets/images/Monster.png");
    animationImage = loadImage("assets/images/Fly_02.gif");
    flyCaughtImage = loadImage ("assets/images/Monster.gif");
    BeeDropImage = loadImage ("assets/images/BeeDrop.gif");
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    //text settings
    textSize(32);
    textAlign(CENTER, CENTER);

    // Give the fly its first random position
    resetFly();
}

//"calling" the different title, game, and end screens
function draw() {
    if (state === "title") {
        title();
    }

    else if (state === "game") {
        game();

    }

    else if (state === "ending") {
        ending();
    }

}


//making the appearance of the title screen
function title() {
    background("#87ceeb")

    push();
    fill("#ffffff");
    text(titleString, width / 2, height / 2)
    pop();

    if (mouseIsPressed) {
        state = "game";
    }
}

//this funciton is to set up ALL THE NEW VARIABLES for the level two
 function setupLevel2(){
    text ("setupLevel Two", width /2, height /2);
    fly.velocity.x *= 2
    backgroundColor = "blue"
    level = "Two"
 }

 
function levelTwo(){
    text ("Level Two", width /2, height /2);
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    if(flyAnimation.isPlaying===true){
        flyAnimation.timePassed=millis()-flyAnimation.startTime
        if(flyAnimation.timePassed<1000){
            drawAnimation()
        }
        else{
            flyAnimation.isPlaying=false
        }
    }

    if(flyCaught.isPlaying===true){
        flyCaught.timePassed=millis()-flyCaught.startTime
        if(flyCaught.timePassed<1000){
            drawCaughtFly()
        }
        else{
            flyCaught.isPlaying=false
        }
    }


    moveBeeDrop();
    drawBeeDrop();
    checkFrogBeeDropCollision();

    if (flyAnimation.isPlaying === true) {
        flyAnimation.timePassed = millis() - flyAnimation.startTime;
        if (flyAnimation.timePassed < 1000) {
            drawAnimation();
        } else {
            flyAnimation.isPlaying = false;
        }
    }

    if (flyCaught.isPlaying === true) {
        flyCaught.timePassed = millis() - flyCaught.startTime;
        if (flyCaught.timePassed < 1000) {
            drawCaughtFly();
        } else {
            flyCaught.isPlaying = false;
        }
    }

}
function levelOne (){
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    if(flyAnimation.isPlaying===true){
        flyAnimation.timePassed=millis()-flyAnimation.startTime
        if(flyAnimation.timePassed<1000){
            drawAnimation()
        }
        else{
            flyAnimation.isPlaying=false
        }
    }

    if(flyCaught.isPlaying===true){
        flyCaught.timePassed=millis()-flyCaught.startTime
        if(flyCaught.timePassed<1000){
            drawCaughtFly()
        }
        else{
            flyCaught.isPlaying=false
        }
    }


    moveBeeDrop();
    drawBeeDrop();
    checkFrogBeeDropCollision();

    if (flyAnimation.isPlaying === true) {
        flyAnimation.timePassed = millis() - flyAnimation.startTime;
        if (flyAnimation.timePassed < 1000) {
            drawAnimation();
        } else {
            flyAnimation.isPlaying = false;
        }
    }

    if (flyCaught.isPlaying === true) {
        flyCaught.timePassed = millis() - flyCaught.startTime;
        if (flyCaught.timePassed < 1000) {
            drawCaughtFly();
        } else {
            flyCaught.isPlaying = false;
        }
    }
}
//making the appearance of the game screen
function game() {
    background(backgroundColor); 
    if (level==="One"){
        levelOne();
    }
    else if( level === "setupTwo"){
        setupLevel2()
    }
    else if( level === "Two"){
        levelTwo();
    }
    

    
}

function drawAnimation(){
    push()
    image(animationImage, flyAnimation.x, flyAnimation.y);
    pop()

}

function drawCaughtFly(){
    push()
    image(flyCaughtImage, flyCaught.x, flyCaught.y);
    pop()

}

//making the appearance of the final screen
function ending() {
    background("#87ceeb")

    push();
    fill("#ffffff");
    text(endingString, width / 2, 30);
    imageMode(CENTER);
    image(endingImage, width / 2, height / 2,);
    pop();

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    let buzziness = .1;
    let speedVariation = 3;
    let d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y)
    if (d < fly.fearDistance) {
        buzziness = .2;
        speedVariation = 50;

    }

    // Move the fly
    fly.x += fly.velocity.x;
    fly.y += fly.velocity.y;
    let flyChange = random(1, 3);
    if (flyChange >= buzziness) {
        fly.velocity.y = random(-speedVariation, speedVariation);
    }

    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

function moveBeeDrop() {
    let buzziness = .1;
    let speedVariation = 3;
    let d = dist(frog.body.x, frog.body.y, beeDrop.x, beeDrop.y)
    if (d < beeDrop.fearDistance) {
        buzziness = .2;
        speedVariation = 10;
    }

    if (beeDrop.isActive) {
        beeDrop.y += beeDrop.velocity.y;
        beeDrop.x += beeDrop.velocity.x;
        if (beeDrop.y > height + beeDrop.size) {
            resetBeeDrop();
        }
    } else {
        if (random() < 0.01) {
            beeDrop.isActive = true;
            beeDrop.x = random(0, width);
            beeDrop.y = -beeDrop.size;
        }
    }
}

function drawBeeDrop() {
    if (beeDrop.isActive) {
        push();
        imageMode(CENTER);
        image(beeDropImage, beeDrop.x, beeDrop.y, beeDrop.size, beeDrop.size);
        pop();
    }
}

function resetBeeDrop() {
    beeDrop.isActive = false;
    beeDrop.y = -beeDrop.size;
}

function checkFrogBeeDropCollision() {
    if (beeDrop.isActive) {
        let d = dist(frog.body.x, frog.body.y, beeDrop.x, beeDrop.y);
        if (d < frog.body.size / 2 + beeDrop.size / 2) {
            console.log("Frog collided with the bee! Resetting game...");
            resetGame();
        }
    }
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        flyEaten = false;
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        if (flyEaten === true) {
            imageMode(CENTER)
            image(caughtFlyImage, frog.tongue.x + random(-10, 10), frog.tongue.y + random(-10, 10))
        }
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            if (flyEaten === true){
                flyCaught.isPlaying= true
                flyCaught.startTime = millis()
                flyCaught.timePassed = 0
                flyCaught.x = frog.body.x
                flyCaught.y = height -100

            }
            frog.tongue.state = "idle";
            frog.tongue.speed = frog.tongue.defaultSpeed;

        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip

    noCursor();
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {

    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);

    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        flyEaten = true;
        fly.velocity.x = fly.velocity.x + .5;
        frog.flysEaten += 1;
        if (flyAnimation.isPlaying===false){
            flyAnimation.isPlaying = true;
        flyAnimation.x=fly.x;
        flyAnimation.y=fly.y;
        flyAnimation.startTime=millis();
        flyAnimation.timePassed = 0;

        }
        

        //on the (4th) fly, go to the ending screen and end the game.  
        if (frog.flysEaten >= 1) {
            //state = "ending"
            level = "setupTwo"
        }

        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";


        /*Clicking the mouse repeatedly increases it's speed**/
    }
    else if (frog.tongue.state === "outbound") {
        frog.tongue.speed *= 1.7;
    }
}

function resetGame() {
    frog.body.x = 320;
    frog.body.y = 520;
    frog.tongue.state = "idle";
    frog.tongue.y = 480;
    frog.tongue.speed = frog.tongue.defaultSpeed;
    frog.flysEaten = 0;

    resetFly();
    resetBeeDrop();

    flyEaten = false;
    flyAnimation.isPlaying = false;
    flyCaught.isPlaying = false;

    level = "One";
    state = "title";
    console.log("Game reset!");
}