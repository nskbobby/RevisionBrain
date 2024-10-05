function play(){
    console.log("page is fully loaded");
    var randomNumber1;
    var randomNumber2;


        var num=Math.floor(Math.random()*6);
         var num2=Math.floor(Math.random()*6);
            randomNumber1=num;
            randomNumber2=num2;
            if(randomNumber1>randomNumber2){
                document.querySelector("h1").innerHTML="Player 1 Wins";
            }else if(randomNumber1<randomNumber2){
                document.querySelector("h1").innerHTML="Player 2 Wins";
            }else if(randomNumber1==randomNumber2){
                document.querySelector("h1").innerHTML="Draw";
            }
        
        var img1=document.querySelector(".img1");
        var img2=document.querySelector(".img2");
        console.log("./images/dice"+(randomNumber1+1)+".png");
        img1.setAttribute("src","./images/dice"+(randomNumber1+1)+".png");
        img2.setAttribute("src","./images/dice"+(randomNumber2+1)+".png");
        document.querySelector("footer").innerHTML="&copyKrishna";
}
