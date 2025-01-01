function loadNavigation() {
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      const navContainer = document.createElement("div");
      navContainer.innerHTML = data;
      document.body.prepend(navContainer.firstChild); // Insere o nav no início do body
    });
}

window.addEventListener("DOMContentLoaded", loadNavigation);
