// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});


// Close menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });

});


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


// =====================================
// ACTIVE NAVIGATION LINK
// =====================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// =====================================
// CURRENT YEAR
// =====================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});