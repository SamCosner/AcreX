function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

function submitEmail() {
  const emailInput = document.getElementById('emailInput');
  const messageDiv = document.getElementById('message');
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    messageDiv.textContent = "✅ Thank you! You'll receive updates soon.";
    messageDiv.className = "message success";
    emailInput.value = "";
  } else {
    messageDiv.textContent = "❌ Please enter a valid email address.";
    messageDiv.className = "message error";
  }
}
