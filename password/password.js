const SITE_PASSWORD = "PV=nRT"; 

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("password-error");

  if (input === SITE_PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
  } else {
    error.textContent = "Wrong password 💔";
  }
}
if (localStorage.getItem("siteUnlocked") === "yes") {
  document.getElementById("password-screen").style.display = "none";
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("password-error");

  if (input === SITE_PASSWORD) {
    localStorage.setItem("siteUnlocked", "yes");
    document.getElementById("password-screen").style.display = "none";
  } else {
    error.textContent = "Wrong password 💔";
  }
}