function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const contactSection = document.getElementById("contact");
  const thankYouSection = document.getElementById("thankYouSection");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    contactSection.style.display = "none";
    thankYouSection.style.display = "block";
    window.scrollTo({ top: thankYouSection.offsetTop, behavior: "smooth" });
  });
});

function goBackToForm() {
  const form = document.getElementById("contactForm");
  document.getElementById("thankYouSection").style.display = "none";
  document.getElementById("contact").style.display = "block";
  form.reset(); // Clear the input fields
}
