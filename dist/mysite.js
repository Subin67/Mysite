function showInfo() {
  const name = document.getElementById("name").value || "N/A";
  const email = document.getElementById("email").value || "N/A";
  const message = document.getElementById("message").value || "N/A";

  const infoDiv = document.getElementById("userInfo");

  infoDiv.style.display = "block";
  infoDiv.innerHTML = `
    <h4>Your Information:</h4>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  

}
