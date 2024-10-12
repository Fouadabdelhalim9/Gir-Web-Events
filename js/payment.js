// Payment Methods Btns
const creditCardForm = document.getElementById("credit-card-form");
const bankTransferForm = document.getElementById("bank-transfer-form");
const ewalletForm = document.getElementById("ewallet-form");

const creditCardBtn = document.getElementById("creditCardBtn");
const bankTransferBtn = document.getElementById("bankTransferBtn");
const ewalletBtn = document.getElementById("ewalletBtn");

const creditCardImage1 = document.getElementById("creditCardImage1");
const creditCardImage2 = document.getElementById("creditCardImage2");
const paymentImage = document.getElementById("paymentImage");

// Function to display the selected payment method
function setPaymentMethod(method) {
  // Hide all forms
  creditCardForm.style.display = "none";
  bankTransferForm.style.display = "none";
  ewalletForm.style.display = "none";

  // Hide all images
  creditCardImage1.style.display = "none";
  creditCardImage2.style.display = "none";
  paymentImage.style.display = "none";

  // Remove active class from all buttons
  creditCardBtn.classList.remove("active");
  bankTransferBtn.classList.remove("active");
  ewalletBtn.classList.remove("active");

  // Show the selected form and images
  if (method === "creditCard") {
    creditCardForm.style.display = "block";
    creditCardImage1.style.display = "block";
    creditCardImage2.style.display = "block";
    creditCardBtn.classList.add("active");
  } else if (method === "bankTransfer") {
    bankTransferForm.style.display = "block";
    paymentImage.src = "/imgs/k-banktrans.png";
    paymentImage.style.display = "block";
    bankTransferBtn.classList.add("active");
  } else if (method === "ewallet") {
    ewalletForm.style.display = "block";
    paymentImage.src = "/imgs/k-e-wailet.png";
    paymentImage.style.display = "block";
    ewalletBtn.classList.add("active");
  }

  // Save the selected payment method to localStorage
  localStorage.setItem("selectedPaymentMethod", method);
}

// Function to load the saved payment method from localStorage
function loadPaymentMethod() {
  const savedMethod = localStorage.getItem("selectedPaymentMethod");
  if (savedMethod) {
    setPaymentMethod(savedMethod); // Set the saved payment method
  } else {
    setPaymentMethod("creditCard"); // Default to credit card if none is saved
  }
}

// Event listeners for buttons
creditCardBtn.addEventListener("click", () => {
  setPaymentMethod("creditCard");
});

bankTransferBtn.addEventListener("click", () => {
  setPaymentMethod("bankTransfer");
});

ewalletBtn.addEventListener("click", () => {
  setPaymentMethod("ewallet");
});

// Load the saved payment method on page load
window.onload = function () {
  loadPaymentMethod();
};
