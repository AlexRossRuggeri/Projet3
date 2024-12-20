import { authService } from "./lib/dependencies.js";

const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  errorMessage.textContent = " ";

  const email = document.querySelector("form input#email").value;
  const password = document.querySelector("form input#password").value;

  console.log(email, password);

  try {
    await authService.login(email, password);
    window.location.href = "./index.html";
  } catch (error) {
    errorMessage.textContent =
      error.message || "Erreur dans l’identifiant ou le mot de passe";
  }
});
