/// <reference path="./p5.global-mode.d.ts" />
let bubbles = [];
var infection_count = 3; 
var b;
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    let x = random(50,500);
    let y = random(20,500); 
    let r = 10;
    bubbles[i] = new Bubble(x, y, r);
  }
  for (let j = 0; j < 3; j++) {
      bubbles[j].infect();

      
  }
//   b= createButton('launch')
//  b.mousePressed(launch());
}
// function launch() {
//   for (let j = 0; j < 3; j++) {
//       bubbles[j].infect();

      
//   }
// }

function draw() {
  background(0);

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
     let  ret=b.changeColor(255);
     if(ret===true){
         infection_count++;
     }
    }
  }
//   for (let b of bubbles){
//       if(b.infected()){
//           infection_count=infection_count+1;
//       }
//   }


stroke(255);
fill(0);
rect(400, 557, 200, 40);
noStroke();
fill(255);
textSize(20)
text('Infected people: '+infection_count,410,585);
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if(other.brightness===255){
        return d < this.r + other.r
    }
    ;
    // if (d < this.r + other.r) {
    //   return true;
    // } else { 
    //   return false;
    // }
  }

  changeColor() {
     if(this.brightness===0){
         this.brightness = 255;
         return true;
     } 
     else{
         return false;
     }
    
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

  show() {
    stroke(255);
    // strokeFill(this.brightness,0,0);
    strokeWeight(4);
    fill(this.brightness,0,0,);
    ellipse(this.x, this.y, this.r * 2);
  }


  infect(){
      this.brightness= 255;
  }

  infected(){
      if (this.brightness===255) {
          return true;
      }
      else{
          return false;
      }
  }

}

