var player = $("#player")

function moveDown() {
  player.css("margin-top", "+=1");
}

function moveRight() {
  player.css("margin-left","+=5");
}

function moveLeft() {
  player.css("margin-left","-=5");
}

$(document).keydown(function(e) {
  if(e.which == 65) {
    moveLeft();
    console.log("hi")
  }
  if(e.which == 68) {
    moveRight();
  }
});

