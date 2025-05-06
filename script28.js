var name = document.querySelector("#in");
var text = document.getElementById("text");
document.querySelector("#in").addEventListener("keyup", myDown);

function myDown() {
  document.querySelector("#in").removeEventListener("keyup", myDown);
}
