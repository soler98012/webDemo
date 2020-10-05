var width=window.innerWidth;
var height=window.innerHeight;

setup = function(){
    createCanvas(width,height);
    noStroke();
}



function draw() {
    width=window.innerWidth;
    height=window.innerHeight;
    resizeCanvas(width,height);
    
    var time = millis();
    background(0);
    for(i=0;i<2000;i++){
        x=width/2 + (
            sin(time/2000 + i) * (cos(time/2000)*500 - i + 350)
            );
        y=height/2 + (
            cos(time/2000 + i) * (sin(time/2000)*500 - i + 350)
            );

        circle(x,y,5);
    }

}
