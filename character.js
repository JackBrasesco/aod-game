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

$(document).keydown(function(e) {
  if(e.which == 65) {
    console.log("hi")
  }
});

console.log("Hi")