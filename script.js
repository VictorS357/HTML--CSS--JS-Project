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
      if (button.id === 'signIn') {
        showNotificationMsg('Login Sucessfull! Redirecting...');
      } else if (button.id === 'createAcc') {
        showNotificationMsg('Account created succesfully! Please check your email.')
      } else {
        showNotificationMsg('Password reset instructions sent to your email.')
      }
    }, 4000);
  });
});

function showNotificationMsg(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    background-color: #10b981;
    color: white;
    position: fixed;
    z-index: 1000;
    top: 20px;
    right: 20px;
    animation: slideInRight 0.5s ease;
    padding: 16px 24px;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    border-radius: 12px;
    font-weight: 600;
  `;

  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

document.querySelectorAll('.js-secondary-btn').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('facebook')) {
      showNotificationMsg('Facebook login initiated!');
    } else if (button.classList.contains('google')) {
      showNotificationMsg('Google login initiated!');
    } else {
      showNotificationMsg('X login initiated!');
    }
  });
});

