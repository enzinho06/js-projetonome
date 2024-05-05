function setup() {
    createCanvas(600, 600);
    background("gray");
  }
  
  function draw() {
  
    
    stroke("purple")
    fill("blue")
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 45);
    }
  }