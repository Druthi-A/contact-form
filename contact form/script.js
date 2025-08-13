document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  let isValid = true;

  // Get form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  // Reset messages
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  successMessage.textContent = '';

  // Name validation
  if (nameInput.value.trim() === '') {
    nameInput.nextElementSibling.textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailInput.nextElementSibling.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.nextElementSibling.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    messageInput.nextElementSibling.textContent = 'Message cannot be empty.';
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    // Optionally reset form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
