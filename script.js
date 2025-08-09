// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu when clicking a nav link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Form submission with simple validation and feedback
const form = document.getElementById('issue-form');
const responseMessage = document.querySelector('.form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation check
  if (
    !form.name.value.trim() ||
    !form.email.value.trim() ||
    !form.device.value.trim() ||
    !form.description.value.trim()
  ) {
    responseMessage.style.color = '#e53935'; // red
    responseMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Email basic validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.email.value.trim())) {
    responseMessage.style.color = '#e53935';
    responseMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate form submission (since backend is not provided)
  responseMessage.style.color = '#4caf50';
  responseMessage.textContent = 'Submitting your issue...';

  setTimeout(() => {
    responseMessage.textContent = 'Thank you! Your issue has been submitted.';
    form.reset();
  }, 1500);
});
