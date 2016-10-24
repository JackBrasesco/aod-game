var player = $("#player")

function moveDown() {
  player.css("margin-top", "+=1");
}

function moveRight() {
  player.css("margin-left","+=1");
}

function moveLeft() {
  player.css("margin-left","-=50");
}

function keyboard(event) {
  switch (event.keyCode) {
    case 68:
      moveRight();
    break;
      
    case 65:
      moveLeft();
    break;
  }
}