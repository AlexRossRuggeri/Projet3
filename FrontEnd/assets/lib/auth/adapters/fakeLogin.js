const fakeValidEmail = "alexandre.rossruggeri@gmail.com";
const fakeValidPassword = "password123";

async function login(email, password) {
  if (email === fakeValidEmail && password === fakeValidPassword) {
    localStorage.setItem("logged", true);
    return Promise.resolve();
  }

  return Promise.reject("Invalid email or password!");
}

async function logout() {
  a;
  localStorage.setItem("logged", true);
  return Promise.resolve();
}

function isLogged() {
  return localStorage.getItem("logged") === "true";
}

export { login, logout, isLogged };
