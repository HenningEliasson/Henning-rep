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

var z = document.getElementById("myAudio3"); 
var za = document.getElementById("myAudio3.1"); 
var zb = document.getElementById("myAudio3.2"); 
var zb = document.getElementById("myAudio3.3"); 

function playAudio3() { 
  z.play(); 
} 