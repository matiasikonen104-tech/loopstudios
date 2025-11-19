const navbarMenu = document.getElementById("navbarMenu");
const overlay = document.getElementById("menu-overlay");

// Show overlay when menu opens
navbarMenu.addEventListener("show.bs.collapse", () => {
  overlay.style.background = "#000000"; // full black
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
});

// Hide overlay when menu closes
navbarMenu.addEventListener("hide.bs.collapse", () => {
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
});
