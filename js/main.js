const menuToggle = document.getElementById("menu-toggle");
const menuPanel = document.getElementById("menu-panel");

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

const navLinks = document.querySelectorAll("[data-nav-link]");
const yearElement = document.getElementById("year");

// Buka Tutup Navigasi
function setMenuOpen(isOpen) {
  if (!menuToggle || !menuPanel) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );

  menuPanel.classList.toggle("visible", isOpen);
  menuPanel.classList.toggle("invisible", !isOpen);

  menuPanel.classList.toggle("pointer-events-auto", isOpen);
  menuPanel.classList.toggle("pointer-events-none", !isOpen);

  menuPanel.classList.toggle("opacity-100", isOpen);
  menuPanel.classList.toggle("opacity-0", !isOpen);

  menuPanel.classList.toggle("translate-y-0", isOpen);
  menuPanel.classList.toggle("translate-y-2", !isOpen);

  menuIcon?.classList.toggle("hidden", isOpen);
  closeIcon?.classList.toggle("hidden", !isOpen);
}

// Toggle Button
menuToggle?.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  setMenuOpen(!isOpen);
});

// Close when navigation link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

// Close when clicking outside
document.addEventListener("click", (event) => {
  if (
    menuToggle &&
    menuPanel &&
    !menuToggle.contains(event.target) &&
    !menuPanel.contains(event.target)
  ) {
    setMenuOpen(false);
  }
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

// Automatic copyright year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}