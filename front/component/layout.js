var currentDomain = window.location.origin || "http://localhost:3000"; // Use current domain or fallback

const getParseData = JSON.parse(localStorage.getItem("data"));
if (getParseData) console.log("getParseData", getParseData);
const isAuthenticated = !!localStorage.getItem("data");

const isAdmin = getParseData ? getParseData.isAdmin : false;
if (getParseData) console.log("isAdmin", isAdmin);

const currentPath = window.location.pathname;

// Rutas públicas que no requieren autenticación
const publicPaths = ["/", "/register/", "/register", "/register/index.html"];

// Verifica si el usuario está autenticado y redirige si es necesario
if (!isAuthenticated && !publicPaths.includes(currentPath)) {
  window.location.href = "/"; // Redirige a la página principal si no está autenticado
}

// Define el contenido del header
const header = /*  */ `
<h1>Shipping App</h1>
${
  publicPaths.includes(currentPath)
    ? ""
    : `
<div class="nav">
    <a role="button" class="contrast" href="/dashboard/"><i class="icon-home"></i></a>
    <a role="button" class="contrast" href="/report/">1 <i class="icon-pencil"></i></a>
    <a role="button" class="contrast" href="/t4_unstuffing/">2 <i class="icon-pencil"></i></a>
    <a role="button" class="contrast" href="/t5_damage/">3 <i class="icon-pencil"></i></a>
    <a role="button" class="contrast" href="/pdf/">4 <i class="icon-pdf"></i></a>
    <a role="button" class="logout" href="#"><i class="icon-logout"> </i><span class="hide-mobile"> Logout</span> </a>
</div>
`
}
`;

// Establece el contenido del header
document.querySelector("header").innerHTML = header;

// Establece el contenido del footer
const footer = `
<p>Created by <a href="https://frankgp.com/contact" target="_blank">Frank GP</a></p>
`;
document.querySelector("footer").innerHTML = footer;

// Agregar clase "active" al enlace correspondiente
document.querySelectorAll(".nav a").forEach((link) => {
  // Si el href del enlace coincide con la ruta actual, agrega la clase 'active'
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

// Lógica para logout
const logoutButton = document.querySelector(".logout");

if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault(); // Previene la redirección predeterminada
    localStorage.removeItem("user"); // Elimina al usuario del almacenamiento local
    localStorage.removeItem("data"); // Elimina al usuario del almacenamiento local
    window.location.href = "/"; // Redirige a la página principal
  });
}

// ========== data-theme... ==========
// Function to get the system's default theme
function getSystemDefaultTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Function to apply the theme from localStorage
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Update button icon and text based on the theme
  const themeToggleButton = document.getElementById("themeToggleButton");
  if (themeToggleButton) {
    themeToggleButton.innerHTML =
      theme === "dark"
        ? //
          '<i class="icon-sun"></i> Switch to Light'
        : '<i class="icon-moon"></i> Switch to Dark';
  }
}

console.log("getSystemDefaultTheme", getSystemDefaultTheme());

// Load the saved theme from localStorage or default to "dark"
const savedTheme = localStorage.getItem("theme") || getSystemDefaultTheme();
applyTheme(savedTheme);

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Define the button HTML with an initial icon and text
  const themeToggleButtonHTML = `
      <button class="contrast" id="themeToggleButton">
        ${
          savedTheme === "dark"
            ? //
              '<i class="icon-sun"></i> Switch to Light'
            : '<i class="icon-moon"></i> Switch to Dark'
        }
      </button>
  `;

  // Insert the button into the body
  document.body.insertAdjacentHTML("beforeend", themeToggleButtonHTML);

  // Add click event to toggle the theme
  const themeToggleButton = document.getElementById("themeToggleButton");
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply the new theme
    applyTheme(newTheme);

    // Save the new theme in localStorage
    localStorage.setItem("theme", newTheme);
  });
});

// ========== data-theme. ==========
