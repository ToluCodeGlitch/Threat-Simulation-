function startMission() {
  document.getElementById("mission-brief").classList.remove("active");
  document.getElementById("scenario-1").classList.add("active");
}

function handleChoice(option) {
  document.getElementById("scenario-1").classList.remove("active");
  document.getElementById("feedback").classList.add("active");

  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");

  if (option === "B") {
    resultTitle.innerText = "✅ Mission Success";
    resultText.innerText = "Excellent judgment. Reporting the email protects the organization and starts an internal investigation.";
    localStorage.setItem("mission1", "success");
  } else {
    resultTitle.innerText = "❌ Mission Failed";
    resultText.innerText = "That was a phishing attack. You exposed company credentials. Stack Limited's security has been compromised.";
    localStorage.setItem("mission1", "fail");
  }
}

function nextMission() {
  // Add next mission logic or display "More Coming Soon" for now
  alert("Next mission coming soon...");
}
