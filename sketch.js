var numbers = [15, 22, 48, 37];
var habits = ["choice", "voice", "hustle", "grit", "growth", "optimism", "consideration"]; 
var j = 0;


function setup(){
    createCanvas(600,400);
    p1 = new Pacman(300,200);
}

function paint(x,y){
   ellipse(x,y,50,50); 
   ellipse(x,y,100,100);
}

function draw(){
    background(64, 120, 64);
   p1.display();
   p1.move();
   p1.boundary();
   
   
   for(var i = 0; i < 4; i++){
    ellipse((i+1)*100,200,numbers[i], numbers[i]
    );
   }
  fill(255);
  textSize(50);
  text(habits[j], 230, 150);
}

function mousePressed(){
    j ++;
    if(j==7){
        j=0;
    }
}


 if(mouseIsPressed>200){
        background(255,0,200);   
}

function Pacman(x,y){
    this.x = x;
    this.y = y;
    this.radB = 30;
    this.radT = 305;
    this.rotation = 0;
    this.display = function(){
        fill(255,255,0);
        //ellipse(this.x, this.y, 40, 40);
        arc(this.x, this.y, 40, 40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
    };
  this.move = function(){
      if(keyIsDown(UP_ARROW)){
          this.y = this.y -= 5;
      }
      if(keyIsDown(DOWN_ARROW)){
          this.y = this.y += 5;
      }
      if(keyIsDown(RIGHT_ARROW)){
          this.x = this.x += 5;
      }
      if(keyIsDown(LEFT_ARROW)){
          this.x = this.x -= 5;
      }
  };
  this.boundary = function(){
      if(this.x > width){
          this.x = 0;
          }
      if(this.x < 0){
          this.x = width;
      }
      if(this.y > height){
          this.y = 0;
      }
      if(this.y < 0){
         this.y = height;
      }
  }
}