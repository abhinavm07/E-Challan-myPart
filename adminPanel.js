const dashboardEL = document.getElementById("dashboard-btn");
const historyEL = document.getElementById("history-btn");
const logoutEL = document.getElementById("logout-btn");

dashboardEL.addEventListener("click", dashboard);
historyEL.addEventListener("click", history);
logoutEL.addEventListener("click", logout);

function dashboard() {
  console.log("Button Clicked");
}

function history() {
  console.log("History Button clicked");
}

function logout() {
  console.log("Bye Bitch");
}

const challanEl = document.getElementById("challan-id");

const licenseEl = document.getElementById("license-num");

const previewChallanEl = document.getElementById("previewChallanID");

let userInput = "";

licenseEl.addEventListener("click", challan);
function challan() {
  if (userInput != challanEl.value) {
    previewChallanEl.textContent = `Challan ID : ${challanEl.value}`;
    userInput = challanEl.value;
  }
}
