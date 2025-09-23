const mobileMenuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

mobileMenuButton.addEventListener("click", function () {
  const spans = mobileMenuButton.querySelectorAll("span");

  spans[0].classList.toggle("rotate-45");
  spans[0].classList.toggle("translate-y-2");

  spans[1].classList.toggle("-rotate-45");
  spans[1].classList.toggle("-translate-y-2");

  // toggle mobile menu + overlay
  menu.classList.toggle("hidden");
  overlay.style.display = menu.classList.contains("hidden") ? "none" : "block";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  menu.classList.add("hidden");

  // reset hamburger lines back to normal
  const spans = mobileMenuButton.querySelectorAll("span");
  spans[0].classList.remove("rotate-45", "translate-y-2");
  spans[1].classList.remove("-rotate-45", "-translate-y-2");
});
