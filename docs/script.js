const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const demoForm = document.getElementById("demoForm");
const formSuccess = document.getElementById("formSuccess");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = siteNav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      siteNav.classList.add("open");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  };

  menuToggle.addEventListener("click", toggleMenu);

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });
}

if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(demoForm);
    const name = (formData.get("name") || "there").toString().trim();
    const firstName = name.split(" ")[0] || "there";

    if (formSuccess) {
      formSuccess.textContent = `Thanks, ${firstName}. This demo form is only for presentation, but it shows how a real inquiry form could work.`;
    }

    demoForm.reset();
  });
}
