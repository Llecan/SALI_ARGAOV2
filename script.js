document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 6vw";
    nav.style.background = "#09252a";
    nav.style.flexDirection = "column";
  } else {
    nav.removeAttribute("style");
  }
});

function addToCart(product) {
  const toast = document.getElementById("toast");
  toast.textContent = product + " added to cart";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}
