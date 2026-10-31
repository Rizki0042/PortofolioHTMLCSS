const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
    themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
});

contactForm.addEventListener("submit", (event) => {
event.preventDefault();
contactStatus.textContent =
    "Form berhasil diisi. Pengiriman pesan belum tersedia.";

contactForm.reset();
});

// SKILLS TAB
const skillTabs = document.querySelectorAll(".skill-tab");
const skillCategories = document.querySelectorAll(".skill-category");

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    
    // Hapus active dari semua tab
    skillTabs.forEach((item) => {
      item.classList.remove("active");
    });

    // Tambahkan active ke tab yang diklik
    tab.classList.add("active");

    // Sembunyikan semua category
    skillCategories.forEach((item) => {
      item.classList.remove("active");
    });

    // Tampilkan category yang dipilih
    const selectedCategory = document.getElementById(category);

    selectedCategory.classList.add("active");
  });
});