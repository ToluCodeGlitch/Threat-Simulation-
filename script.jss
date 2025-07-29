// Load previous state if it exists
let simulationState = {
  currentScenario: 1,
  decisions: [],
  score: 0
};

function loadSimulation() {
  const saved = localStorage.getItem("simulationState");
  if (saved) {
    simulationState = JSON.parse(saved);
  }
}

function startSimulation() {
  // Reset simulation when starting fresh
  simulationState = {
    currentScenario: 1,
    decisions: [],
    score: 0
  };
  localStorage.setItem("simulationState", JSON.stringify(simulationState));
  window.location.href = "scenario1.html";
}

function logDecision(decisionText, scoreImpact = 0) {
  // Log current decision
  simulationState.decisions.push({
    scenario: simulationState.currentScenario,
    decision: decisionText
  });

  simulationState.score += scoreImpact;
  localStorage.setItem("simulationState", JSON.stringify(simulationState));
}

function goToNextScenario() {
  simulationState.currentScenario++;
  localStorage.setItem("simulationState", JSON.stringify(simulationState));
  const nextPage = `scenario${simulationState.currentScenario}.html`;

  // Check if the next scenario exists by attempting to fetch the page
  fetch(nextPage)
    .then(response => {
      if (response.ok) {
        window.location.href = nextPage;
      } else {
        window.location.href = "summary.html"; // End screen
      }
    })
    .catch(error => {
      console.error("Error loading scenario:", error);
      window.location.href = "summary.html";
    });
}

function getSimulationState() {
  return simulationState;
}

// Optional: Reset simulation
function resetSimulation() {
  localStorage.removeItem("simulationState");
  window.location.href = "index.html";
}
