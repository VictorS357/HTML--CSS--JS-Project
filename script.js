const loginContainer = document.querySelector('.js-login-container');
const createAccContainer = document.querySelector('.js-create-container');
const forgotContainer = document.querySelector('.js-forgot-container');

const createAccLink = document.querySelector('.js-create-acc-link');
const forgotLink = document.querySelector('.js-forgot-link');
const loginLink = document.querySelector('.js-sign-in-link');

function switchToCreatePage() {
  loginContainer.classList.remove('active');
  forgotContainer.classList.remove('active');
  createAccContainer.classList.add('active');
}

function switchToLoginPage() {
  loginContainer.classList.add('active');
  forgotContainer.classList.remove('active');
  createAccContainer.classList.remove('active');
}

function switchToForgotPage() {
  loginContainer.classList.remove('active');
  forgotContainer.classList.add('active');
  createAccContainer.classList.remove('active');
}

createAccLink.addEventListener('click', () => {
  switchToCreatePage();
});

loginLink.addEventListener('click', () => {
  switchToLoginPage();
});

forgotLink.addEventListener('click', () => {
  switchToForgotPage();
});
