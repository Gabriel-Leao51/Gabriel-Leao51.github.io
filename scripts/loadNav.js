function loadNavigation() {
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      const navContainer = document.createElement("div");
      navContainer.innerHTML = data;
      const navbarPlaceholder = document.getElementById("navbar-placeholder");
      if (navbarPlaceholder) {
        navbarPlaceholder.appendChild(navContainer.firstChild); // Append to the placeholder
      }
    });
}

window.addEventListener("DOMContentLoaded", loadNavigation);
