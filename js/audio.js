var x = document.getElementById("myAudio");

function playAudio1() {
  x.play();
  i = 1
}

function chang1() {
  document.getElementById("nr1").style.visibility = "hidden";
  document.getElementById("nr2").style.visibility = "visible";
}

var y = document.getElementById("myAudio2");

function playAudio2() {
  y.play();
}

function chang2() {
  document.getElementById("nr2").style.visibility = "hidden";
  document.getElementById("nr3").style.visibility = "visible";
  document.getElementById("pil").style.visibility = "visible";
}

var d = document.getElementById("myAudio3");
var a = document.getElementById("myAudio3.1");
var b = document.getElementById("myAudio3.2");
var c = document.getElementById("myAudio3.3");

const characters = '0123';

function generateString(length) {
  console.log("Has entered function")
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result)
  return result;
}
bigArray = [d, a, b, c]




function playAudio3() {
  var inter = generateString(1);
  var player = Number(inter);
  bigArray[player].play();
} 