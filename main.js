var player = document.getElementById("player");
var block = document. getElementById("object");
var game_state= true;

function jump(block_position){
  var player_position=parseInt(window.getComputedStyle(player).getPropertyValue("top"));
  
  var block_position=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
console.log(player_position);
player.style.animation = "jumped 2s";
  setTimeout(function(){
player.style.animation = "";
},1000);
}
alert("hello");
console.log("hlli");

var game_over= setInterval(function(){
  var block_position = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

var player_position=parseInt(window.getComputedStyle(player).getPropertyValue("top"));

if (player_position<=100 && block_position<=80){
console.log("game over");
}


},10)