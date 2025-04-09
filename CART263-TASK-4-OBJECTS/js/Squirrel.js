class Squirrel{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.squirrelImage =  document.createElement("img");
        this.squirrelImage.src = "image/Gif_temp.gif"
        this.vx = 1;
        this.vy =1;
        self = this;
      
        
}

    
    renderSquirrel(){
    // //append to the SKY div
    document.querySelector(".grass").appendChild(this.squirrelImage);
    }

    updateDivPos() {
        console.log("update")
        this.sunDiv.style.left = this.x + "px";
        this.sunDiv.style.top = this.y + "px";
      }

}