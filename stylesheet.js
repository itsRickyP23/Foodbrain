var theme = document.getElementById('theme');
var favicon = document.getElementById('favicon');

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  lightMode();
} else {
  darkMode();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newColorScheme = e.matches ? "dark" : "light";
  if (newColorScheme == "light") {
    lightMode();
  }
  else {
    darkMode();
  }
});

function lightMode() {
  theme.setAttribute('href', 'style.css');
  favicon.setAttribute('href', 'images/logoLightMode.png');
  console.log("light");
}

function darkMode() {
  theme.setAttribute('href', 'style.css');
  favicon.setAttribute('href', 'images/logoDarkMode.png');
  console.log("dark");
}