// SETTINGS TOGGLE
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.classList.toggle("show");
}

function changeTheme() {
  document.body.classList.toggle("light-mode");

}
