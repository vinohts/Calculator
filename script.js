// ===============================
// CALCULATOR LOGIC
// ===============================

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

// ===============================
// THEME TOGGLER
// ===============================

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

if (themeToggleBtn) {
  themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
  };
}

// ===============================
// API CALL SECTION (SAFE ADDITION)
// ===============================

const apiBtn = document.getElementById("apiCallBtn");
const apiResponse = document.getElementById("apiResponse");

// Production API
const API_BASE = "https://api.itops.fun";

if (apiBtn) {
  apiBtn.addEventListener("click", async () => {

    apiResponse.style.display = "block";
    apiResponse.innerText = "Connecting to API...";

    try {
      const response = await fetch(`${API_BASE}/health`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      apiResponse.innerText = `API Status: ${data.status}`;

    } catch (error) {
      apiResponse.innerText = "API Error";
      console.error("API CALL ERROR:", error);
    }

    setTimeout(() => {
      apiResponse.style.display = "none";
    }, 5000);

  });
}
