const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

});