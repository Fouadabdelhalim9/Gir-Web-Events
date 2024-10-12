let activeSteps = JSON.parse(localStorage.getItem("activeSteps")) || [];

const steps = document.querySelectorAll(".track-status .step");

const updateSteps = () => {
  steps.forEach((step, index) => {
    if (activeSteps.includes(index)) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
};

updateSteps();

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    if (activeSteps.includes(index)) {
      activeSteps = activeSteps.filter((i) => i !== index);
    } else {
      activeSteps.push(index);
    }

    // تحديث الـ DOM والـ localStorage
    updateSteps();
    localStorage.setItem("activeSteps", JSON.stringify(activeSteps));
  });
});
/////////////////////////////////////////////////////////
// Popup
// Function to open the popup
function openFeedbackPopup() {
  document.getElementById("feedbackPopup").style.display = "flex";
}

// Function to close the popup
function closeFeedbackPopup() {
  document.getElementById("feedbackPopup").style.display = "none";
}

// Handle form submission
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    closeFeedbackPopup();
    alert("Thank you for your feedback!");
  });
