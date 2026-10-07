// Scripts
console.log(`Hello world`);

// const collapseElementList = document.querySelectorAll(".collapse");
// const collapseList = [...collapseElementList].map(
//   (collapseEl) => new bootstrap.Collapse(collapseEl),
// );

// Login form elements
const loginNav = document.getElementById("login-nav");
const loginForm = document.getElementById("login-form");
const loginTextFields = document.getElementsByClassName("login-text-field");
const loginButton = document.getElementById("login-button");

// Sign up form elements
const signUpTextFields = document.getElementsByClassName("sign-up-text-field");
const signUpForm = document.getElementById("sign-up-form");
const signUpNav = document.getElementById("sign-up-nav");
const signUpButton = document.getElementById("sign-up-button");

// Switching display between login and signup forms
function defaultView() {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
  loginNav.style.backgroundColor = "#241238";
  loginNav.style.color = "white";
  signUpNav.style.backgroundColor = "transparent";
  signUpNav.style.color = "#8B7E72";
}

window.addEventListener("load", defaultView);

signUpNav.addEventListener("click", () => {
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
  signUpNav.style.backgroundColor = "#241238";
  signUpNav.style.color = "white";
  loginNav.style.backgroundColor = "transparent";
  loginNav.style.color = "#8B7E72";
});

loginNav.addEventListener("click", defaultView);

// Form validation

/* ************* */
// login form
for (let i = 0; i < loginTextFields.length; i++) {
  loginTextFields[i].addEventListener("input", () => {
    loginButton.disabled = false;
    valid = false;
  });
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  for (let i = 0; i < loginTextFields.length; i++) {
    if (loginTextFields[i].value.trim() === "") {
      loginTextFields[i].focus();
      loginTextFields[i].style.border = `1px solid red`;
      valid = false;
      break;
    }
  }

  if (valid) {
    loginForm.submit();

    // fetch("/api/users")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error();
    //     }
    //     return response;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
});

/* ************* */
// Sign up form validation
for (let i = 0; i < signUpTextFields.length; i++) {
  signUpTextFields[i].addEventListener("input", () => {
    signUpButton.disabled = false;
  });
}

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  for (let i = 0; i < signUpTextFields.length; i++) {
    if (signUpTextFields[i].value.trim() === "") {
      signUpTextFields[i].focus();
      signUpTextFields[i].style.border = `1px solid red`;
      valid = false;
      break;
    }
  }

  if (valid) {
    signUpForm.submit();
  }
});
