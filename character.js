var player = $("#player")

function moveDown() {
  player.css("margin-top", "+=1");
}

function moveRight() {
  player.css("margin-left","+=50");
}

function moveLeft() {
  player.css("margin-left","-=50");
}

document.onkeydown = function(e){
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===64){
    moveLeft();
  }
}