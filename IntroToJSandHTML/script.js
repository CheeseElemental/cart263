window.onload = setup;
function setup(){
    //let ptagWithIdOne = document.getElementById("one");
    //querySelector --> 1 element
    let ptagWithIdOne = document.querySelector("#one");
    ptagWithIdOne.style.backgroundColor="orange";

   // console.log (ptagWithIdOne.innerHTML);
    ptagWithIdOne.innerHTML = "<h1> newer header</h1>";
   // console.log (ptagWithIdOne.innerHTML);

    //querySelectorAll -> gives back all as an array
    let ptagsWithclassSpecial = document.querySelectorAll(".specialp");
    ptagsWithclassSpecial[2].style.backgroundColor = "green"

    let allPs = document.querySelectorAll("p");
    console.log(allPs[0])
    console.log(allPs[1])
    console.log(allPs[2])
    console.log(allPs[3])
    console.log(allPs[4])
   
    // allPs[0].innerHTML="<h3> newer smaller header</h3>"
    
    // allPs[1].innerHTML="<h3> newer smaller header</h3>"
    
    // allPs[2].innerHTML="<h3> newer smaller header</h3>"
    
    // allPs[3].innerHTML="<h3> newer smaller header</h3>"
    
    // allPs[4].innerHTML="<h3> newer smaller header</h3>"

    
    // allPs[5].innerHTML="<h3> newer smaller header</h3>"

    for(let i=0; i<6; i=i+1 )
    {
       console.log(i);
       console.log("here")
      // allPs[i].innerHTML="<h3> newer smaller header</h3>"
    }

    let buttonClicked = false
    document.querySelector("#button").addEventListener("click",buttonAction)
    document.querySelector("#one").addEventListener("click",buttonAction_01)
    document.querySelector(".specialp").addEventListener("click",buttonAction_02)

//THIS WILL BE IMPORTANT FOR SETTING UP BOOLEANS
    function buttonAction () {
  console.log ("clicked")
  if (buttonClicked===false){
  document.querySelector("#one").style.backgroundColor="pink"
  buttonClicked=true
}
else {
  document.querySelector("#one").style.backgroundColor="orange"
  buttonClicked=false
}
}

  function buttonAction_02 (){
    if (buttonClicked===false){
      let r=Math.random()*255
      let g=Math.random()*133
      let b=Math.random()*255
      document.querySelector(".specialp").style.backgroundColor=`rgb(${r}, ${g}, ${b})`
    }  
  }

function buttonAction_01 () {
  console.log ("clicked again")
}

}
