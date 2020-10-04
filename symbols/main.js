function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    return characters.charAt(Math.floor(Math.random() * charactersLength));;
 }



function randomize(){
    document.body.innerHTML = "";
    document.body.innerHTML +='<div id="flexWrap">';
    for(i=0;i<16;i++){
        document.getElementById("flexWrap").innerHTML +='<div id="' + i + '">' + makeid() + '</div>'
        e = Math.floor(Math.random()*10) +1;
        if(e==1){
            document.getElementById(i).style.color = "#FF0000";
        } else if(e == 10){
            document.getElementById(i).style.color = "#00FF00";
        }
        
    }
    document.body.innerHTML +='</div>';
}
randomize();
setInterval(randomize, 500);

