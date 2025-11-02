document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Registration successful!";

  const data = {
    fullName,
    age: document.getElementById("age").value,
    phone: document.getElementById("phone").value,
    email,
    provider: document.getElementById("provider").value,
    policyNumber: document.getElementById("policyNumber").value,
    username: document.getElementById("username").value
  };

  console.log("Patient Registration Data:", data);
});
