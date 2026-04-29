const loginContainer = document.querySelector('.js-login-container');
const createAccElement = document.querySelector('.js-create-acc-link');
const createAccContainer = document.querySelector('.js-create-container');

function switchToCreatePage() {
  if (loginContainer.classList.contains('active')) {
    loginContainer.classList.remove('active');
    createAccContainer.classList.add('active');
  } 
}

createAccElement.addEventListener('click', () => {
  switchToCreatePage();
});







