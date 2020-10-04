var width=window.innerWidth;
var height=window.innerHeight;
var basesize=20;
var frame=0;
var separation=80;
var col;
function setup() {
    var myCanvas = createCanvas(width,height);
    myCanvas.parent("container");
    textFont("Space Mono");
    textAlign(CENTER);
}
  
function draw() {
    width=window.innerWidth;
    height=window.innerHeight;
    resizeCanvas(width,height);
    noStroke();
    background(0);
    frame+= 0.01;

    for(e=0;e<30;e+=1){
        col = (e/30)*255;
        fill(color(col,col,col))
        for(i=-10;i<30;i+=1){
            circle(i*separation + e*17, ((sin(i+(e/7)+frame)*50)+height-window.innerHeight/1.25) + e*20, basesize);
        }
    }
    strokeWeight(20);
    stroke(0);
    fill(255);
    textSize(100);
    text('soler98012', width/2, height/2);

}