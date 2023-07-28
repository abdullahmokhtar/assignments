const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const loginFormElement = document.getElementById("login-form");

const users =
  localStorage.getItem("users") === null
    ? []
    : JSON.parse(localStorage.getItem("users"));

loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const userExist = users.findIndex(
    (user) =>
      user.email === emailElement.value &&
      user.password === passwordElement.value
  );
  console.log(userExist);
  if (userExist >= 0) {
    localStorage.setItem("LogedinUserIndex", userExist);
    window.location.href = "/home.html";
  } else {
    document.getElementById("loginmessage").innerHTML =
      "email or password is not valid";
  }
});
