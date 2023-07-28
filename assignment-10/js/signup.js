const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const signupFormElement = document.getElementById("signup-form");
const messageElement = document.getElementById("message");

const users =
  localStorage.getItem("users") === null
    ? []
    : JSON.parse(localStorage.getItem("users"));

nameElement.addEventListener("keydown", () => {});

const nameIsValid = () => {
  if (nameElement.value.trim().length >= 3) {
    nameElement.classList.add("is-valid");
    nameElement.classList.remove("is-invalid");
    return true;
  } else {
    nameElement.classList.remove("is-valid");
    nameElement.classList.add("is-invalid");
    return false;
  }
};

const emailIsValid = () => {
  if (
    emailElement.value.trim().includes("@") &&
    users.findIndex((user) => user.email === emailElement.value) === -1
  ) {
    emailElement.classList.add("is-valid");
    emailElement.classList.remove("is-invalid");
    return true;
  } else {
    if (users.findIndex((user) => user.email === emailElement.value) !== -1) {
      messageElement.innerHTML = "email is already in use";
    }
    emailElement.classList.remove("is-valid");
    emailElement.classList.add("is-invalid");
    return false;
  }
};

const passwordIsValid = () => {
  if (passwordElement.value.trim().length >= 6) {
    passwordElement.classList.add("is-valid");
    passwordElement.classList.remove("is-invalid");
    return true;
  } else {
    passwordElement.classList.remove("is-valid");
    passwordElement.classList.add("is-invalid");
    return false;
  }
};

signupFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameIsValid() || !emailIsValid() || !passwordIsValid()) {
    return;
  }
  const user = {
    name: nameElement.value,
    email: emailElement.value,
    password: passwordElement.value,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "/index.html";
});
