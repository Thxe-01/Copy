let score = 0;
const audio = new Audio('popsound.mp3');

document.getElementById("btn").addEventListener("click",function scoreup() {
  document.body.style.backgroundImage = "url('pop.jpg')";
  audio.play();
  audio.currentTime = 0;

  setTimeout(()=>{
  score++;
  document.getElementById("h1").textContent = score;
  document.body.style.backgroundImage = "url('cat.jpg')";
  },100);

});

document.getElementById("reset").addEventListener("click",function scorereset() {
  score = 0;
  document.getElementById("h1").textContent = score;
});