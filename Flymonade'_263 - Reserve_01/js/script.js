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
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 1,
        defaultSpeed: .5,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    flysEaten: 0,

};

let flyEaten = false;

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 15,
    velocity: {
        x: 3,
        y: 10,
    },
    // Distance at which fly starts to evade the tounge
    fearDistance: 150,

};

let caughtFlyImage = undefined;
let endingImage = undefined;
let state = "title";
let animationImage = undefined;
let flyCaughtImage = undefined;
let level = "One"



function preload() {
    caughtFlyImage = loadImage("assets/images/flyPanic.png");
    endingImage = loadImage("assets/images/Monster.png");
    animationImage = loadImage("assets/images/clown.png");
    flyCaughtImage = loadImage ("assets/images/Monster.png");
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

function levelTwo(){
    text ("Level Two", width /2, height /2)
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
}
//making the appearance of the game screen
function game() {
    background("#87ceeb"); 
    if (level==="One"){
        levelOne();
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
        if (frog.flysEaten >= 4) {
            //state = "ending"
            level = "Two"
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
