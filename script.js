function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark und Light Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon")
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}


btn.addEventListener("click", function () {
  setTheme();
})

btn2.addEventListener("click", function () {
  setTheme();
})

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");
  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  })
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");
  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  })
}

// API URL
const apiUrl = 'https://aareguru.existenz.ch/v2018/today?app=portfolio.app&version=1.0';

// Funktion zum Abrufen der Aare-Informationen
function fetchAareInfo() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Aare-Informationen');
      }
      return response.json();
    })
    .then(data => {
      console.log('Daten:', data); // Debug: Zeigt die erhaltenen Daten

      // Temperatur und Spruch aus den API-Daten
      const temperature = data.aare || 'Keine Daten';
      const saying = data.text || 'Keine Daten';

      // Werte in den HTML-Elementen aktualisieren
      document.getElementById('aare-temperature').innerText = `${temperature} °C`;
      document.getElementById('aare-saying').innerText = saying;
    })
    .catch(error => {
      console.error('Fehler:', error);
      document.getElementById('aare-temperature').innerText = 'Fehler';
      document.getElementById('aare-saying').innerText = 'Fehler';
    });
}

// API-Aufruf bei Seitenladung
document.addEventListener('DOMContentLoaded', fetchAareInfo);
