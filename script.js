/* ==========================
   TYPING ANIMATION
========================== */

const roles = [
    "Python Developer",
    "Frontend Developer",
    "SIH National Level Participant",
    "Hackathon Enthusiast",
    "Problem Solver",
    "Innovator",
    "B.Tech Student"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


/* ==========================
   DARK MODE
========================== */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.innerHTML = "☀️";

    } else {

        themeToggle.innerHTML = "🌙";
    }

});


/* ==========================
   MOBILE MENU
========================== */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText =
                `${Math.ceil(current + increment)}`;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

startCounters();


/* ==========================
   PARTICLES BACKGROUND
========================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#0077ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 4
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#0077ff",

            opacity: 0.3,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    }

});


/* ==========================
   SCROLL REVEAL ANIMATIONS
========================== */

ScrollReveal({

    distance: "80px",

    duration: 1800,

    delay: 200,

    reset: false

});

ScrollReveal().reveal(".hero-content", {
    origin: "left"
});

ScrollReveal().reveal(".hero-image", {
    origin: "right"
});

ScrollReveal().reveal(".section-title", {
    origin: "top"
});

ScrollReveal().reveal(".about-card", {
    origin: "bottom"
});

ScrollReveal().reveal(".skill", {
    origin: "left",
    interval: 120
});

ScrollReveal().reveal(".stat-box", {
    origin: "bottom",
    interval: 120
});

ScrollReveal().reveal(".timeline-card", {
    origin: "right",
    interval: 150
});

ScrollReveal().reveal(".card", {
    origin: "bottom",
    interval: 120
});

ScrollReveal().reveal(".contact-card", {
    scale: 0.85
});


/* ==========================
   NAVBAR ACTIVE LINK
========================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",

    function(e) {

        e.preventDefault();

        document.querySelector(
        this.getAttribute("href"))
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});
