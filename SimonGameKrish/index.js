var started=false;
var level=0;
var userselected=[];
var gameselected=[];
$(document).keydown(function(){
           $(".game-pallet").removeClass("hide");
if(!started){
  $(".game-heading-content").text("LEVEL-"+level)
      $(".game-pallet").fadeIn();
  playsound("blink");
randomButton();
started=true;
}
});

$(".grid-item").click(function(){

var butclassname=this.className;
blink(butclassname.split(" ")[0]);
playsound("blink");
var usel=this.id;
userselected.push(usel);
checkAnswer(userselected.length-1);

  });

  function checkAnswer(currentVal){
    if(userselected[currentVal]===gameselected[currentVal]){
    if(gameselected.length===userselected.length){
      setTimeout(function(){
      randomButton();
      },1000)

    }
  }else{
    playsound("fail");
     $(".game-pallet").addClass("hide");
    $(".game-heading-content").text("GAME OVER-PRESS ANY KEY ON KEYBOARD TO PLAYAGAIN");
    startover();
  }
  }

  function startover(){
    gameselected=[];
    level=0;
    started=false;

  }

function randomButton(){
    userselected=[];
    level++;
    $(".game-heading-content").text("LEVEL-"+level)
  var n=(Math.floor(Math.random()*4)+1);
var grid_item="grid-item"+n;
blink(grid_item);
var selected=$("."+grid_item).attr("id");
gameselected.push(selected);
}

function playsound(sound){
  var audio= new Audio(sound+".mp3");
  audio.play();
}

function blink(classname){
  $("."+classname).addClass("blink-grid");
  setTimeout(function(){
  $("."+classname).removeClass("blink-grid");
  },300);


}
