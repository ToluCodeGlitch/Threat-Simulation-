const clickSound = document.getElementById("click-sound");
const successSound = document.getElementById("success-sound");
const failSound = document.getElementById("fail-sound");

const scenarios = [
  {
    text: "🚨 Multiple failed login attempts on the CEO’s account from suspicious IPs.",
    choices: [
      { text: "Disable the account immediately", correct: true },
      { text: "Ignore it", correct: false },
      { text: "Wait and monitor", correct: false }
    ]
  },
  {
    text: "📧 A user gets an email to 'urgently update' bank info via a link.",
    choices: [
      { text: "Inspect the link & headers", correct: true },
      { text: "Click the link", correct: false },
      { text: "Delete it", correct: false }
    ]
  },
  {
    text: "💾 Developer installs unknown plugins on production servers.",
    choices: [
      { text: "Isolate system & report", correct: true },
      { text: "Let them continue", correct: false },
      { text: "Ignore it", correct: false }
    ]
  },
  {
    text: "🛑 A ransomware message pops up on a shared drive.",
    choices: [
      { text: "Disconnect & begin incident response", correct: true },
      { text: "Try deleting the file", correct: false },
      { text: "Ignore and reboot", correct: false }
    ]
  }
];

let current = 0;
let score = parseInt(localStorage.getItem("simScore")) || 0;

function loadScenario() {
  const s = scenarios[current];
  document.getElementById("scenario").textContent = s.text;
  document.getElementById("feedback").textContent = "";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  s.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => handleChoice(choice.correct);
    choicesDiv.appendChild(btn);
  });

  updateScore();
}

function handleChoice(correct) {
  clickSound.play();
  const feedback = document.getElementById("feedback");

  if (correct) {
    successSound.play();
    feedback.textContent = "✅ Correct response!";
    score += 10;
  } else {
    failSound.play();
    feedback.textContent = "❌ Not ideal. Risk increased.";
    score -= 5;
  }

  localStorage.setItem("simScore", score);
  current = (current + 1) % scenarios.length;

  setTimeout(loadScenario, 2000);
}

function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

window.onload = loadScenario;
