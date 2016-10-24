var up = $("#monster")

function move() {
  var yLocation = up.css("margin-top")
  up.css("margin-top", "yLocation + 50")
}

move()
