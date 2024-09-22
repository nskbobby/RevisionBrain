var alldrumbuttonslength=document.querySelectorAll(".drum").length;


for(var i=0;i<alldrumbuttonslength;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",playsound);
  }
  function playsound(){
var clickedButton=this.innerHTML;

switch(clickedButton){
case 'w':
   var aud=new Audio('sounds/crash.mp3');
 aud.play();
 break;
case 'a':
 var aud=new Audio('sounds/kick-bass.mp3');
aud.play();
break;
case 's':
var aud=new Audio('sounds/snare.mp3');
aud.play();
break;
case 'd':
var aud=new Audio('sounds/tom-1.mp3');
aud.play();
break;
case 'j':
var aud=new Audio('sounds/tom-2.mp3');
aud.play();
break;
case 'k':
var aud=new Audio('sounds/tom-3.mp3');
aud.play();
break;
case 'l':
var aud=new Audio('sounds/tom-4.mp3');
aud.play();
}





//     if(this.innerHTML=='w'){
//        var aud=new Audio('sounds/crash.mp3');
//      aud.play();
//   }else if(this.innerHTML=='a'){
//      var aud=new Audio('sounds/kick-bass.mp3');
//    aud.play();
// }
// else if(this.innerHTML=='s'){
//    var aud=new Audio('sounds/snare.mp3');
//  aud.play();
// }
// else if(this.innerHTML=='d'){
//    var aud=new Audio('sounds/tom-1.mp3');
//  aud.play();
// }
// else if(this.innerHTML=='j'){
//    var aud=new Audio('sounds/tom-2.mp3');
//  aud.play();
// }
// else if(this.innerHTML=='k'){
//    var aud=new Audio('sounds/tom-3.mp3');
//  aud.play();
// }
// else if(this.innerHTML=='l'){
//    var aud=new Audio('sounds/tom-4.mp3');
//  aud.play();
// }
  }
