document.getElementById("green-btn").addEventListener("click", notwork);

function notwork() {
  alert("Funkar inte knappen?");
  alert("Testa denna");
  document.getElementById("other-btn").style.visibility = "visible";
};

document.getElementById("other-btn").addEventListener("click", change);

function change() {
  window.location.href = 'megaräknare.html';
}