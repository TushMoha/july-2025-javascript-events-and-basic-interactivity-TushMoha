// ============================
// PART 1: Event Handling
// ============================

// Click event example
document.getElementById("click-btn").addEventListener("click", function () {
  document.getElementById("click-msg").textContent =
    "🎉 You clicked the button once!";
});

// Mouseover and keyup event example
let hoverInput = document.getElementById("hover-input");
hoverInput.addEventListener("mouseover", function () {
  document.getElementById("hover-msg").textContent =
    "👆 You hovered over the input!";
});
hoverInput.addEventListener("keyup", function (event) {
  document.getElementById("hover-msg").textContent =
    "⌨️ You typed: " + event.target.value;
});

// Double-click event example
document.getElementById("dbl-btn").addEventListener("dblclick", function () {
  document.getElementById("dbl-msg").textContent =
    "🔥 You double-clicked the button!";
});

// ============================
// PART 2: Interactive Elements
// ============================

// Feature 1: Light/Dark mode toggle
document.getElementById("mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter game with increment, decrement, reset
let counter = 0;
let counterDisplay = document.getElementById("counter");

document.getElementById("increment-btn").addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("decrement-btn").addEventListener("click", function () {
  counter--;
  counterDisplay.textContent = counter;
});
document.getElementById("reset-btn").addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
});

// Feature 3: Collapsible FAQ section
let faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    let answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.querySelector("span").textContent = "+";
    } else {
      answer.style.display = "block";
      question.querySelector("span").textContent = "-";
    }
  });
});

// ============================
// PART 3: Form Validation
// ============================

document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form refresh

  // Grab inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();

  // Error spans
  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let confirmError = document.getElementById("confirm-error");
  let formSuccess = document.getElementById("form-success");

  // Reset errors and success message
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Validate name
  if (name.length < 2) {
    nameError.textContent = "❌ Name must be at least 2 characters long.";
    isValid = false;
  }

  // Validate email using regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "❌ Please enter a valid email address.";
    isValid = false;
  }

  // Validate password (min 6 chars, at least one number and one uppercase letter)
  let passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
  if (!password.match(passwordPattern)) {
    passwordError.textContent =
      "❌ Password must be 6+ chars, contain a number and an uppercase letter.";
    isValid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    confirmError.textContent = "❌ Passwords do not match.";
    isValid = false;
  }

  // Final check
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    document.getElementById("signup-form").reset();
  }
});
