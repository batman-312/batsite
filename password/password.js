const SITE_PASSWORD = "PV=nRT";

document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("password-screen");
  const input  = document.getElementById("password-input");
  const error  = document.getElementById("password-error");

  if (localStorage.getItem("siteUnlocked") === "yes") {
    screen.style.display = "none";
  }

  window.checkPassword = function () {
    if (input.value === SITE_PASSWORD) {
      localStorage.setItem("siteUnlocked", "yes");
      screen.style.display = "none";
    } else {
      error.textContent = "Wrong password 💔";
    }
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  });
});
