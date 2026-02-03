const CORRECT_PASSWORD = "yourpassword";

// Auto-login
if (localStorage.getItem("pg3Access") === "true") {
  window.location.href = "pg3.html";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;
  const error = document.getElementById("error");

  if (username !== "" && password === CORRECT_PASSWORD) {

    if (remember) {
      localStorage.setItem("pg3Access", "true");
      localStorage.setItem("pg3User", username);
    }

    window.location.href = "pg3.html";

  } else {
    error.style.display = "block";
  }
}
