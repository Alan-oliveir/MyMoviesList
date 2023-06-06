const overlay = document.getElementById("modal-overlay");
const background = document.getElementById("modal-background");

overlay.classList.add("open");

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

background.addEventListener("click", backgroundClickHandler);
