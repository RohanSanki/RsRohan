const API_URL = "https://rstechhub.onrender.com/api";

// Register user
async function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  if (data.success) {
    alert("Registration successful! Please login.");
    window.location.href = "login.html";
  } else {
    alert("Error: " + data.error);
  }
}

// Login user
async function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Error: " + data.error);
  }
}
