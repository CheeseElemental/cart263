window.onload = function(){
    console.log("keys");

    window.addEventListener("keydown", function(event)
{
 console.log(event);

 // document.querySelector("#textContainer").textContent+=event.key;
 // document.querySelector("#textContainer").textContent+=event.code;

 if(event.key ==="ArrowRight"){
 
    document.getElementById("boxA").style.left=parseInt(document.getElementById("boxA").style.left)+speedX+"px";
  }
  else if(event.key ==="ArrowLeft"){
  
    document.getElementById("boxA").style.left =parseInt(document.getElementById("boxA").style.left)-speedX+"px";   
  }
})
}