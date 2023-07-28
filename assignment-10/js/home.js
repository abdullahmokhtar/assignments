const welcomeElement = document.querySelector("h1");
const logoutElement = document.querySelector(".nav-link");

const users = JSON.parse(localStorage.getItem("users"));

welcomeElement.innerHTML =
  "Welcome " + users[localStorage.getItem("LogedinUserIndex")].name;

  logoutElement.addEventListener("click", ()=>{
    localStorage.removeItem("LogedinUserIndex");
    window.location.href= "/index.html";
  })
