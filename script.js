// Elements
const mobileMenuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

const sections = {
  signup: document.getElementById("signup-section"),
  hero: document.getElementById("hero-section"),
  features: document.getElementById("features"),
  plans: document.getElementById("plans"),
};

// Helpers
const spans = mobileMenuButton.querySelectorAll("span");

function toggleHamburger(open = false) {
  spans[0].classList.toggle("rotate-45", open);
  spans[0].classList.toggle("translate-y-2", open);
  spans[1].classList.toggle("-rotate-45", open);
  spans[1].classList.toggle("-translate-y-2", open);
}

function closeMenu() {
  overlay.style.display = "none";
  menu.classList.add("hidden");
  toggleHamburger(false);
}

function openMenu() {
  overlay.style.display = "block";
  menu.classList.remove("hidden");
  toggleHamburger(true);
}

// Event: Mobile menu button
mobileMenuButton.addEventListener("click", () => {
  const isHidden = menu.classList.contains("hidden");
  isHidden ? openMenu() : closeMenu();
});

// Event: Overlay click
overlay.addEventListener("click", closeMenu);

// Toggle signup visibility
function toggleSignup() {
  Object.values(sections).forEach((el) => el.classList.add("hidden"));
  closeMenu();

  const signup = sections.signup;
  signup.classList.remove("hidden");
  signup.classList.add("opacity-0");

  setTimeout(() => signup.classList.replace("opacity-0", "opacity-100"), 10);
}

function removeSignUp() {
  sections.signup.classList.add("hidden");
  sections.hero.classList.remove("hidden");
  sections.features.classList.remove("hidden");
  sections.plans.classList.remove("hidden");
}

// Auto-close menu on link click
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

// Un-hash password
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // toggle eye / eye-slash
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

