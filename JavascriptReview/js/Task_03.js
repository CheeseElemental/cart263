"use strict";



function setup() {
    console.log("go")
    createCanvas (500, 500)
}

function draw() {
    background (63);
    drawEllipse (100, 100, 100, 100, 23, 23, 23);

    drawEllipse (320, 320, 120, 120, 31, 31, 31);

    drawEllipse (30, 30, 70, 70, 20, 100, 18);

}

function drawEllipse(x,y,w,h,r,g,b){
    fill(r,g,b);
    ellipse(x, y, w, h);



}