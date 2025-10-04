// ===============================
// Part 1: Event Handling
// ===============================

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById("toggleModeBtn");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Counter Feature
let counter = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});

// ===============================
// Part 2: Collapsible FAQ
// ===============================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent actual submission

    let valid = true;

    // Name validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Success message
    if (valid) {
        document.getElementById("formSuccess").textContent = "Form submitted successfully!";
        form.reset();
    } else {
        document.getElementById("formSuccess").textContent = "";
    }
});
