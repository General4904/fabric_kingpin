// Scripts
console.log(`Hello world`);
const messageEmail = document.getElementById("message-email");
const user = document.getElementById("user");

window.addEventListener("load", () => {
  const rawData = localStorage.getItem("userProfile");
  const userData = JSON.parse(rawData);

  user.textContent = userData.firstname;
  messageEmail.textContent = userData.email;
});

// window.addEventListener("load", loadUSer);
