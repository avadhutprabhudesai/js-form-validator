(()=>{"use strict";var __webpack_modules__={579:()=>{eval("\nconst form = document.querySelector('#form');\nconst username = form.querySelector('#username');\nconst email = form.querySelector('#email');\nconst password = form.querySelector('#password');\nconst password2 = form.querySelector('#password2');\n\nfunction getFormControl(input) {\n  return input.parentElement;\n}\n\nfunction getLabel(input) {\n  return getFormControl(input).querySelector('label').textContent;\n}\n\nfunction showError(input, message) {\n  const formControl = getFormControl(input);\n  formControl.className = 'form-control error';\n  const errorMessage = formControl.querySelector('small');\n  errorMessage.textContent = message;\n}\n\nfunction showSuccess(input) {\n  const formControl = getFormControl(input);\n  formControl.className = 'form-control success';\n}\n\nfunction checkForRequired(inputs) {\n  inputs.map(input => {\n    if (!input.value.trim()) {\n      showError(input, \"\".concat(getLabel(input), \" is required\"));\n    } else {\n      showSuccess(input);\n    }\n  });\n}\n\nfunction checkLength(input, minLength, maxLength) {\n  const inputLength = input.value.length;\n\n  if (inputLength < minLength) {\n    showError(input, \"\".concat(getLabel(input), \" should be at least \").concat(minLength, \" characters long\"));\n  } else if (inputLength > maxLength) {\n    showError(input, \"\".concat(getLabel(input), \" should not be more than \").concat(maxLength, \" characters\"));\n  } else {\n    showSuccess(input);\n  }\n}\n\nfunction checkEmail(input) {\n  const emailRegex = /^(([^\\s\"(),.:;<>@[\\\\\\]]+(\\.[^\\s\"(),.:;<>@[\\\\\\]]+)*)|(\".+\"))@((\\[(?:\\d{1,3}\\.){3}\\d{1,3}])|(([\\dA-Za-z-]+\\.)+[A-Za-z]{2,}))$/;\n\n  if (emailRegex.test(input.value)) {\n    showSuccess(input);\n  } else {\n    showError(input, 'Email is not valid');\n  }\n}\n\nfunction checkPassword(password, confirmPassword) {\n  if (password.value !== confirmPassword.value) {\n    showError(confirmPassword, 'Password do not match');\n  } else {\n    showSuccess(confirmPassword);\n  }\n}\n\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  checkForRequired([username, email, password, password2]);\n  checkLength(username, 3, 15);\n  checkLength(password, 3, 6);\n  checkEmail(email);\n  checkPassword(password, password2);\n});\n\n//# sourceURL=webpack://js-form-validator/./src/index.js?")}},__webpack_exports__={};__webpack_modules__[579]()})();