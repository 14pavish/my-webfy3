// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.95)";
    navbar.style.padding = "10px 0";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.padding = "15px 0";
  }

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// ================= CARD HOVER EFFECT =================

const cards = document.querySelectorAll(".custom-card, .feature-card, .choose-box");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });

});


// ================= BUTTON CLICK EFFECT =================

const buttons = document.querySelectorAll(".btn-success, .contact-form button");

buttons.forEach(button => {

  button.addEventListener("click", function () {

    button.innerHTML = "Loading...";

    setTimeout(() => {
      button.innerHTML = "Done ✓";
    }, 1500);

  });

});


// ================= IMAGE ZOOM EFFECT =================

const images = document.querySelectorAll(".about-img, .training-img");

images.forEach(img => {

  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });

});


// ================= FIXTURE ANIMATION =================

const fixtures = document.querySelectorAll(".fixture-card");

fixtures.forEach((fixture, index) => {

  fixture.style.opacity = "0";
  fixture.style.transform = "translateY(50px)";

  setTimeout(() => {
    fixture.style.transition = "1s";
    fixture.style.opacity = "1";
    fixture.style.transform = "translateY(0px)";
  }, index * 300);

});


// ================= CURRENT YEAR AUTO UPDATE =================

const footerYear = document.querySelector(".copyright-year");

if (footerYear) {
  footerYear.innerHTML = new Date().getFullYear();
}


// ================= WELCOME MESSAGE =================

window.onload = function () {

  console.log("Football Website Loaded Successfully!");

};