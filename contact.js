const API_URL = "https://rstechhub.onrender.com/api";

async function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.json();
  if (data.success) {
    alert("Message sent successfully!");
  } else {
    alert("Error: " + data.error);
  }
}
