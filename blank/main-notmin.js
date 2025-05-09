var canvas;
var ctx;

function resizeCanvas() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function hideUI() {
  $(".app").hide();
}

function fadeInUI() {
  setTimeout(() => {
    $(".app").fadeIn(300);
  }, 1000);
}

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d'); // do whatever
  resizeCanvas();
}

window.onload = init;
window.onresize = resizeCanvas;
