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
// ===============scroll reveal===============
// ScrollReveal({
//   reset: true,
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });
// ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// ScrollReveal().reveal(
//   ".home-img, .services-container, .portfolio-box, .contact form",
//   { origin: "bottom" }
// );
// ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
// =============================typed js=============
const typed = new Typed(".multiple-text", {
  strings: ["FrontEnd Developer", "Ui Ux Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// Email Send 
//   (function(){
//     emailjs.init("RJy9f6tMPRASpW5cX"); });
// function sendEmail() {
//   let templateParams = {
//     from_name: document.getElementById("FullName").value,
//     from_email: document.getElementById("emailAddress").value,
//     mobile: document.getElementById("mobileNumber").value,
//     subject: document.getElementById("EmailSubject").value,
//     message: document.getElementById("Message").value
//   };

//   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
//     .then(response => {
//       alert("Message Sent Successfully!");
//       document.querySelector("form").reset();
//     }, error => {
//       alert("Failed to send message. Please try again.");
//     });
// }
