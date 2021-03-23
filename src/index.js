import './sass/main.scss';

const form = document.querySelector('#form');
const username = form.querySelector('#username');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const password2 = form.querySelector('#password2');

function getFormControl(input) {
  return input.parentElement;
}

function getLabel(input) {
  return getFormControl(input).querySelector('label').textContent;
}

function showError(input, message) {
  const formControl = getFormControl(input);
  formControl.className = 'form-control error';

  const errorMessage = formControl.querySelector('small');
  errorMessage.textContent = message;
}

function showSuccess(input) {
  const formControl = getFormControl(input);
  formControl.className = 'form-control success';
}
function checkForRequired(inputs) {
  inputs.map((input) => {
    if (!input.value.trim()) {
      showError(input, `${getLabel(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, minLength, maxLength) {
  const inputLength = input.value.length;
  if (inputLength < minLength) {
    showError(
      input,
      `${getLabel(input)} should be at least ${minLength} characters long`
    );
  } else if (inputLength > maxLength) {
    showError(
      input,
      `${getLabel(input)} should not be more than ${maxLength} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkEmail(input) {
  const emailRegex = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;

  if (emailRegex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkPassword(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Password do not match');
  } else {
    showSuccess(confirmPassword);
  }
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkForRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 3, 6);
  checkEmail(email);
  checkPassword(password, password2);
});
