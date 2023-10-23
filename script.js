const mobileNav = document.getElementById('mobile-nav');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
})

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
})