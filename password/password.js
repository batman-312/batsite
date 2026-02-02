const SITE_PASSWORD = "PV=nRT"; // <-- change this

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("password-error");

  if (input === SITE_PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
  } else {
    error.textContent = "Wrong password 💔";
  }
}
