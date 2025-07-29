function startSimulation() {
  localStorage.setItem("score", "0");
  window.location.href = "scenario1.html";
}

function choose(action, point, nextPage) {
  let score = parseInt(localStorage.getItem("score")) || 0;
  score += point;
  localStorage.setItem("score", score);
  window.location.href = nextPage;
}

function restartSimulation() {
  localStorage.removeItem("score");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const scoreDisplay = document.getElementById("score");
  if (scoreDisplay) {
    const score = parseInt(localStorage.getItem("score")) || 0;
    scoreDisplay.textContent = `Your Final Score: ${score}/3`;
  }
});
