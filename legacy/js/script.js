// ==========================sticky navebar============================//
let menuIcon = document.querySelector("#menu-icons");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bxs-x-circle");
  navbar.classList.toggle("active");
};

// ==========================sticky navebar============================//
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ==========================laine bottom navebar============================//
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // ==========================remove navbar in scroll============================//
  menuIcon.classList.remove("bxs-x-circle");
  navbar.classList.remove("active");
};

// =============================typed js=============
const typed = new Typed(".multiple-text", {
  strings: ["FrontEnd Developer", "FrontEnd Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

