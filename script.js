const loginContainer = document.querySelector('.js-login-container');
const createAccContainer = document.querySelector('.js-create-container');
const forgotContainer = document.querySelector('.js-forgot-container');

const createAccLink = document.querySelector('.js-create-acc-link');
const forgotLink = document.querySelector('.js-forgot-link');
const loginLink = document.querySelector('.js-sign-in-link');
const loginLink2 = document.querySelector('.js-login-link');

const rightHeaderElement = document.querySelector('.js-right-header');
const rightParagraphElement = document.querySelector('.js-right-p');

function switchToCreatePage() {
  loginContainer.classList.remove('active');
  forgotContainer.classList.remove('active');
  createAccContainer.classList.add('active');

  rightHeaderElement.innerHTML = 'Hello Friend';
  rightParagraphElement.innerHTML = 'Enter your personal details and start your journey with us today';
}

function switchToLoginPage() {
  loginContainer.classList.add('active');
  forgotContainer.classList.remove('active');
  createAccContainer.classList.remove('active');

  rightHeaderElement.innerHTML = 'Hello Friend';
  rightParagraphElement.innerHTML = 'Enter your personal details and start your journey with us today';
}

function switchToForgotPage() {
  loginContainer.classList.remove('active');
  forgotContainer.classList.add('active');
  createAccContainer.classList.remove('active');

  rightHeaderElement.innerHTML = "Don't Worry";
  rightParagraphElement.innerHTML = "We'll help you reset your password and get back to your account safely"
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

loginLink2.addEventListener('click', () => {
  switchToLoginPage();
});

function showLoadingAnimation(loadingText, button, loading) {
  loading.classList.add('show');
  button.querySelector('.btn-text').innerHTML = loadingText;
  button.disabled = true;
}

const loginBtnElement = document.querySelector('.js-sign-btn');
const createBtnElement = document.querySelector('.js-create-btn');
const forgotBtnElement = document.querySelector('.js-forgot-btn');

document.querySelectorAll('.js-submit-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const btnText = button.querySelector('.btn-text');
    const originalText = btnText.innerText;

    if (button.classList.contains('js-sign-btn')) {
      const loading = button.querySelector('.js-loading1');
      showLoadingAnimation('Signing in...', button, loading);
    } else if (button.classList.contains('js-create-btn')) {
      const loading = button.querySelector('.js-loading2');
      showLoadingAnimation('Creating account...', button, loading);
    } else {
      const loading = button.querySelector('.js-loading3');
      showLoadingAnimation('Sending instructions...', button, loading);
    }
    setTimeout(() => {
      btnText.innerHTML = originalText;
      button.querySelectorAll('.loading').forEach((loading) => {
        loading.classList.remove('show');
      });
      button.disabled = false;
    }, 4000);
  });
});

